import React, { useState } from "react";
import styled from "styled-components";

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

const Main = styled.main``;
const MainTitle = styled.h1``;
const TabList = styled.div``;
const TabItem = styled.button`
  & ${(props) => props.active} {
    color: red;
  }
`;
const ContentTitle = styled.h2``;
const ContentDetails = styled.div``;
const ContentSubtitle = styled.h3``;

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
