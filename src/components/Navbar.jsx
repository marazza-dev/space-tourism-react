import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SrOnly } from "../util/SrOnly";
import logoSvg from "../assets/shared/logo.svg";
import openIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const SkipToContent = styled.a`
  position: absolute;
  z-index: 9999;
  background: ${(props) => props.theme.clrWhite};
  color: ${(props) => props.theme.clrDark};
  padding: 0.5em 1em;
  border-radius: 15px;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-in;

  &:focus {
    transform: translateY(0);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  & img {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  @media (min-width: ${(props) => props.theme.brMedium}) {
    &::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -2.5rem;
      margin-left: 2rem;
      background: hsl(0 0% 100% / 0.25);
      order: 1;
    }
    & nav {
      order: 2;
    }
  }
`;
const MenuBotton = styled.button`
  display: none;

  @media (max-width: ${(props) => props.theme.brSmall}) {
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

    &:focus-visible {
      outline: 5px solid white;
      outline-offset: 5px;
    }
  }
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  gap: clamp(1.5rem, 5vw, 3.5rem);
  padding: 2.125rem;
  margin: 0;
  list-style: none;
  background: hsl(230 35% 7% / 0.95);
  opacity: 1;

  @media (max-width: ${(props) => props.theme.brSmall}) {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    padding: min(20rem, 15vh) 2rem;
    margin: 0;
    gap: 2.5rem;
    flex-direction: column;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: transform 600ms ease, opacity 500ms ease-in-out;
  }

  @supports (backdrop-filter: blur(1rem)) {
    background: hsl(0 0% 100% / 0.05);
    backdrop-filter: blur(1.5rem);
  }

  @media (min-width: ${(props) => props.theme.brSmall}) {
    padding-inline: clamp(3rem, 7vw, 7rem);
  }
  @media (min-width: ${(props) => props.theme.brMedium}) {
    margin-block: 2rem;
    & > li:last-child {
      margin-right: 5rem;
    }
  }
  @media (min-width: 35em) and (max-width: 44.999em) {
    & a > span {
      display: none;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 2.125rem 0;
  font-family: ${(props) => props.theme.ffSansCondens};
  font-size: ${(props) => props.theme.fs300};
  letter-spacing: 2.7px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.clrWhite};
  border: 0;
  border-bottom: 0.2rem solid hsl(0 0% 100% / 0);

  @media (min-width: ${(props) => props.theme.brMedium}) {
    &:hover {
      border-color: hsl(0 0% 100% / 0.5);
    }
    &.active {
      border-color: hsl(0 0% 100% / 1);
    }
  }

  @media (max-width: ${(props) => props.theme.brMedium}) {
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
      <SkipToContent href='#main'>Skip to content</SkipToContent>
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
                <span aria-hidden='true'>00</span>Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/destination' onClick={handleNavClick}>
                <span aria-hidden='true'>01</span>Destination
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/crew' onClick={handleNavClick}>
                <span aria-hidden='true'>02</span>Crew
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/technology' onClick={handleNavClick}>
                <span aria-hidden='true'>03</span>Technology
              </StyledNavLink>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>
    </>
  );
};

export default Navbar;
