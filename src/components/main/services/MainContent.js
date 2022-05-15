import React from "react";
import styled from "styled-components";
import image1 from "../../../img/services-img1.png";
import image2 from "../../../img/services-img2.png";
import image3 from "../../../img/services-img3.png";
import { SecondaryBtn } from "../../../styles";

const MainContent = () => {
  return (
    <Main>
      <ServicesDescription>
        <img src={image3} alt="" />
        <ServicesContent>
          <span>UI Design</span>
          <h3>Be part of the process, not just the end product</h3>
          <p>
            Collaborate with our professional team of designers to bring your
            thoughts out into the digital world. Your product, your rules
          </p>
          <Button1>Learn More</Button1>
        </ServicesContent>
      </ServicesDescription>
      <ServicesDescription>
        <img src={image2} alt="" />
        <ServiceContent2>
          <span>Social Media</span>
          <h3>Get the likes and the comments</h3>
          <p>
            Our social bees are constantly curating to come up with the best
            strategy for your social media/brand
          </p>
          <Button1>Learn More</Button1>
        </ServiceContent2>
      </ServicesDescription>
      <ServicesDescription>
        <img src={image1} alt="" />
        <ServiceContent3>
          <span>Software Development</span>
          <h3>Breathe life into digital products</h3>
          <p>
            We nurture your raw ideas with precision, care and absolute
            efficiency, delivering a product of peak quality, efficiency and the
            functionalities to last the test of time
          </p>
          <Button1>Learn More</Button1>
        </ServiceContent3>
      </ServicesDescription>
    </Main>
  );
};

const Main = styled.div`
  @media screen and (min-width: 900px) {
    border-radius: 15px;
    overflow: hidden;
  }
`;

const ServicesDescription = styled.div`
  margin-bottom: 28px;
  @media screen and (min-width: 900px) {
    display: flex;
    margin: 0;
  }
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media screen and (min-width: 900px) {
      width: 50%;
      height: 321px;
      border-radius: 0;
    }
  }
`;

const ServicesContent = styled.div`
  background-color: rgba(115, 110, 110, 2%);
  min-height: 200px;
  padding: 14px;
  @media screen and (min-width: 900px) {
    height: 321px;
    flex: 1;
    padding-left: 40px;
    padding-right: 10%;
  }
  span {
    display: inline-block;
    font-size: 10px;
    color: #107596;
    margin-bottom: 4px;
    @media screen and (min-width: 900px) {
      font-size: 16px;
    }
  }
  h3 {
    font-size: 22px;
    color: #101010;
    opacity: 0.7;
    width: 260px;
    margin-bottom: 16px;
    @media screen and (min-width: 900px) {
      font-size: 32px;
      width: 370px;
    }
  }
  p {
    font-size: 14px;
    color: #736e6e;
    margin-bottom: 18px;
    @media screen and (min-width: 900px) {
      font-size: 20px;
    }
  }
`;

const Button1 = styled(SecondaryBtn)`
  padding: 8px 24px;
  color: #101010;
  cursor: pointer;
  font-size: 14px;
`;

const ServiceContent2 = styled(ServicesContent)`
  span {
    color: #daa142;
  }
`;
const ServiceContent3 = styled(ServicesContent)`
  span {
    color: #27ae60;
  }
`;

export default MainContent;
