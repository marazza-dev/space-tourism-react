import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MainTitle } from "../../styles/MainTitle.styled";
import { SrOnly } from "../../styles/SrOnly.styled";

import launchPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import launchLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";

const techs = [
  {
    title: "LAUNCH VEHICLE",
    content:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operations. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch",
    image_portrait: launchPortrait,
    image_landscape: launchLandscape,
    number: 1,
  },
  {
    title: "SPACEPORT",
    content:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image_portrait: spaceportPortrait,
    image_landscape: spaceportLandscape,
    number: 2,
  },
  {
    title: "SPACE CAPSULE",
    content:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image_portrait: capsulePortrait,
    image_landscape: capsuleLandscape,
    number: 3,
  },
];

const TechMain = styled.main`
  display: grid;
  place-items: center;
  padding-bottom: 2rem;
  text-align: center;

  grid-template-areas:
    "title"
    "image"
    "tabs"
    "details";

  & > img {
    grid-area: image;
  }
`;
const NumberList = styled.div`
  grid-area: tabs;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NumberItem = styled.button`
  padding: 1.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.clrWhite};
  border: 1px solid hsl(0 0% 100% / 0.25);
  background: hsl(0 0% 100% / 0);
  cursor: pointer;
`;
const TechContent = styled.article`
  grid-area: details;
`;

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabContent = techs[activeTab];
  const isActive = (index) => {
    if (activeTab === index) {
      return false;
    } else {
      return true;
    }
  };
  const detectDesktop = useWindowSize();
  return (
    <>
      <TechMain>
        <MainTitle>
          <span>03</span> space launch 101
        </MainTitle>
        <img
          src={
            detectDesktop
              ? tabContent.image_portrait
              : tabContent.image_landscape
          }
          alt={tabContent.title}
        />
        <NumberList>
          {techs.map((item, index) => {
            return (
              <NumberItem
                key={index}
                active={isActive(index)}
                onClick={() => setActiveTab(index)}
              >
                {index + 1} <SrOnly>{item.title}</SrOnly>
              </NumberItem>
            );
          })}
        </NumberList>
        <TechContent>
          <header>
            <h2>the terminology ...</h2>
            <p>{tabContent.title}</p>
          </header>
          <p>{tabContent.content}</p>
        </TechContent>
      </TechMain>
    </>
  );
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowSize.width >= 800;
  return isDesktop;
}

export default Technology;
