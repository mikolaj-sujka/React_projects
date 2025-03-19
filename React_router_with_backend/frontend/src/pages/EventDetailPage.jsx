import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export const eventDetailsLoader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Failed to fetch details for selected event" }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const eventDetailsDelete = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Failed to delete selected event" }),
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
};
