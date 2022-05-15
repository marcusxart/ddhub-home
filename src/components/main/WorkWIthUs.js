import React from "react";
import styled from "styled-components";
import groupImg from "../../img/group-img-sm.png";
import { PrimaryBtn } from "../../styles";

const WorkWIthUs = () => {
  return (
    <HireUs>
      <Container>
        <h3>Work with us</h3>
      </Container>
      <p>Let us take your ideas and your brand to the next level</p>
      <Button>Hire us</Button>
    </HireUs>
  );
};
const HireUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    color: #101010;
    opacity: 0.7;
    text-align: center;
    margin: 25px 32px;
    @media screen and (min-width: 900px) {
      font-size: 18px;
    }
  }
`;

const Container = styled.div`
  background-image: url(${groupImg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 28px;
    color: #fff;
  }
  @media screen and (min-width: 900px) {
    height: 200px;
    h3 {
      font-size: 48px;
    }
  }
`;

const Button = styled(PrimaryBtn)`
  width: 190px;
  height: 50px;
  font-size: 18px;
  border: 0;
  outline: 0;
`;
export default WorkWIthUs;
