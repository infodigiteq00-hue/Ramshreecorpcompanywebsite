import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Expertise } from "./pages/Expertise";
import { Root } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "expertise",
        Component: Expertise,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
