import React from "react";
import styled from "styled-components";
import Flight from "../assets/images/home/rocket.png";

export default function Questions() {
  return (
    <div>
      <Main>
        <Wrapper>
          <Top>
            <TopContent>
              <TopTitle>Still have question?</TopTitle>
              <TopPara>
                Please describe your case to recieve the most accurate advice
              </TopPara>
              <TopButton>Contact Us</TopButton>
            </TopContent>
          </Top>
          <Bottom>
            <BottomContent>
              <Left>
                <LeftImage src={Flight} alt="Image" />
              </Left>
              <Right>
                <BottomTitle>Get Started with minimal kit today</BottomTitle>
                <BottomButton>Purchase Now</BottomButton>
              </Right>
            </BottomContent>
          </Bottom>
        </Wrapper>
      </Main>
    </div>
  );
}

const Main = styled.div`
  padding: 100px 0 40px 0;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Top = styled.div``;
const TopContent = styled.div`
  text-align: center;
`;
const TopTitle = styled.h3`
  font-size: 40px;
`;
const TopPara = styled.p`
  font-size: 15px;
  color: grey;
`;
const TopButton = styled.button`
  padding: 20px;
  background: #50ac56;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  margin-top: 40px;
`;
const Bottom = styled.div`
  margin-top: 40px;
`;
const BottomContent = styled.div`
  width: 80%;
  background-image: linear-gradient(#50ac56, #367d56);
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  @media all and (max-width: 980px) {
    width: 100%;
  }
  @media all and (max-width:768px){
      padding-bottom: 20px;
  }
`;
const Left = styled.div``;
const LeftImage = styled.img`
  animation-name: fly;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
const Right = styled.div`
@media all and (max-width:640px){
    display: none;
}
`;
const BottomTitle = styled.h3`
  font-size: 40px;
  width: 350px;
  color: #fff;
  line-height: 1.5em;
`;
const BottomButton = styled.button`
  padding: 14px 25px;
  border: none;
  background: #fff;
  color: black;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;
