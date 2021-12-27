import React from "react";
import styled from "styled-components";
import Screen1 from "../assets/images/home/clean-1.png";
import Screen2 from "../assets/images/home/clean-2.png";
import Screen3 from "../assets/images/home/clean-3.png";
import Screen4 from "../assets/images/home/clean-4.png";
import Screen5 from "../assets/images/home/clean-5.png";
import Screen6 from "../assets/images/home/clean-6.png";
import Screen7 from "../assets/images/home/clean-7.png";
import Screen8 from "../assets/images/home/clean-8.png";
import Screen9 from "../assets/images/home/clean-9.png";
import Screen10 from "../assets/images/home/clean-10.png";

export default function Interface() {
  return (
    <div>
      <Main>
        <Wrapper>
          <Right>
            <RightSpan>CLEAN & CLEAR</RightSpan>
            <RightTitle>Beautiful, modern and clean user interfaces</RightTitle>
          </Right>
          <Left>
            <ImageContainer>
              <Image1 src={Screen1} alt="Image" />
              <Image2 src={Screen2} alt="Image" />
              <Image3 src={Screen3} alt="Image" />
              <Image4 src={Screen4} alt="Image" />
              <Image5 src={Screen5} alt="Image" />
              <Image6 src={Screen6} alt="Image" />
              <Image7 src={Screen7} alt="Image" />
              <Image8 src={Screen8} alt="Image" />
              <Image9 src={Screen9} alt="Image" />
              <Image10 src={Screen10} alt="Image" />
            </ImageContainer>
          </Left>
        </Wrapper>
      </Main>
    </div>
  );
}
const Main = styled.div`
  height: 100vh;
  @media all and (max-width:768px){
    height: 50vh;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Right = styled.div`
  position: absolute;
  width: 50%;
`;
const RightSpan = styled.span`
  font-size: 15px;
  color: grey;
`;
const RightTitle = styled.h3`
  font-size: 40px;
  width: 480px;
  @media all and (max-width:640px){
    font-size: 18px;
    width: 210px;
  }
`;
const Left = styled.div`
  z-index: -1;
  width: 100%;
`;
const ImageContainer = styled.div`
  position: relative;
  @media all and (max-width:640px){
    margin-top: 88px;
    margin-right: 60px;
  }
`;
const Image1 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
const Image2 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
const Image3 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
const Image4 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
const Image5 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
const Image6 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
const Image7 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
const Image8 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
const Image9 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
const Image10 = styled.img`
  position: absolute;
  animation-name: moving;
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
