import React from "react";
import styled from "styled-components";
import Ui from "../assets/images/icons/ic_design.svg";
import Development from "../assets/images/icons/ic_code.svg";
import Logo from "../assets/images/brand/logo_single.svg";
import Screens1 from "../assets/images/home/screen_light_1.png"
import Screens2 from "../assets/images/home/screen_light_2.png"
import Screens3 from "../assets/images/home/screen_light_3.png"


export default function Cards() {
  return (
    <>
      <Minimal>
        <Wrapper>
          <MinnimalSub>MINIMAL</MinnimalSub>
          <MinimalHeading>Whats Minimal help you ?</MinimalHeading>
          <MinimalCards>
            <MinimalItem>
              <MinimalLogo>
                <MinimalImage src={Ui} alt="" />
              </MinimalLogo>
              <MinimalItemHeading>UI & UX Design</MinimalItemHeading>
              <MinimalItemPara>
                The set is built on the principles of the atomic design system.
                it helps you to create projects fastest and easily cutomized
                packages for your project.
              </MinimalItemPara>
            </MinimalItem>

            <MinimalItem>
              <MinimalDiv>
              <MinimalLogo> 
                <MinimalImage src={Development} alt="" />
              </MinimalLogo>
              <MinimalItemHeading>Development</MinimalItemHeading>
              <MinimalItemPara>
                The set is built on the principles of the atomic design system.
                it helps you to create projects fastest and easily cutomized
                packages for your project.
              </MinimalItemPara>
              </MinimalDiv>
            </MinimalItem>

            <MinimalItem>
              <MinimalLogo>
                <MinimalImage src={Logo} alt="" />
              </MinimalLogo>
              <MinimalItemHeading>Brand</MinimalItemHeading>
              <MinimalItemPara>
                The set is built on the principles of the atomic design system.
                it helps you to create projects fastest and easily cutomized
                packages for your project.
              </MinimalItemPara>
            </MinimalItem>
          </MinimalCards>
          <MinimalBottom>
            <MinimalBottomLeft>
              <MinimalBottomSpan>INTERFACE STARTER KIT</MinimalBottomSpan>
              <MinimalBottomTitle>Huge Pack of element</MinimalBottomTitle>
              <MinimalBottomPara>
                We Collect most  popular elements.Menu,Slider,button,inputs,etc.
                ainimalall here.just drive in!
              </MinimalBottomPara>
              <MinimalBottomButton>View All Componenets</MinimalBottomButton>
            </MinimalBottomLeft>
            <MinimalBottomRight>
              <ScreenDiv1>
                <Screen1 src={Screens1} alt='Image' />
              </ScreenDiv1>
              <ScreenDiv2>
                <Screen2 src={Screens2} alt='Image' />
              </ScreenDiv2>
              <ScreenDiv3>
                <Screen3 src={Screens3} alt='Image' />
              </ScreenDiv3>
            </MinimalBottomRight>
          </MinimalBottom>
        </Wrapper>
      </Minimal>

    </>
  );
}

const Minimal = styled.div`
  padding: 180px 0;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const MinnimalSub = styled.span`
  text-align: center;
  font-size: 15px;
  display: block;
  color: #9ba6af;
`;
const MinimalHeading = styled.h2`
  text-align: center;
  font-size: 40px;
`;
const MinimalCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 150px;
    @media all and (max-width:1280px){
      flex-wrap : wrap;
    }
`;
const MinimalItem = styled.div`
    width: 25.33%;
    background: #f3f5f7;
    padding: 30px;
    border-radius: 10px;
    transition: 0.4s ease-in-out;
    text-align:center;
    &:hover{
        transition: 0.4s ease-in-out;
        transform: scale(1.1);
        box-shadow: 5px 10px 18px #888888;
    }
    &:nth-child(2){
      padding: 10px;
      background: #f6f7f8;
    }
    @media all and (max-width:1280px){
        width: 50%;
        margin: 0 auto;
        margin-top: 40px;
    }
`;
const MinimalLogo = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-top: 51px;
  margin-bottom:87px;

`;
const MinimalImage = styled.img`
  width: 100%;
  display: block;
`;
const MinimalItemHeading = styled.h3`
    text-align: center;
`;
const MinimalItemPara = styled.p`
    text-align: center;
    width: 280px;
    margin-bottom: 50px;
    color: #9ba6af;
    line-height: 1.5em;
    font-size: 15px;
    @media all and (max-width:1280px){
      width: 100%;
    }
`;
const MinimalDiv = styled.div`
  background: #fff;
  padding:3px;
  border-radius:10px;
`;
const MinimalBottom =  styled.div`
  padding: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media all and (max-width:980px){
        flex-wrap: wrap;
    }
  @media all and (max-width:768px){
    padding: 0px;
    margin-top: 100px;
  }
`;
const MinimalBottomLeft =  styled.div`
  width: 50%;
  @media all and (max-width:980px){
    width: 100%;
    margin-bottom: 70%;
  }
  @media all and (max-width:768px){
    margin-bottom: 0px;
  }
`;
const MinimalBottomSpan =  styled.span`
  font-size: 15px;
  display: block;
  color: #9ba6af;
`;
const MinimalBottomTitle  =  styled.h2`
  font-size: 40px;
  width: 215px;
  @media all and (max-width:980px){
    width: 100%;
  }
`;
const MinimalBottomPara = styled.p`
  color: #9ba6af;
  line-height: 1.5em;
  width: 250px; 
  @media all and (max-width:980px){
    width: 100%;
  }

`; 
const MinimalBottomButton =  styled.button`
  margin-top: 50px;
  padding: 10px;
  background: none;
  border: 1px solid #000;
  cursor:pointer;
`;        
const MinimalBottomRight =  styled.div`
  width: 37%;
  position: relative;
  @media all and (max-width:768px){
    display: none;
  }
`;
const ScreenDiv1 = styled.div`
  width:80%;
  position: absolute;
  z-index: -1;
  
  
`;
const Screen1 = styled.img`
  display: block;
  width: 100%;
  transform: skewY(15deg);
  border: 5px solid #fff;
  border-radius: 7px;
  box-shadow: 4px 0px 0px 1px rgba(201,204,198,1);
  transition: .4s ease-in-out;
  &:hover{
    transition: .4s ease-in-out;
    transform: skewY(0deg);
  }
`;
const ScreenDiv2 = styled.div`
 width:80%;
  position: absolute;
  z-index: -2;
  left:45%;
  top: -80px;
  
  
 
`;
const Screen2 = styled.img`
  display: block;
  width: 100%;
  transform: skewY(15deg);
  border: 5px solid #fff;
  border-radius: 7px;
  box-shadow: 4px 0px 0px 1px rgba(201,204,198,1);
  transition: .4s ease-in-out;
  &:hover{
    transition: .4s ease-in-out;
    transform: skewY(0deg);
  }
`;
const ScreenDiv3 = styled.div`
 width:80%;
  position: absolute;
  top: 0;
  z-index: -3;
  left: 80%;
  top: -160px;
`;
const Screen3 = styled.img`
  display: block;
  width: 100%;
  transform: skewY(15deg);
  border: 5px solid #fff;
  border-radius: 7px;
  box-shadow: 4px 0px 0px 1px rgba(201,204,198,1);
  transition: .4s ease-in-out;
  &:hover{
    transition: .4s ease-in-out;
    transform: skewY(0deg);
  }
`;


