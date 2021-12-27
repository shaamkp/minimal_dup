import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/images/brand/logo_single.svg";
import Downarrow from "../assets/images/icons/downarrow.svg";
import Bg from "../assets/images/overlay.svg";
import DiamondIcon from "../assets/images/home/ic_sketch_small.svg";
import FlashLogo from "../assets/images/icons/flash.svg";
import Js from "../assets/images/home/ic_js.svg";
import Figma from "../assets/images/home/ic_figma.svg";
import Material from "../assets/images/home/ic_material.svg";
import Reacts from "../assets/images/home/ic_react.svg";
import Ts from "../assets/images/home/ic_ts.svg";
import SketchDiamond from "../assets/images/home/ic_sketch.svg";
import Hero from "../assets/images/home/hero.png";
import Menu from "../assets/images/icons/menu-icon.png";

export default function Spotlight() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div>
      <Spotlights>
        <Wrapper>
          <Header>
            <HeaderLeft>
              <HeaderImage src={Logo} alt="Logo" />
              <Version>
                <VersionTxt>V2.6.0</VersionTxt>
              </Version>
            </HeaderLeft>
            <HeaderRight>
              <HeaderNav>
                <HeaderList>Home</HeaderList>
                <HeaderList>Componets</HeaderList>
                <HeaderList>
                  Pages
                  <ArrowContainer>
                    <Arrow src={Downarrow} alt="Logo" />
                  </ArrowContainer>
                </HeaderList>
                <HeaderList>Documentation</HeaderList>
                <HeaderList>
                  <HeaderButton>Purchase Now</HeaderButton>
                </HeaderList>
              </HeaderNav>
              <MenuIcon src={Menu} alt="Icon" onClick={toggle} open={open} />
            </HeaderRight>

            <MenuDiv open={open}>
              <MenuNav>
                <MenuList>Home</MenuList>
                <MenuList>Components</MenuList>
                <MenuList>Pages</MenuList>
                <MenuList>Documentation</MenuList>
                <MenuList>Purchase Now</MenuList>
              </MenuNav>
            </MenuDiv>
          </Header>
          <Main>
            <MainLeft>
              <MainHeading>
                Start a new project with <MainSub>Minimal</MainSub>
              </MainHeading>
              <MainPara>
                The starting point for your next project based on
                easy-to-customize material-UI helps you build apps faster and
                better.
              </MainPara>
              <CloudLink>
                <Diamond>
                  <DiamondImage src={DiamondIcon} alt="Logo" />
                </Diamond>
                <CloudPara>Preview in Sketch Cloud</CloudPara>
              </CloudLink>
              <MainButton>
                <Flash src={FlashLogo} alt="Logo" />
                <LiveSpan>Live Preview</LiveSpan>
              </MainButton>
              <MainNav>
                <MainList>
                  <MainListImage src={SketchDiamond} alt="Image" />
                </MainList>
                <MainList>
                  <MainListImage src={Figma} alt="Image" />
                </MainList>
                <MainList>
                  <MainListImage src={Material} alt="Image" />
                </MainList>
                <MainList>
                  <MainListImage src={Reacts} alt="Image" />
                </MainList>
                <MainList>
                  <MainListImage src={Js} alt="Image" />
                </MainList>
                <MainList>
                  <MainListImage src={Ts} alt="Image" />
                </MainList>
              </MainNav>
            </MainLeft>
            <MainRight>
              <MainRightImage src={Hero} alt="Image" />
            </MainRight>
          </Main>
        </Wrapper>
      </Spotlights>
    </div>
  );
}

const Spotlights = styled.div`
  background: url(${Bg}) no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLeft = styled.div`
  width: 4%;
  display: flex;
  align-items: center;
`;
const HeaderImage = styled.img`
  display: block;
  width: 100%;
`;
const Version = styled.div`
  background: #1a314a;
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
`;
const VersionTxt = styled.span`
  font-size: 12px;
  color: #0d4faa;
`;
const HeaderRight = styled.div`
  width: 62%;
`;
const HeaderNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media all and (max-width: 1280px) {
    width: 100%;
  }
  @media all and (max-width: 980px) {
    display: none;
  }
`;
const HeaderList = styled.li`
  margin-left: 25px;
  color: #fff;
  font-size: 15px;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  &:nth-child(3) {
    display: flex;
    align-items: center;
  }
  &:hover {
    transition: 0.4s ease-in-out;
    color: #50ac56;
  }
  @media all and (max-width: 1080px) {
    font-size: 12px;
  }
`;
const ArrowContainer = styled.div`
  width: 17px;
`;
const Arrow = styled.img`
  display: block;
  width: 100%;
  filter: invert(1);
`;

const MenuIcon = styled.img`
  width: 2%;
  position: absolute;
  right: 20px;
  top: 20px;
  display: none;
  transition: 0.7s ease;
  @media all and (max-width: 980px) {
    display: block;
  }
`;
const HeaderButton = styled.button`
  background: #50ac56;
  padding: 10px 18px;
  color: #fff;
  border: none;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
const MenuDiv = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: ${({ open }) => (open ? "0" : "-1000px")};
  transition: 1s ease-in-out;
  padding: 50px 10px;
  height: 100vh;
  width: 60%;
  z-index: 5;
`;
const MenuNav = styled.ul`
  transition: 0.7s ease-in-out;
`;
const MenuList = styled.li`
  margin-bottom: 20px;
  color: #fff;
  &:last-child {
    background: #50ac56;
    padding: 10px 18px;
    color: #fff;
    border: none;
    font-weight: 700;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    text-align: center;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const MainLeft = styled.div`
  width: 50%;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const MainHeading = styled.h2`
  font-size: 40px;
  width: 262px;
  color: #fff;
`;
const MainSub = styled.span`
  color: #50ac56;
`;
const MainPara = styled.p`
  color: #fff;
  font-size: 18px;
  line-height: 1.5em;
`;
const CloudLink = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;
const Diamond = styled.div`
  width: 4%;
`;
const DiamondImage = styled.img`
  display: block;
  width: 100%;
`;
const CloudPara = styled.p`
  margin-left: 06px;
  font-size: 15px;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
`;
const MainButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: #50ac56;
  padding: 8px;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
`;
const Flash = styled.img`
  margin-right: 10px;
  filter: invert(1);
  width: 20px;
`;

const LiveSpan = styled.span``;
const MainNav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 20px 0px 50px 0px;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const MainList = styled.li``;
const MainListImage = styled.img`
  width: 100%;
  display: block;
  transition: 0.4s ease-in-out;
  &:hover {
    border-radius: 50%;
    transition: 0.4s ease-in-out;
    transform: scale(1.5);
  }
`;
const MainRight = styled.div`
  width: 44%;
  padding-top: 60px;
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const MainRightImage = styled.img`
  width: 100%;
  display: block;
  opacity: 0.1;
`;
