import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, {getFormData} from "./Components/CreatePost";
import PostList, {fetchPostData} from "./Components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostList />,
        loader: fetchPostData
       
      },
      { path: "/create-post", element: <CreatePost />, action:getFormData },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
