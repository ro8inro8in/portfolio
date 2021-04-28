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
  background-color: #fcde4d;
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
    font-size: 0.7em;
    // text-align: center;
  }
`;

const ProjectImg = styled.img`
  width: 500px;
  margin-right: 3em;
  @media (max-width: 768px) {
    margin-right: 0;
    width: 400px;
  }
  @media (max-width: 468px) {
    
    width: 250px;
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
    font-size: 2em;
  }
`;

const Heading = styled.h3`
  color: black;
  text-decoration: underline;
  font-size: 2em;
  text-align: center;
  padding-bottom: 20px;
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
          <a href="https://nbrly-app.herokuapp.com/" target="_blank" rel="noreferrer">
            <ProjectImg img src={nbrlymock} alt="profile-photo" />
          </a>
          <ProjectDescription>
            <a href="https://nbrly-app.herokuapp.com/" target="_blank" rel="noreferrer">
              <Heading>NBRLY</Heading>
            </a>
            <p>
              NBRLY is a full-stack React web application that uses the Google
              geolocation API and Firebase to store all our user data. NBRLY
              will match you with other users in your area who have picked the
              same activities as yourself. NBRLY is an ongoing group project in
              collaboration with developers Anna Balquin & Hal Fulcher.
            </p>
          </ProjectDescription>
        </SingleJobContainer>

        <SingleJobContainer>
          <a href="https://nasa-search.vercel.app/" target="_blank" rel="noreferrer">
            <ProjectImg img src={nasamock} alt="" />
          </a>
          <ProjectDescription>
            <a href="https://nasa-search.vercel.app/" target="_blank" rel="noreferrer">
              <Heading>NASA Search</Heading>
            </a>
            <p>
              A search engine app for NASA's image library. The API endpoint was
              provided as part of the brief. A User can search for and return
              space-related images. Built with React.
            </p>
          </ProjectDescription>
        </SingleJobContainer>

        <SingleJobContainer>
          <a
            href="https://forecast-app-six.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImg img src={weathermock} alt="profile-photo" />
          </a>
          <ProjectDescription>
            <a
              href="https://forecast-app-six.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Heading>Weather App</Heading>
            </a>
            <p>
              This is a React application using the Open Weather API. My app
              will cover a 5 day forecast and retrieve all relevant information
              for each day such as wind direction, wind speed, humidity, minimum
              and the maximum temperature each represented with unique icons
              depending on the weather for each particular day
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
            <a
              href="https://github.com/ro8inro8in/surreal-estate"
              target="_blank"
              rel="noreferrer"
            >
              <Heading>Surreal Estate</Heading>
            </a>
            <p>
              Surreal Estate is a mock property website designed using React.
              You can list and delete properties as well as sort by location and
              prices. This project focuses on functionality over style. If I had
              more time to complete this project I would have focused on styling
              also.
            </p>
          </ProjectDescription>
        </SingleJobContainer>
      </AllProjectsContainer>
    </div>
  );
};

export default Projects;
