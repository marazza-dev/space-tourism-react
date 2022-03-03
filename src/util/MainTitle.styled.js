import styled from "styled-components";

export const MainTitle = styled.h1`
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
