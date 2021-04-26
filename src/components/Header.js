import styled from "styled-components";
import pixelme from "../images/pixelme.png";

const HeaderContainer = styled.div`
background-color: #049CD8;
  // margin-top: 3%;
  //margin-bottom: 5%;
  padding: 5%;
`;

const Image = styled.img`
  height: 12em;
  width: 12em;
  border-style: solid;
  object-fit: contain;
  border-radius: 50%;
  padding: 2%;
  
  @media (max-width: 768px) {
    height: 8em;
    width: 8em;
  }
`;

const HeadingContainer = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  1px 1px 0 #000;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    color: white;
  }
`;

const Header = () => {
  return (
    <div id="Header">
      <HeaderContainer>
        <HeadingContainer>
          <h1>ROBIN EDWARDS</h1>
          <Image img src={pixelme} alt="profile-photo" />
          <h3>SOFTWARE ENGINEER</h3>
        </HeadingContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
