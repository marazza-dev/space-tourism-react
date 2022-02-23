import React from "react";
import styled from "styled-components";
import DestinationTab from "../../components/DestinationTab";

const MainContainer = styled.main``;
const MainHeading = styled.h1`
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
const MainSpan = styled.span``;

const Destination = () => {
  return (
    <MainContainer>
      <MainHeading>
        <MainSpan>01</MainSpan> Pick your destination
      </MainHeading>
      <DestinationTab />
    </MainContainer>
  );
};

export default Destination;
