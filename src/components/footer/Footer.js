import React from "react";
import styled from "styled-components";
import { SecondaryBtn } from "../../styles";

const Footer = () => {
  return (
    <FooterStyled>
      <CopyRight>
        <h4>&copy; DDHub. All rights reserved</h4>
        <div>
          <p>Terms and Conditions</p>
          <p>Privacy</p>
        </div>
      </CopyRight>
      <Button>Back to top</Button>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 40px 0 20px;
`;

const CopyRight = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 400;
    color: #736e6e;
    margin-bottom: 18px;
  }
  div {
    display: flex;
    margin-bottom: 28px;
    p {
      color: #fe0002;
      font-size: 16px;
      font-weight: 400;
      margin-right: 28px;
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

const Button = styled(SecondaryBtn)`
  padding: 9px 40px;
  border: 1px solid #736e6e;
  cursor: pointer;
`;

export default Footer;
