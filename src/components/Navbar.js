// import { withRouter } from "react-router";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
background:  #E52521;
width: 100%;
height: 50px:
margin-top -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
  
}
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    justify-content: center;

    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1rem;
    cursor: pointer;
    color: white;
  }
`;
const NavContainer = styled.span`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 760px) {
    // display: none;
  }
`;
const NavItem = styled.li`
display: flex;
flex-direction: row;
  height: 80px;
  //border: 1px solid red;
  @media screen and (max-width: 760px) {
    height: 40px;
  }
`;
const NavLink = styled.a`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  cursor: pointer;
  &.active {
    border-bottom: 3px solid red;
  }
  @media screen and (max-width: 760px) {
     display: none;
  }
`;

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavContainer>
          <NavItem>
          <NavLink href="#Header">
            About
          </NavLink>
          <NavLink href="#Projects">
            Projects
          </NavLink>
          <NavLink href="#Contact">
            Contact
          </NavLink>
          </NavItem>
        </NavContainer>
      </Nav>
    </>
  );
};
export default Navbar;
