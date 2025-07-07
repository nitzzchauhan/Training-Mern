import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Home() {
  return (
    <>
      <h1>I am Home</h1>
      <h2>Search for User</h2>
      <label htmlFor="">User ID</label>
      <input type="number" />
      <button ><Link to="/user/45">Search User</Link></button>

      {/* <a href="/about">About</a> */}
      <br />
      <br />
      <br />
      <br />
      {/* <Link to="/about">About Us</Link> */}

      {/* adds a active class for styling active routes */}
      <NavLink to="/about" className={({isActive})=>isActive ? "active":""}>About</NavLink>

    </>
  );
}
