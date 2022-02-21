import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import bgHomeDesktop from "../assets/home/background-home-desktop.jpg";
import bgDestinationDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgCrewDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgTechnologyDesktop from "../assets/technology/background-technology-desktop.jpg";

import bgHomeTablet from "../assets/home/background-home-tablet.jpg";
import bgDestinationTablet from "../assets/destination/background-destination-tablet.jpg";
import bgCrewTablet from "../assets/crew/background-crew-tablet.jpg";
import bgTechnologyTablet from "../assets/technology/background-technology-tablet.jpg";

import bgHomeMobile from "../assets/home/background-home-mobile.jpg";
import bgDestinationMobile from "../assets/destination/background-destination-mobile.jpg";
import bgCrewMobile from "../assets/crew/background-crew-mobile.jpg";
import bgTechnologyMobile from "../assets/technology/background-technology-mobile.jpg";

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => {
    switch (props.current) {
      case "/":
        return `url(${bgHomeMobile})`;
        break;
      case "/destination":
        return `url(${bgDestinationMobile})`;
        break;
      case "/crew":
        return `url(${bgCrewMobile})`;
      case "/technology":
        return `url(${bgTechnologyMobile})`;
      default:
        return `url(${bgHomeMobile})`;
    }
  }};
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media (min-width: ${(props) => props.theme.brSmall}) {
    background-image: ${(props) => {
      switch (props.current) {
        case "/":
          return `url(${bgHomeTablet})`;
          break;
        case "/destination":
          return `url(${bgDestinationTablet})`;
          break;
        case "/crew":
          return `url(${bgCrewTablet})`;
        case "/technology":
          return `url(${bgTechnologyTablet})`;
        default:
          return `url(${bgHomeTablet})`;
      }
    }};
    background-position: center center;
  }
  @media (min-width: ${(props) => props.theme.brMedium}) {
    background-image: ${(props) => {
      switch (props.current) {
        case "/":
          return `url(${bgHomeDesktop})`;
          break;
        case "/destination":
          return `url(${bgDestinationDesktop})`;
          break;
        case "/crew":
          return `url(${bgCrewDesktop})`;
        case "/technology":
          return `url(${bgTechnologyDesktop})`;
        default:
          return `url(${bgHomeDesktop})`;
      }
    }};
  }
`;

const BackgroundWrapper = ({ children }) => {
  const path = useLocation().pathname;
  return <BackgroundContainer current={path}>{children}</BackgroundContainer>;
};

export default BackgroundWrapper;
