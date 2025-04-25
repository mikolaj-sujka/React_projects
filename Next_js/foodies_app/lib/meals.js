"use server";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMealBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  let extension;
  if (typeof meal.image === "string") {
    extension = meal.image.split(".").pop();
  } else if (meal.image.name) {
    extension = meal.image.name.split(".").pop();
  } else {
    throw new Error("Nie można określić rozszerzenia pliku.");
  }

  const fileName = `${meal.slug}.${extension}`;

  const fs = require("fs");
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.log("File written successfully:", fileName);
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )`
  ).run(meal);
}
