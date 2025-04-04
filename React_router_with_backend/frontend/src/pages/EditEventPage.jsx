import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return <EventForm event={event} method={"patch"} />;
};
