export default function CoreConcept({ image, title, description }) {
  // Destructuring the props object
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
