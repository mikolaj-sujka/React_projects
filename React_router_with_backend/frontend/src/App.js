import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventsPage, eventsLoader } from "./pages/EventsPage";
import {
  EventDetailPage,
  eventDetailsLoader,
  eventDetailsDelete,
} from "./pages/EventDetailPage";
import { Layout } from "./pages/Layout";
import { EventsRootLayout } from "./pages/EventsRoot";
import { Error } from "./pages/Error";
import { EditEventPage } from "./pages/EditEventPage";
import { NewEventPage } from "./pages/NewEventPage";
import { eventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            loader: eventDetailsLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailsDelete,
              },
              { path: "edit", element: <EditEventPage />, action: eventAction },
            ],
          },
          { path: "new", element: <NewEventPage />, action: eventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
