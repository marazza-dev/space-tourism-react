import React, { useState } from "react";
import styled from "styled-components";

import { SrOnly } from "../../util/SrOnly.styled";
import { MainTitle } from "../../util/MainTitle.styled";

import commanderImg from "../../assets/crew/image-douglas-hurley.png";
import specialistImg from "../../assets/crew/image-mark-shuttleworth.png";
import pilotImg from "../../assets/crew/image-victor-glover.png";
import engineerImg from "../../assets/crew/image-anousheh-ansari.png";

const crews = [
  {
    name: "Douglas Hurley",
    image: commanderImg,
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    role: "Commander",
  },
  {
    name: "Mark Shuttleworth",
    image: specialistImg,
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    role: "Mission Specialist",
  },
  {
    name: "Victor Glover",
    image: pilotImg,
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    role: "Pilot",
  },
  {
    name: "Anousheh Ansari",
    image: engineerImg,
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    role: "Flight Engineer",
  },
];

const CrewMain = styled.main`
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 2rem;
  text-align: center;

  grid-template-areas:
    "title"
    "image"
    "dots"
    "content";
  @media (min-width: ${(props) => props.theme.brSmall}) {
    padding-bottom: 0;
    grid-template-areas:
      "title"
      "content"
      "dots"
      "image";
  }
  @media (min-width: ${(props) => props.theme.brMedium}) {
    grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(
        1rem,
        1fr
      );
    text-align: left;
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". dots image .";
    column-gap: 2rem;
    justify-items: start;
  }

  & > * {
    max-width: 50ch;
  }

  & > *:where(:not(:first-child)) {
    margin-top: 2rem;
  }

  & > img {
    grid-area: image;
    max-width: 60%;
    border-bottom: 1px solid hsl(0 0% 100% / 0.1);
    @media (min-width: ${(props) => props.theme.brMedium}) {
      max-width: 90%;
      align-self: end;
      grid-column: span 2;
    }
  }
`;
const DotList = styled.div`
  display: flex;
  gap: 2rem;
  grid-area: dots;
`;
const DotItem = styled.button`
  cursor: pointer;
  padding: 1rem 0;
  border: 0;
  border-radius: 50%;
  padding: 0.5em;
  background-color: hsl(0 0% 100% / 0.25);

  & ${(props) => props.active} {
    background-color: hsl(0 0% 100% / 1);
  }
  &:hover {
    background-color: hsl(0 0% 100% / 0.5);
  }
`;
const CrewContent = styled.article`
  grid-area: content;

  & > p {
    line-height: 1.8;
  }

  & *:where(:not(:first-child)) {
    margin-top: 1rem;
  }
  & header {
    & > p {
      font-family: ${(props) => props.theme.ffSerif};
      font-size: 1.5rem;
      color: ${(props) => props.theme.clrWhite};
      text-transform: uppercase;
      @media (min-width: ${(props) => props.theme.brSmall}) {
        font-size: 2.5rem;
      }
      @media (min-width: ${(props) => props.theme.brMedium}) {
        font-size: 3.5rem;
        width: 125%;
      }
    }
    & *:where(:not(:first-child)) {
      margin-top: 0.75rem;
    }
  }
  & h2 {
    margin-bottom: -10px;
    font-family: ${(props) => props.theme.ffSerif};
    font-size: 1rem;
    text-transform: uppercase;
    color: hsl(0 0% 100% / 0.5);
    @media (min-width: ${(props) => props.theme.brSmall}) {
      font-size: 1.5rem;
    }
    @media (min-width: ${(props) => props.theme.brMedium}) {
      font-size: 2rem;
    }
  }
`;

const Crew = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabContent = crews[activeTab];

  const isActive = (index) => {
    if (activeTab === index) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <CrewMain id='main'>
        <MainTitle>
          <span aria-hidden='true'>02</span> Meet the crew
        </MainTitle>
        <img src={tabContent.image} alt={tabContent.name} />
        <DotList>
          {crews.map((item, index) => {
            return (
              <DotItem
                key={index}
                active={isActive(index)}
                onClick={() => setActiveTab(index)}
              >
                <SrOnly aria-hidden='true'>{item.name}</SrOnly>
              </DotItem>
            );
          })}
        </DotList>
        <CrewContent>
          <header>
            <h2>{tabContent.role}</h2>
            <p>{tabContent.name}</p>
          </header>
          <p>{tabContent.description}</p>
        </CrewContent>
      </CrewMain>
    </>
  );
};

export default Crew;
