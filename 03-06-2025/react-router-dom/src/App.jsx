import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Dashboard from "./components/user/Dashboard";
import Profile from "./components/user/Profile";
import Settings from "./components/user/Setting";
Settings

// entery point for user

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* dynamic route */}
          <Route path="user/:id/:age" element={<User />} />
          {/* {nested route} */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            {/* Optional: Default child route for dashboard */}
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
