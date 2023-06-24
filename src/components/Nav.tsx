import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #3056d3;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 218px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NavLogo = styled.a`
  color: #fff;
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: 2.3rem;
  letter-spacing: 4px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    padding-left: 0;
  }
`;

const NavMenuItem = styled.li`
  margin-left: 15px;
  padding: 8px 16px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavMenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const NavToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: none;
  font-size: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavLogo href="/">DOCQUEST</NavLogo>

      <NavToggle onClick={toggleMenu}>{isOpen ? 'Close' : 'Menu'}</NavToggle>

      <NavMenu isOpen={isOpen}>
        <NavMenuItem>
          <NavMenuLink to="/signin">Sign in</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink to="/signup">Sign up</NavMenuLink>
        </NavMenuItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
