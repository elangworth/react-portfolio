import React from "react";
import Project from "./project";

const project = [
    {
        id: 0,
        title: "Centiment",
        image: "images/Centiment.png",
        description: "Welcome to Centiment, the social media platform where you can connect with like-minded individuals and engage in meaningful discussions about the topics that matter to you. Our platform operates on a unique model where users can purchase access to communities using platform tokens. What sets us apart from other social media platforms is that the value of each community fluctuates based on how many people purchase access. This means that the more popular a community is, the more valuable it becomes. As a result, users have the option to sell their access to a community for a profit if they choose to do so. Not only does this model encourage users to participate in and contribute to meaningful discussions, it also incentivizes the creation of high-quality content and fosters a sense of ownership and investment in the communities they are a part of. With Centiment, you can discover and join communities that align with your interests and passions, and engage with others who share your perspective. Plus, with the ability to earn tokens and potentially profit from your involvement in a community, the possibilities are endless.",
        repo: "https://github.com/isayahdurst/centiment",
        live: "https://centiment-inc.herokuapp.com/login"
    },
    {
        id: 1,
        title: "Flights Tonight",
        image: "images/FlightsTonight.png",
        description: "In this project we used a form to ask users were they live and where they want to go. Once they search, they can the view the current weather and the 5 day forecast for where they want to go. If they don't like the weather there, they can serach again. They can click on past cities to go back and look at the weather again. To get flight data users will need to click on the destination city again. The flight data will show them one flight that goes from the most popular airport in their area to the most popular airport in the destination area.",
        repo: "https://github.com/elangworth/flights-tonight",
        live: "https://elangworth.github.io/flights-tonight/"
    },
    {
        id: 2,
        title: "Search Engine Optimization",
        image: "images/Horiseon.png",
        description: "This project demonstrates the proper use of semantic HTML tags. The HTML follows a logical structure. All of the images have the appropriate alt tags.",
        repo: "https://github.com/elangworth/horiseon-search-engine-optimimization"
    },
    {
        id: 3,
        title: "LeadStack",
        image: "images/LeadStack.png",
        description: "This project allows sales people to easily communicate with their contacts through email and sms",
        repo: "https://github.com/isayahdurst/leadstack",
        live: "https://lead-stack.herokuapp.com/"
    }
];

function Portfolio(){
    return(
        <div>
            <h2 id ="my-work" className="content is-large">Portfolio</h2>
            <hr/>
            <Project projects={project}/>
        </div>
    );
}

export default Portfolio;