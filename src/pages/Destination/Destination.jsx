import React, { useState } from "react";
import styled from "styled-components";

import { MainTitle } from "../../util/MainTitle.styled";

import moonImg from "../../assets/destination/image-moon.png";
import marsImg from "../../assets/destination/image-mars.png";
import europaImg from "../../assets/destination/image-europa.png";
import titanImg from "../../assets/destination/image-titan.png";

const destinations = [
  {
    name: "Moon",
    image: moonImg,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: marsImg,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: europaImg,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: titanImg,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Main = styled.main`
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 2rem;
  text-align: center;

  grid-template-areas:
    "title"
    "image"
    "tabs"
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
const TabList = styled.div`
  display: flex;
  gap: 2rem;
  grid-area: tabs;
`;
const TabItem = styled.button`
  cursor: pointer;
  padding: 1rem 0;
  border: 0;
  border-bottom: 0.2rem solid hsl(0 0% 100% / 0);
  color: ${(props) => props.theme.clrLight};
  background: transparent;
  font-family: ${(props) => props.theme.ffSansCondense};
  text-transform: uppercase;
  letter-spacing: 2.7px;

  & ${(props) => props.active} {
    color: ${(props) => props.theme.clrWhite};
    border-bottom: 0.2rem solid hsl(0 0% 100% / 1);
  }
  &:hover {
    border-color: hsl(0 0% 100% / 0.5);
  }
`;
const ContentTitle = styled.h2`
  font-family: ${(props) => props.theme.ffSerif};
  font-size: 3.5rem;
  line-height: 1.1;
  text-transform: uppercase;
  @media (min-width: ${(props) => props.theme.brSmall}) {
    font-size: 5rem;
  }
  @media (min-width: ${(props) => props.theme.brMedium}) {
    font-size: 6.25rem;
  }
`;
const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid hsl(0 0% 100% / 0.3);
  padding-top: 2.5rem;
  margin-top: 2.5rem;
  @media (min-width: ${(props) => props.theme.brSmall}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (min-width: ${(props) => props.theme.brMedium}) {
    justify-content: flex-start;
    gap: min(10vw, 8rem);
  }
`;
const ContentSubtitle = styled.h3`
  color: ${(props) => props.theme.clrLight};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fs200};

  & > p {
    font-family: ${(props) => props.theme.ffSerif};
    font-size: 1rem;
    text-transform: uppercase;
    @media (min-width: ${(props) => props.theme.brSmall}) {
      font-size: 1.25rem;
    }
    @media (min-width: ${(props) => props.theme.brMedium}) {
      font-size: 1.75rem;
    }
  }
`;

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabContent = destinations[activeTab];

  const isActive = (index) => {
    if (activeTab === index) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <Main>
        <MainTitle>
          <span aria-hidden='true'>01</span> Pick your destiantion
        </MainTitle>
        <img src={tabContent.image} alt={tabContent.name} />
        <TabList>
          {destinations.map((item, index) => {
            return (
              <TabItem
                key={index}
                active={isActive(index)}
                onClick={() => setActiveTab(index)}
              >
                {item.name}
              </TabItem>
            );
          })}
        </TabList>
        <article>
          <ContentTitle>{tabContent.name}</ContentTitle>
          <p>{tabContent.description}</p>
          <ContentDetails>
            <div>
              <ContentSubtitle>Avg. distance</ContentSubtitle>
              <p>{tabContent.distance}</p>
            </div>
            <div>
              <ContentSubtitle>Est. travel time</ContentSubtitle>
              <p>{tabContent.travel}</p>
            </div>
          </ContentDetails>
        </article>
      </Main>
    </>
  );
};

export default Destination;
