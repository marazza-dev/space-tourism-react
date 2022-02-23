import React from "react";
import styled from "styled-components";
import { destinations } from "../pages/Destination/destination.data";

const TabList = styled.div``;
const TabItem = styled.button``;
const StyledArticle = styled.article``;

const DestinationTab = () => {
  return (
    <>
      <TabList>
        <TabItem></TabItem>
        <TabItem></TabItem>
        <TabItem></TabItem>
        <TabItem></TabItem>
      </TabList>
      <StyledArticle></StyledArticle>
    </>
  );
};

export default DestinationTab;
