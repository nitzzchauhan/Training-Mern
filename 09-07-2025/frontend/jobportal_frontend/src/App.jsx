import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <h1>Hello from login</h1>,
  },
  {
    path: "/signup",
    element: <h1>Hello from signup</h1>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default App;
