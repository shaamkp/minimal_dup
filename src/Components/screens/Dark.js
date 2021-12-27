import React from "react";
import styled from "styled-components";
import Screen1 from "../assets/images/home/darkmode.png";
import Screen2 from "../assets/images/home/lightmode.png";
import Sqauer from "../assets/images/home/shape.svg";
import Bg from "../assets/images/overlay.svg";

export default function Dark() {
  return (
    <>
      <DarkMain>
        <Wrapper>
          <DarkContainer>
            <DarkLeft>
              <WhiteDiv>
                <White src={Screen1} alt="" />
              </WhiteDiv>
              <BlackDiv>
                <Black src={Screen2} alt="" />
              </BlackDiv>
            </DarkLeft>
            <DarkRight>
              <ShapeDiv>
                <Shape src={Sqauer} alt="Image" />
              </ShapeDiv>
              <DarkContent>
                <DarkSpan>EASY SWITCH BETWEEN STYLES</DarkSpan>
                <DarkTitle>Dark Mode</DarkTitle>
                <DarkPara>A drak theme that feels easier on the eyes</DarkPara>
              </DarkContent>
            </DarkRight>
          </DarkContainer>
        </Wrapper>
      </DarkMain>
    </>
  );
}

const DarkMain = styled.div`
  padding: 100px 0;
  background: #161c24;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const DarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  padding-top: 100px;
`;
const DarkLeft = styled.div`
  @media all and (max-width:640px){
    display: none;
  }
`;
const WhiteDiv = styled.div`
  position: absolute;
  width: 50%;
  top: 30%;
`;
const White = styled.img`
  display: block;
  width: 100%;
`;
const BlackDiv = styled.div`
  position: absolute;
  width: 50%;
  z-index: -1;
  top: 5%;
`;
const Black = styled.img`
  display: block;
  width: 100%;
`;
const DarkRight = styled.div`
    
`;
const DarkContent = styled.div`
  position: absolute;
  top: 35%;
  left: 65%;
  @media all and (max-width:640px){
    position: unset;
  }
`;
const ShapeDiv = styled.div`
    width: 70%;
    margin: 0 auto;
`;
const Shape = styled.img`
  filter: opacity(0.3);
  width: 100%;
  display: block;
  background-blend-mode: luminosity;
  @media all and (max-width:640px){
    display: none;
  }

`;
const DarkSpan = styled.span`
    font-size: 15px;
    color: grey;
`;
const DarkTitle = styled.h2`
    font-size: 40px;
    color: #fff;
`;
const DarkPara = styled.p`
    color: #fff;
`;
