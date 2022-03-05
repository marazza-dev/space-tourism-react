import React from "react";
import styled from "styled-components";

import LargeButton from "../../components/LargeButton";

const StyledMain = styled.main`
  display: grid;
  place-items: center;
  text-align: center;
  padding-inline: 1rem;
  min-height: 80vh;

  & * {
    @media (min-width: ${(props) => props.theme.brSmall}) {
      max-width: 45ch;
    }
  }

  @media (min-width: ${(props) => props.theme.brMedium}) {
    text-align: left;
    column-gap: 2rem;
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(
        1rem,
        1fr
      );

    padding-bottom: max(6rem, 20vh);
    align-items: end;

    & > *:first-child {
      grid-column: 2;
    }
    & > *:last-child {
      grid-column: 3;
    }
  }
`;

const StyledHeading = styled.h1`
  color: ${(props) => props.theme.clrLight};
  font-size: 1rem;
  font-family: ${(props) => props.theme.ffSansCondens};
  letter-spacing: 2.7px;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.brSmall}) {
    font-size: 1.125rem;
    letter-spacing: 3.38px;
    margin: 0 auto;
  }
  @media (min-width: ${(props) => props.theme.brMedium}) {
    font-size: ${(props) => props.theme.fs500};
    letter-spacing: 4.75px;
    margin: 0;
  }
`;

const StyledSpan = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fs900};
  font-family: ${(props) => props.theme.ffSerif};
  color: ${(props) => props.theme.clrWhite};
`;

const Home = () => {
  return (
    <>
      <StyledMain>
        <div>
          <StyledHeading>
            So, you want to travel to <StyledSpan>Space</StyledSpan>
          </StyledHeading>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <LargeButton to='/destination' text='Explore'></LargeButton>
        </div>
      </StyledMain>
    </>
  );
};

export default Home;
