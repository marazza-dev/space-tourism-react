import React, { useState } from "react";
import styled from "styled-components";

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

  @media (min-width: ${(props) => props.theme.brMedium}) {
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(
        1rem,
        1fr
      );
    text-align: left;
    columm-gap: 2rem;
    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
    justify-items: start;
    align-content: start;
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
    @media (min-width: ${(props) => props.theme.brMedium}) {
      max-width: 90%;
    }
  }
  & > article {
    grid-area: content;
  }
`;
const CrewMainTitle = styled.h1`
  font-family: ${(props) => props.theme.ffSansCondense};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 4.72px;
  grid-area: title;

  & span {
    margin-right: 0.5rem;
    font-weight: 700;
    color: hsl(0 0% 100% / 0.25);
  }

  @media (min-width: ${(props) => props.theme.brSmall}) {
    font-size: 1.25rem;
    margin-top: 2rem;
    justify-self: start;
  }
  @media (min-width: ${(props) => props.theme.brMedium}) {
    font-size: 1.75rem;
  }
`;
const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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
const CrewContentDetails = styled.article``;

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
      <CrewMain>
        <CrewMainTitle>
          <span aria-hidden='true'>02</span> Meet the crew
        </CrewMainTitle>
        <img src={tabContent.image} alt={tabContent.name} />
        <DotList>
          {crews.map((item, index) => {
            return (
              <DotItem
                key={index}
                active={isActive(index)}
                onClick={() => setActiveTab(index)}
              >
                <SrOnly>{item.name}</SrOnly>
              </DotItem>
            );
          })}
        </DotList>
        <CrewContentDetails>
          <header>
            <h2>{tabContent.role}</h2>
            <p>{tabContent.name}</p>
          </header>
          <p>{tabContent.description}</p>
        </CrewContentDetails>
      </CrewMain>
    </>
  );
};

export default Crew;
