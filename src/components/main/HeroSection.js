import React from "react";
import styled from "styled-components";
import Wave from "../../img/Wave";
import phone from "../../img/phone.svg";
import laptop from "../../img/laptop.svg";
import bigLaptop from "../../img/big-laptop.svg";
import { PrimaryBtn } from "../../styles";

const HeroSection = ({ mobileSize }) => {
  return (
    <HeroStyled>
      <div className="main-content">
        <HeroHeader>
          <HeaderBox>
            <Wave />
            <h1>
              Remote Digital <span>Gateway</span>
            </h1>
          </HeaderBox>
          <HeaderImg>
            <img src={mobileSize ? phone : laptop} alt="phone" />
          </HeaderImg>
        </HeroHeader>
        <HeroDescription>
          <p>
            We are a digital creative hub specializing in valuable and
            sustainable brand experiences. Remotely, we have helped clients in
            Nigeria as well as, Internationals to find, build and share their
            purpose with a larger audience, digitally.
          </p>
          <p>
            But that’s not all. When you work with us, expect complete
            transparency, strategic recommendations, and premium service
          </p>
        </HeroDescription>
      </div>
      <Button>Hire us</Button>
      <div className="big-hero">
        <img src={bigLaptop} alt="" />
      </div>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  margin: 103px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .big-hero{
    display: none;
  }
  @media screen and (min-width: 900px) {
    position: relative;
    margin: 10px 0 0;
    flex-direction: row;
    .main-content {
      flex-basis: 1000px;
      flex: 1;
      margin-left: 5%;
      margin-right: 10px;
    }
    .big-hero {
      display: flex;
      justify-content: center;
      flex: 1;
  }
`;

const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  @media screen and (min-width: 900px) {
    justify-content: space-between;
    margin-bottom: 28px;
    margin: 0;
  }
`;
const HeaderBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 20%;
  @media screen and (min-width: 900px) {
    height: 215px;
    margin: 0;
    flex: 0;
    margin-bottom: 28px;
  }
  h1 {
    line-height: 38px;
    font-size: 2.8rem;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color: rgba(1, 1, 1, 0.7);
    @media screen and (min-width: 900px) {
      font-size: 4.8rem;
      text-align: left;
      line-height: 60px;
    }
  }
  span {
    display: inline-block;
    padding: 0 10px;
    color: white;
    background: rgba(254, 0, 2, 0.7);
    @media screen and (min-width: 900px) {
      display: block;
      position: absolute;
      padding-left: 4.7%;
      left: 0;
    }
  }
`;

const HeaderImg = styled.div`
  flex: 1;
  margin-left: 3%;
  @media screen and (min-width: 900px) {
    margin: auto 0 auto 6%;
  }
`;

const HeroDescription = styled.div`
  font-size: 14px;
  color: #736e6e;
  line-height: 160%;
  margin-bottom: 28px;
  p {
    word-spacing: 1.5px;
  }
  p:first-child {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 900px) {
    font-size: 24px;
  }
`;

const Button = styled(PrimaryBtn)`
  border: 0;
  font-size: 18px;
  width: 19rem;
  height: 5rem;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export default HeroSection;
