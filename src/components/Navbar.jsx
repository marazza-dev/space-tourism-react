import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SrOnly } from "../util/SrOnly";
import logoSvg from "../assets/shared/logo.svg";
import openIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const StyledHeader = styled.header`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  border: 1px solid red;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  & img {
    margin: 1rem;
  }
`;
const MenuBotton = styled.button`
  display: none;

  @media (max-width: ${(props) => props.theme.mobile}) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    background-image: ${(props) =>
      props.isOpen ? `url(${closeIcon})` : `url(${openIcon})`};
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 2rem;
  margin: 0;
  list-style: none;
  background: hsl(230 35% 7% / 0.95);

  @media (max-width: ${(props) => props.theme.mobile}) {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    padding: min(20rem, 15vh) 2rem;
    margin: 0;
    gap: 2.5rem;
    flex-direction: column;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.6s ease;
  }

  @supports (backdrop-filter: blur(1rem)) {
    background: hsl(0 0% 100% / 0.05);
    backdrop-filter: blur(1.5rem);
  } ;
`;

const StyledNavLink = styled(NavLink)`
  padding: 2rem 0;
  font-family: ${(props) => props.theme.ffSansCondens};
  font-size: ${(props) => props.theme.fs300};
  letter-spacing: 2.7px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.clrWhite};
  border: 0;
  border-bottom: 0.2rem solid hsl(0 0% 100% / 0);

  @media (min-width: ${(props) => props.theme.mobile}) {
    &:hover {
      border-color: hsl(0 0% 100% / 0.5);
    }
    &.active {
      border-color: hsl(0 0% 100% / 1);
    }
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 1rem 0;
  }

  & > span {
    font-weight: 700;
    margin-right: 0.5em;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleNavClick = () => {
    if (open === true) {
      setOpen(false);
    }
  };
  return (
    <>
      <StyledHeader>
        <div>
          <img src={logoSvg} alt='space tourism logo' />
        </div>
        <MenuBotton
          aria-controls='navigation'
          isOpen={open}
          onClick={handleClickOpen}
        >
          <SrOnly aria-expanded='false'>Menu</SrOnly>
        </MenuBotton>
        <nav>
          <StyledList isOpen={open}>
            <li>
              <StyledNavLink to='/' onClick={handleNavClick} end>
                <span>00</span>Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/destination' onClick={handleNavClick}>
                <span>01</span>Destination
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/crew' onClick={handleNavClick}>
                <span>02</span>Crew
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/technology' onClick={handleNavClick}>
                <span>03</span>Technology
              </StyledNavLink>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>
    </>
  );
};

export default Navbar;
