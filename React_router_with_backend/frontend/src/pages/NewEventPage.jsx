import EventForm from "../components/EventForm";

export const NewEventPage = () => {
  return <EventForm method={"post"} />;
};

// export const newEventAction = async ({ request, params }) => {
//   const data = await request.formData();

//   const eventData = {
//     title: data.get("title"),
//     date: data.get("date"),
//     description: data.get("description"),
//     image: data.get("image"),
//   };

//   const response = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(eventData),
//   });

//   if (!response.ok) {
//     throw new Response({ message: "Could not create event" }, { status: 500 });
//   }

//   return redirect("/events");
// };
