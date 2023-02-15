import React from "react";

function Footer() {
  return (
    <footer>
        <h2 id="contact-me" className="navbar is-medium is-centered">Contact Me</h2>
        <nav className="tabs is-centered">
            <ul className="nav nav-tabs">
                <li className="nav-item tabs-link-color"><a className="tabs-link-color" href="https://www.linkedin.com/in/emilylangworth/">LinkedIn</a></li>
                <li className="nav-item tabs-link-color"><a href="https://stackoverflow.com/users/20472615/emily-langworth">Stack OverFlow</a></li>
                <li className="nav-item tabs-link-color"><a href="https://github.com/elangworth">Github</a></li>
            </ul>
        </nav>
    </footer>
  );
}

export default Footer;