import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Compounds/Home";
import Login from "./Compounds/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Compounds/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderProvider from "./Atoms/HeaderContext";
import React from "react";
import CreateCard from "./Compounds/CreateCard";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <HeaderProvider>
            <Home />
          </HeaderProvider>
        ),
      },
      { path: "login", element: <Login /> },
      {
        path: "/dashboard",
        element: (
          <HeaderProvider>
            <Dashboard />
          </HeaderProvider>
        ),
      },
      {
        path: "/CRUD",
        element: (
          <HeaderProvider>
            <CreateCard />
          </HeaderProvider>
        ),
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
