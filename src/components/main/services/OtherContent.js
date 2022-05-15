import React from "react";
import styled from "styled-components";
import gridimg1 from "../../../img/grid-img1.png";
import gridimg2 from "../../../img/grid-img2.png";
import gridimg3 from "../../../img/grid-img3.png";
import gridimg4 from "../../../img/grid-img4.png";
import gridimg5 from "../../../img/grid-img5.png";
import gridimg6 from "../../../img/grid-img6.png";

const OtherContent = () => {
  return (
    <OtherServies>
      <ServicesHeader>
        <h3>Other services</h3>
        <p>Tap to make enquiries</p>
      </ServicesHeader>
      <GridBox>
        <GridContent>
          <img src={gridimg3} alt="" />
          <GridText>
            <p>Content Creation</p>
          </GridText>
        </GridContent>
        <GridContent>
          <img src={gridimg2} alt="" />
          <GridText>
            <p>Graphic Designing</p>
          </GridText>
        </GridContent>
        <GridContent>
          <img src={gridimg1} alt="" />
          <GridText>
            <p>Digital Marketing</p>
          </GridText>
        </GridContent>
        <GridContent>
          <img src={gridimg6} alt="" />
          <GridText>
            <p>Social Media Marketing</p>
          </GridText>
        </GridContent>
        <GridContent>
          <img src={gridimg5} alt="" />
          <GridText>
            <p>Video & Animation</p>
          </GridText>
        </GridContent>
        <GridContent>
          <img src={gridimg4} alt="" />
          <GridText>
            <p>Website development</p>
          </GridText>
        </GridContent>
      </GridBox>
    </OtherServies>
  );
};

const OtherServies = styled.div`
  margin: 40px auto;
  @media screen and (min-width: 900px) {
    max-width: 70%;
    margin: a;
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  grid-template-rows: repeat(3, 1fr);
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 40px;
  }
`;

const GridContent = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const GridText = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(115, 110, 110, 4%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  p {
    font-size: 10px;
    color: #736e6e;
  }
  @media screen and (min-width: 900px) {
    height: 77px;
    p {
      font-size: 16px;
    }
  }
`;

const ServicesHeader = styled.div`
  min-height: 6vh;
  margin: 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 22px;
    color: #101010;
    opacity: 70%;
    text-align: center;
    @media screen and (min-width: 900px) {
      font-size: 32px;
    }
  }
  p {
    font-size: 14px;
    color: #736e6e;
    text-align: center;
    @media screen and (min-width: 900px) {
      font-size: 18px;
    }
  }
`;

export default OtherContent;
