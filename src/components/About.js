import styled from "styled-components";
const AboutContainer = styled.div`
      background-color: #FBD000;
 color: black;
   box-sizing: border-box;
   padding: 02em 20em;
    width: 100%;
  
     margin: auto;
   display: flex;
    flex-direction: column;
    align-items: center;   
   @media (max-width: 768px) {
    padding: 1em 1em;
  }
`;

const AboutText = styled.div`
  margin: auto;
  text-align: center;
  padding: 1em;
`;

const AboutHeading = styled.h2`
//  background-color: #43B047;
  text-align: center;
  font-size: 2em;
  // padding-top: em;
  @media (max-width: 768px) {
    padding: 0.1em;
    width: 100%;
    
    
  }
`;
const About = () => {
return (
  <div id="About">
    <AboutContainer>
    <AboutHeading>ABOUT ME !</AboutHeading>
      <AboutText>
        <h3>
          Hello I'm Robin, a front end web developer and
          graduate of Manchester Codes, an
          intensive six month course covering full stack web development. Below
          you'll find some examples of my work - please  
          <a href="#Contacts"> contact me</a> if you would like to discuss any of my projects or would just like to talk about code!
        </h3>
      </AboutText>
    </AboutContainer>
  </div>
);
};

export default About;