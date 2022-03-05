import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
  display: inline-grid;
  position: relative;
  place-items: center;
  padding: 0 2em;
  aspect-ratio: 1;
  border-radius: 50%;
  text-decoration: none;
  z-index: 1;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.ffSerif};
  color: ${(props) => props.theme.clrDark};
  background-color: ${(props) => props.theme.clrWhite};

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: hsl(0 0% 100% / 0.1);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  @media (min-width: ${(props) => props.theme.brMedium}) {
    font-size: 2rem;
  }
`;

const LargeButton = ({ to, text }) => {
  return (
    <>
      <StyledButton to={to}>{text}</StyledButton>
    </>
  );
};

export default LargeButton;
