import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login.jsx";
import Test from "./components/Test.jsx";
import Dashboard from "./components/Dashboard.jsx";




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/test",
    element: <Test/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default App;
