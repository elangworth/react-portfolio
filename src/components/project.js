import React from "react";

function Project(props){
    return (
        <div>
            <div id="project" className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
                {props.projects.map((project) => (
                    <div className="column-is-half">
                        <div className="card  mb-5">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <a href={project.live} target="_blank" rel="noreferrer">
                                        <img src={project.image} alt="Placeholder" />
                                    </a>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left"></div>
                                    <div className="media-content">
                                        <p className="title is-4" key={project.id}>
                                            {project.title}
                                        </p>
                                    </div>
                                </div>
                                <div className="content has-text-left">
                                    {project.description}
                                </div>
                                <div className="content has-text-left">
                                    <b>Technical Skills Used:</b> {project.skills}
                                </div>
                                <div>
                                    <a href={project.repo} target="_blank" rel="norefferer">
                                    Github Repository
                                    </a>
                                </div>
                                <div>
                                    <a href={project.live} target="_blank" rel="norefferer">
                                    Live Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;