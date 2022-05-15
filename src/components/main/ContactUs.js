import React from "react";
import plug from "../../img/Plug.svg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";
import twitter from "../../img/twitter.svg";
import { SecondaryBtn } from "../../styles";

const ContactUs = () => {
  return (
    <Contact>
      <Header>
        <img src={plug} alt="" />
        <h3>Do you want to contact us?</h3>
      </Header>
      <div className="box">
        <InputBox>
          <Input>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="someone@example.com" id="email" />
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Input>
        </InputBox>
        <InputBox>
          <Input>
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="+2348123456789" id="phone" />
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </Input>
        </InputBox>
      </div>
      <Social>
        <div className="social-box">
          <img src={facebook} alt="facebook" />
          <SocialDescription>
            <h4>Facebook</h4>
            <p>@ddhub</p>
            <Button>Follow Us</Button>
          </SocialDescription>
        </div>
        <div className="social-box">
          <img src={instagram} alt="" />
          <SocialDescription>
            <h4>Instagram</h4>
            <p>@ddhub</p>
            <Button>Follow Us</Button>
          </SocialDescription>
        </div>
        <div className="social-box">
          <img src={linkedin} alt="" />
          <SocialDescription>
            <h4>Linkedin</h4>
            <p>@ddhub</p>
            <Button>Follow Us</Button>
          </SocialDescription>
        </div>
        <div className="social-box">
          <img src={twitter} alt="" />
          <SocialDescription>
            <h4>Twitter</h4>
            <p>@ddhub</p>
            <Button>Follow Us</Button>
          </SocialDescription>
        </div>
      </Social>
    </Contact>
  );
};

const Contact = styled.div`
  margin-top: 55px;
  padding: 0 20px;
  @media screen and (min-width: 900px) {
    padding: 0 60px;
    .box {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  img {
    width: 61px;
    margin-bottom: 35px;
  }
  h3 {
    font-weight: 600;
    font-size: 22px;
    text-align: center;
    color: #010101;
    opacity: 0.7;
    text-align: center;
  }
  @media screen and (min-width: 900px) {
    h3 {
      font-size: 48px;
    }
  }
`;

const InputBox = styled.div`
  padding: 15px 0;
  width: 100%;
  position: relative;
  @media screen and (min-width: 900px) {
    padding: 20px 0;
    margin: 0 30px;
  }
`;

const Input = styled.div`
  width: 100%;
  background: rgba(254, 0, 2, 0.03);
  display: flex;
  align-items: center;
  input {
    flex: 1;
    opacity: 0.8;
    color: #333333;
    background: transparent;
    font-size: 16px;
    height: 60px;
    border: none;
    outline: none;
    font-weight: 400;
    margin: 0 14px;
    &::placeholder {
      color: #736e6e;
    }
  }
  label {
    color: #736e6e;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 22px;
    font-weight: 700;
  }
  svg {
    color: #736e6e;
    opacity: 0.7;
    margin: 0 14px;
  }
  @media screen and (min-width: 900px) {
    input {
      height: 80px;
      font-size: 24px;
    }
    label {
      font-size: 32px;
    }
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: auto;
  .social-box {
    width: 100%;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 900px) {
    width: 100%;
    padding: 0 20px;
    margin-top: 50px;
    justify-content: space-between;
    .social-box {
      &:nth-child(odd) {
        border-right: 1px solid rgba(254, 0, 2, 0.2);
      }
      &:nth-child(even) {
        border-right: 1px solid rgba(254, 0, 2, 0.2);
      }
      &:last-child {
        border: none;
      }
      img {
        width: 30px;
        height: 30px;
        margin-bottom: 25px;
      }
    }
  }
`;

const SocialDescription = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    text-align: center;
    h4 {
      font-size: 18px;
      color: #736e6e;
      font-weight: 700;
    }
    p {
      color: #a48a8a;
      font-size: 14px;
      margin-bottom: 40px;
    }
  }
`;

const Button = styled(SecondaryBtn)`
  color: #fe0002;
  border: 1px solid #fe0002;
  padding: 9px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
export default ContactUs;
