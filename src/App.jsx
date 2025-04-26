import React from "react";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Main from "./components/MainPage/main";
import Home from "./components/MainPage/Home";

const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body></Body> },
    { path: "/login", element: <Login></Login> },
    { path: "/signup", element: <SignUp></SignUp> },
    {
      path: "/main",
      element: <Main></Main>,
    },
    {
      path: "/home",
      element: <Home></Home>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
