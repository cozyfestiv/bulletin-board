import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import Layout from "./layout/Layout";
import { Cards } from "./Cards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          { path: "posts", children: [{ index: true, element: <Cards /> }] },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError(); //this gets the specific error that was thrown
  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
