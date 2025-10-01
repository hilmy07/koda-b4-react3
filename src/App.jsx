import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pages/About",
    element: <About />,
  },
  {
    path: "/pages/ContactUs",
    element: <ContactUs />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
