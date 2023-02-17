import { React } from "react";


function Resume() {
    return (
      <div className="columns">
        <div className="column">
          <p className="content is-medium">Résumé</p>
          <hr />
  
          <a
            className="button is-primary"
            href="/EmilyLangworthResume.pdf"
            download
          >
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            <span>Download My Résumé</span>
          </a>
        </div>
        <div className="column">
          <p className="content is-medium">Skills</p>
          <hr />
          <ul>
              <li>HTML, CSS, Javascript</li>
              <li>Node, GraphQL, JSON</li>
              <li>React, Express, IndexDB,</li>
              <li>Markdown, Mongo, Inquirer</li>
              <li>Git, MySQL, Sequelize</li>
              <li>Github Repo Management</li>
          </ul>
        </div>
      </div>
    );
  }

  export default Resume;
  