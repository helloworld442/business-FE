import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layout/AuthLayout";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { loader as postsLoader } from "../pages/HomePage";
import { action as signinAction } from "../pages/SignInPage";
import { action as signupAction } from "../pages/SignUpPage";
import { action as writeAction } from "../pages/WritePage";
import Error from "../components/Error/Error";
import WritePage from "../pages/WritePage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    loader: postsLoader,
  },

  {
    path: "/write",
    element: <WritePage />,
    errorElement: <Error />,
    action: writeAction,
  },

  {
    path: "/detail/:postId",
    element: <DetailPage />,
    errorElement: <Error />,
  },

  {
    path: "/user/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
        errorElement: <Error />,
        action: signinAction,
      },
      {
        path: "signup",
        element: <SignUpPage />,
        errorElement: <Error />,
        action: signupAction,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
