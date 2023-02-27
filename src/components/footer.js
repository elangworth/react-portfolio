import React from "react";

function Footer(props) {
  const tabs = ["LinkedIn", "StackOverFlow", "Github"];
  return (
    <footer>
      <nav className="tabs is-centered">
        <ul className="nav nav-tabs">
          <li className="nav-item tabs-link-color"><a className="my-color" href="https://www.linkedin.com/in/emilylangworth/" target="_blank">LinkedIn</a></li>
          <li className="nav-item tabs-link-color"><a className="my-color" href="https://stackoverflow.com/users/20472615/emily-langworth" target="_blank">Stack OverFlow</a></li>
          <li className="nav-item tabs-link-color"><a className="my-color" href="https://github.com/elangworth"target="_blank">Github</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;