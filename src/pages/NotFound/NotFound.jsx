import React from "react";
import styled from "styled-components";

import LargeButton from "../../components/LargeButton";
import { MainTitle } from "../../styles/MainTitle.styled";

const ErrorMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 1rem;

  & p {
    text-align: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme.crlWhite};
    padding: 0.5rem;
    background: ${(props) => props.theme.clrDark};
    @media (min-width: ${(props) => props.theme.brMedium}) {
      font-size: 2.125rem;
    }
  }
`;
const ErrorTitle = styled(MainTitle)`
  font-size: 4rem;
`;

const NotFound = () => {
  return (
    <>
      <ErrorMain>
        <ErrorTitle>
          <span>404</span>Error
        </ErrorTitle>
        <p>Ops! It seems that you get lost, try to find your way back</p>
        <LargeButton to='/' text='home'></LargeButton>
      </ErrorMain>
    </>
  );
};

export default NotFound;
