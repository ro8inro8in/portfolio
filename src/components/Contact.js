  import styled from "styled-components";
  import { AiOutlineMail } from 'react-icons/ai';
  import { AiOutlineLinkedin } from 'react-icons/ai';
  import { AiFillGithub } from 'react-icons/ai';
  
const ContactInfo = styled.div`
  background:  #049CD8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em; 
`;

const ImgIcon = styled.div`
  font-size: 2rem;
  color: white;
  padding: 0.2em;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
const Contact = () => {
  return (
    <div id="Contact">
      <ContactInfo>
         <ImgIcon>
         <NavLink href="mailto: robinedwards1987@gmail.com">
         <AiOutlineMail />
         </NavLink>
         </ImgIcon> 
         <ImgIcon>
         <NavLink href="https://www.linkedin.com/in/robin-edwards-6875581bb/">
         <AiOutlineLinkedin />
         </NavLink>
         </ImgIcon>
         <ImgIcon>
         <NavLink href="https://github.com/ro8inro8in">
         <AiFillGithub />
         </NavLink>
         </ImgIcon>
      </ContactInfo>
    </div>
  );
};

export default Contact;