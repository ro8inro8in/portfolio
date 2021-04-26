import styled from "styled-components";
import nasamock from "../images/nasamock.png";
import estatemock from "../images/estatemock.png";
import nbrlymock from "../images/nbrlymock.png";
import weathermock from "../images/weathermock.png";

const AllProjectsContainer = styled.div`
  background-color: #fbd000;
  padding: 0em 3em 7em 3em;
  @media (max-width: 768px) {
    padding: 0em 1em 6em 1em;
  }
`;

const SingleJobContainer = styled.span`
  background-color: #FCDE4D;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: items;
  padding: 2em;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectDescription = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const ProjectImg = styled.img`
  width: 500px;
  margin-right: 3em;
  @media (max-width: 768px) {
    margin-right: 0;
    width: 300px;
  }
`;

const ProjectHeading = styled.h2`
  background-color: #43b047;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  1px 1px 0 #000;
  color: white;
  text-align: center;
  font-size: 2.5em;
  padding: 0.5em;
  @media (max-width: 768px) {
    padding: 0.1em;
  }
`;

const Heading = styled.h3`
  color: black;
  text-decoration: underline;
  font-size: 2em;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
    padding: 0.1em;
  }
`;

const Projects = () => {
  return (
    <div id="Projects">
      <AllProjectsContainer>
        <ProjectHeading>PROJECTS</ProjectHeading>
        <SingleJobContainer>
          <ProjectImg img src={nbrlymock} alt="profile-photo" />
          <ProjectDescription>
            <Heading>NBRLY</Heading>
            <p>
              A full stack web app that connects you with the people around you.
              By answering the simple question, "What do you want to do today?"
              you are instantly linked with like-minded people in your
              geographic vicinity for sports, nightlife, and everything in
              between. Built with React and Firebase, in collaboration with
              developers Hal Fulcher and Anna Balquin.
              <a
                href="https://github.com/ro8inro8in/nbrly"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
              to view code.
            </p>
          </ProjectDescription>
        </SingleJobContainer>

        <SingleJobContainer>
          <a
            href="https://nasa-search.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={nasamock} alt="" />
          </a>
          <ProjectDescription>
            <Heading>NASA Search Engine</Heading>
            <p>
              A search engine app for NASA's image library API endpoint was
              provided as part of the brief. User is able to search for and
              return space-related images. Built with React.
              <a href="https://nasa-search.vercel.app/" rel="noreferrer">
                Click here
              </a>
              to view deployed app.
              <a
                href="https://github.com/ro8inro8in/Nasa-Tech-Test"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
              to view code.
            </p>
          </ProjectDescription>
        </SingleJobContainer>

        <SingleJobContainer>
          <a
            href="https://halfulcher.github.io/weather-app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={weathermock} alt="profile-photo" />
          </a>
          <ProjectDescription>
            <Heading>Weather App</Heading>
            <p>
              This is a React application using the Open Weather API, My app
              will cover a 5 day forecast and retrieve all relevant information
              for each day such as: wind direction, speed, humidity, minimum and
              maximum temperature each represented with unique icons depending
              on the weather for each particular day
              <a
                href="https://halfulcher.github.io/weather-app/"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
              to view deployed app.
              <a
                href="https://github.com/HalFulcher/weather-app"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
              to view code.
            </p>
          </ProjectDescription>
        </SingleJobContainer>

        <SingleJobContainer>
          <a
            href="https://github.com/ro8inro8in/surreal-estate"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={estatemock} alt="" />
          </a>
          <ProjectDescription>
            <Heading>Sureal Estate</Heading>
            <p>
              A mock property website designed using React. Users can view the
              current property listings and filter them by city or price, as
              well as add their own properties to sell. The properties are added
              and retrieved from a separately deployed Heroku database. You can
              view a deployed version of the project
              <a
                href="https://github.com/ro8inro8in/surreal-estate"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
              to view code.
            </p>
          </ProjectDescription>
        </SingleJobContainer>
      </AllProjectsContainer>
    </div>
  );
};

export default Projects;
