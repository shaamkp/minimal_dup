import React from "react";
import ScreenMain from "../assets/images/home/theme-color/screen-default.png";
import Screen from "../assets/images/home/theme-color/block2-default.png";
import Screen2 from "../assets/images/home/theme-color/block1-default.png";
import Screen3 from "../assets/images/home/theme-color/grid.png";
import Screen4 from "../assets/images/home/theme-color/sidebar-default.png";
import styled from "styled-components";

export default function Theme() {
  return (
    <div>
      <ThemeMain>
        <Wrapper>
          <Top>
            <Content>
              <ThemeSpan>CHOOSE YOUR STYLE</ThemeSpan>
              <ThemeTitle>Theme Color</ThemeTitle>
              <ThemePara>Express your own style with just one click</ThemePara>
            </Content>
          </Top>
          <Bottom>
            <ScreenImg src={ScreenMain} alt="" />
            <Screen2Img src={Screen2} alt="" />
            <Screen3Img src={Screen} alt="" />
            <Screen4Img src={Screen4} alt="" />
          </Bottom>
        </Wrapper>
      </ThemeMain>
    </div>
  );
}
const ThemeMain = styled.div`
    padding: 100px 0;
    background-image: linear-gradient(#e1e5e9,#fff);
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const Top = styled.div``;
const Content = styled.div`
    text-align: center;
`;
const ThemeSpan = styled.span`
    font-size: 15px;
    color: grey;
`;
const ThemeTitle = styled.h3`
    font-size: 40px;
`;
const ThemePara = styled.p`
    color: grey;
    font-size: 18px;
`;
const Bottom = styled.div`
  position: relative;
  width:100%;
  background: url(${Screen3}) no-repeat;
  background-size: contain;
`;
const ScreenImg = styled.img`
  width: 100%;
  display: block;
 
`;
const Screen2Img = styled.img`
  position: absolute;
  top: 0;
  animation-name: bubling ;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
const Screen3Img = styled.img`
  position: absolute;
  top: 0;
  animation-name: bubling ;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
const Screen4Img = styled.img`
  position: absolute;
  top: 0;
  animation-name: bubling ;
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;