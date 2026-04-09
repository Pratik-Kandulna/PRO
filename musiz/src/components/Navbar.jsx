import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(){

  const [open,setOpen] = useState(null);

  return(


     <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
           <img src="/images/M-3.png" alt="logo"/>
        </div>
        <ul className="nav-links">

        <li>Home</li>

        <li 
          className="dropdown"
          onClick={()=>setOpen(open === "discover" ? null : "discover")}
        >
          <span className="dropdown-title"> Discover<span className="arrow">▾</span></span>

          {open === "discover" && (
            <ul className="dropdown-menu">
              <li>Trending Now</li>
              <li>New Releases</li>
              <li>Top Charts</li>
              <li>Browse All Genres</li>
            </ul>
          )}

        </li>

        
         <li
         className="dropdown"
          onClick={()=>setOpen(open === "collections" ? null : "collections")}
        >
          <span className="dropdown-title">
          Collections<span className="arrow">▾</span>
          </span>
          {open === "collections" && (
            <ul className="dropdown-menu">
              <li>My favorites</li>
              <li>My playlists</li>
              <li>Saved albums</li>
              <li>Create new collection</li>
            </ul>
          )}
        </li>
        
        <li>Artists</li>
        <li>Community</li>
        </ul>
       
       


       <div className="nav-right">
        <div className="notification">
          <img src="/images/notif.png" alt="Notifications"/>
          <span className="badge">10+</span>
        </div>

        <div className="search">
          <img src="/images/finalsearch.png" alt="Search"/>
        </div>

        <div className="profile">
             <li>
              <NavLink to="/profile"><img src="/images/profile.png" alt=""/>
              </NavLink>
             </li>
          
          <div
            className="dropdown"
            onClick={()=>setOpen(open === "profile" ? null : "profile")}
          >
            {open === "profile" && (
            <ul className="dropdown-menu">
           
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          )}
       </div>
       </div>
       </div>
        </div>
       </nav>

  )
}

export default Navbar