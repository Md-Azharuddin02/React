import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
