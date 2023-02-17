import React, { useState } from "react";
import Nav from "./nav.js";
import About from "./about";
import Portfolio from "./Portfolio.js";
import Contact from "./contact";
import Resume from "./resume";

function Header() {
  
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
      switch (currentPage) {
        case "About":
          return <About />;
        case "Portfolio":
          return <Portfolio />;
        case "Contact":
          return <Contact />;
        case "Resume":
          return <Resume />;
        default: 
          return <About />;
      }
    };
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand header">
            <p className="navbar-item is-large header"> 
              Emily Langworth
            </p>
          </div>
        </nav>
        <Nav 
          currentPage = {currentPage}
          handlePageChange = {handlePageChange}
          />
        <main>
          <div>{renderPage(currentPage)}</div>
        </main>
      </div>
  );
}

export default Header;
