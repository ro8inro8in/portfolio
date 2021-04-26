import styled from "styled-components";
import pixelme from "../images/pixelme.png";

const HeaderContainer = styled.div`
background-color: #049CD8;
  // margin-top: 3%;
  //margin-bottom: 5%;
  padding: 5%;
`;

//  const MarioContainer = styled.div`
//   //   display: flex;
//   //   flex-direction: column;
//   //   align-items: center;
//   //   justify-content: center;
//   //   background-size: cover;
//   //   background-position: 50% 50%;
//     position: absolute;
    
//     z-index: -1;

//   `;
// const Mario = styled.img`
// width: 100%;
// `;

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
  // font-family: 'Press Start 2P', cursive;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  1px 1px 0 #000;
  @media (max-width: 768px) {
    font-size: 1rem;
    color: white;
  }
`;

const Header = () => {
  return (
    <div id="Header">
      <HeaderContainer>
        {/* <VideoContainer>
          <video
            autoPlay
            loop
            muted
            style={{
              
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              position: "absolute",

              // width: "100%",
              // minHeight: "100%",
              // minWidth: "1vw",
              zIndex: "-1",
            }}
          >
            <source
              src={f07ca377ad11f4f936afa490c0772ad6540eb7c4}
              type="video/mp4"
            />
          </video>
        </VideoContainer>  */}
        {/* <MarioContainer>
        <Mario img src={mariobackground} alt="background-photo" />
        </MarioContainer> */}
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
