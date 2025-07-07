import React from "react";
import { Link , Outlet} from "react-router-dom";
import Navbar from "./uicompnent.jsx/Navbar";



export default function Dashboard() {
  return (
    <>
      <Navbar/>
    
      <Outlet /> {/* Renders nested routes */}
    </>
  );
}
