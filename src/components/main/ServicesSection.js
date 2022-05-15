import React from "react";
import styled from "styled-components";
import MainContent from "./services/MainContent";
import OtherContent from "./services/OtherContent";

const ServicesSection = () => {
  return (
    <Services>
      <MainContent />
      <OtherContent />
    </Services>
  );
};

const Services = styled.section`
  margin: 35px 20px 0;
  @media screen and (min-width: 900px) {
    margin-top: 64px;
    padding: 0 5%;
  }
`;

export default ServicesSection;
