import React from "react";
import styled from "styled-components";
import question from "../../img/question.svg";
import { SecondaryBtn } from "../../styles";

const QuestionSection = () => {
  return (
    <StyledQuestionBox>
      <QuestionHeader>
        <img src={question} alt="" />
        <QuestionDescriptiom>
          <h2>Why Choose Us?</h2>
          <p>
            We are here to break boundaries and make the impossible possible for
            you! Get in touch with us or kindly request a free consultation or
            an instant quote through our contact form.
          </p>
        </QuestionDescriptiom>
        <img src={question} alt="" />
      </QuestionHeader>
      <Button>Take me there</Button>
    </StyledQuestionBox>
  );
};

const StyledQuestionBox = styled.section`
  margin: 0 3px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 900px) {
    justify-content: space-evenly;
  }
  img {
    width: 45px;
    margin: 7px;
    @media screen and (min-width: 900px) {
      width: 182px;
    }
  }
`;
const QuestionDescriptiom = styled.div`
  text-align: center;
  @media screen and (min-width: 900px) {
    max-width: 40vw;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    opacity: 0.7;
    @media screen and (min-width: 900px) {
      font-size: 48px;
    }
  }
  p {
    font-size: 14px;
    @media screen and (min-width: 900px) {
      font-size: 18px;
    }
  }
`;

const Button = styled(SecondaryBtn)`
  font-size: 18px;
  font-weight: 700;
  padding: 14px 16px;
  margin-top: 20px;
  cursor: pointer;
`;

export default QuestionSection;
