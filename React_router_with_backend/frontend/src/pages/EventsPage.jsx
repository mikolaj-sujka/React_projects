import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

export const EventsPage = () => {
  const response = useLoaderData();

  // if (response.isError) {
  //   return <p>{response.message}</p>;
  // }

  const events = response.events;

  return <>{<EventsList events={events} />}</>;
};

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Failed to fetch events" };
    throw new Response(JSON.stringify({ message: "Failed to fetch events" }), {
      status: 500,
    });
  } else {
    return response;
  }
};
