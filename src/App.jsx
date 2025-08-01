import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Portofolio from "./Portofolio/Portofolio";
import Contact from "./Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./About/About";
import Notfound from "./Notfound/Notfound";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portofolio", element: <Portofolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
