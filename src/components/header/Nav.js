import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../img/Logo.svg";
import styled from "styled-components";
import { PrimaryBtn } from "../../styles";
import {
  collapseAnim,
  lineRotate1,
  lineRotate2,
  lineOut,
  defaultAnim,
} from "../animation";

const Nav = ({ mobileSize, handleToggle, toggle }) => {
  return (
    <StyledNav toggle={toggle}>
      <LogoDiv>
        <img src={Logo} alt="logo" />
        <Burger
          variants={defaultAnim}
          animate={toggle ? "show" : "hidden"}
          initial="hidden"
          className="burger"
          onClick={mobileSize ? handleToggle : null}
        >
          <motion.div variants={lineRotate2} className="line"></motion.div>
          <motion.div variants={lineOut} className="line"></motion.div>
          <motion.div variants={lineRotate1} className="line"></motion.div>
        </Burger>
      </LogoDiv>
      <AnimatePresence>
        <NavList
          variants={mobileSize ? collapseAnim : null}
          animate={toggle ? "show" : "hidden"}
          initial="hidden"
          end="end"
        >
          <List>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
          </List>
          <Button>Hire us</Button>
        </NavList>
      </AnimatePresence>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  font-family: "Raleway", sans-serif;
  color: #736e6e;
  position: fixed;
  z-index: 5;
  width: 100%;
  top: 0;
  left: 0;
  @media screen and (min-width: 900px) {
    position: sticky;
    display: flex;
    padding: 14px 18px;
    justify-content: space-between;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 10vh;
  background: white;
  @media screen and (min-width: 900px) {
    padding: 20px 0;
    .burger {
      display: none;
    }
  }
  img {
    cursor: pointer;
    @media screen and (min-width: 900px) {
    width: 10rem;
  }
`;

const Burger = styled(motion.div)`
  cursor: pointer;
  overflow: hidden;
  .line {
    width: 25px;
    margin: 5px;
    height: 3px;
    background: #a48a8a;
  }
`;

const NavList = styled(motion.div)`
  overflow: hidden;
  background: rgba(80, 80, 80, 0.5);
  height: 100vh;
  @media screen and (min-width: 900px) {
    background: #fff;
    display: flex;
    height: 13vh;
    justify-content: space-between;
    align-items: center;
  }
`;

const List = styled(motion.ul)`
  border-top: 1px solid rgba(115, 110, 110, 0.1);
  list-style: none;
  background: white;
  width: 100%;
  @media screen and (min-width: 900px) {
    display: flex;
    border: 0;
  }
  li {
    padding: 17px;
    border-bottom: 1px solid rgba(115, 110, 110, 0.1);
    font-size: 1.7rem;
    font-weight: 500;
    cursor: pointer;
    &:first-child {
      background: rgba(254, 0, 6, 0.1);
    }
    @media screen and (min-width: 900px) {
      padding: 0 4.8rem;
      border: 0;
      font-size: 1.8rem;
      &:first-child {
        background: white;
      }
    }
  }
`;
const Button = styled(PrimaryBtn)`
  border: 0;
  width: 20rem;
  height: 5rem;
  font-size: 1.8rem;
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export default Nav;
