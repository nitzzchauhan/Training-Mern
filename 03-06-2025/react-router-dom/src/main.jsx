import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Dashboard from "./components/user/Dashboard.jsx";
import Profile from "./components/user/Profile.jsx";
import Settings from "./components/user/Setting.jsx";
import Login from "./components/user/Login.jsx";

let isAuthenticate = false;
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* dynamic route */}
      <Route path="user/:id/:age" element={<User />} />
      {/* nested route */}
      {/* <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route> */}

      {/* programmatically navigation */}
      <Route
        path="/dashboard"
        element={isAuthenticate ? <Dashboard /> : <Login />}
      />
      <Route path="/login" element={<Login />} />

      {/*  catch all the urls */}

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);
