import React from "react";
import HeroSection from "./HeroSection";
import QuestionSection from "./QuestionSection";
import ServicesSection from "./ServicesSection";
import WorkWIthUs from "../main/WorkWIthUs";
import ContactUs from "../main/ContactUs";

const Main = ({ mobileSize }) => {
  return (
    <main>
      <HeroSection mobileSize={mobileSize} />
      <QuestionSection />
      <ServicesSection />
      <WorkWIthUs />
      <ContactUs />
    </main>
  );
};

export default Main;
