import React from "react";
import Js from "../assets/images/home/ic_js.svg";
import Figma from "../assets/images/home/ic_figma.svg";
import Material from "../assets/images/home/ic_material.svg";
import Reacts from "../assets/images/home/ic_react.svg";
import Ts from "../assets/images/home/ic_ts.svg";
import SketchDiamond from "../assets/images/home/ic_sketch.svg";
import Tick from "../assets/images/icons/greentick.svg";
import styled from "styled-components";

export default function Bussiness() {
  return (
    <>
      <Main>
        <Wrapper>
          <Top>
            <MainSpan>PRICING PLANS</MainSpan>
            <MainTittle>The right plan for your business</MainTittle>
            <MainPara>
              Choose the perfect plan for your needs.Always flexible to grow
            </MainPara>
          </Top>
          <Bottom>
            <ItemContainer>
              <Item>
                <ItemSpan>LICENSE</ItemSpan>
                <ItemTittle>Standard</ItemTittle>
                <ItemNav>
                  <ItemList>
                    <MainListImage src={Js} alt="Image" />
                  </ItemList>
                </ItemNav>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>One end products</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>12 Months update</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>6 months of support</TickPara>
                </Features>
                <hr />
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>JavaScript version</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>TypeScript version</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>Design Resources</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>Commercial Application</TickPara>
                </Features>
                <Learn>LearnMore</Learn>
                <ItemButton className="effect">Choose Plane</ItemButton>
              </Item>

              <Item>
                <ItemSpan>LICENSE</ItemSpan>
                <ItemTittle>Standard Plus</ItemTittle>
                <ItemNav>
                  <ItemList>
                    <MainListImage src={SketchDiamond} alt="Image" />
                  </ItemList>
                  <ItemList>
                    <MainListImage src={Figma} alt="Image" />
                  </ItemList>
                  <ItemList>
                    <MainListImage src={Js} alt="Image" />
                  </ItemList>
                  <ItemList>
                    <MainListImage src={Ts} alt="Image" />
                  </ItemList>
                </ItemNav>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>One end products</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>12 Months update</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>6 months of support</TickPara>
                </Features>
                <hr />
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>JavaScript version</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>TypeScript version</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>Design Resources</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>Commercial Application</TickPara>
                </Features>
                <Learn>LearnMore</Learn>
                <ItemButton className="effect">Choose Plane</ItemButton>
              </Item>

              <Item>
                <ItemSpan>LICENSE</ItemSpan>
                <ItemTittle>Extend</ItemTittle>
                <ItemNav>
                  <ItemList>
                    <MainListImage src={SketchDiamond} alt="Image" />
                  </ItemList>
                  <ItemList>
                    <MainListImage src={Figma} alt="Image" />
                  </ItemList>
                  <ItemList>
                    <MainListImage src={Js} alt="Image" />
                  </ItemList>
                  <ItemList>
                    <MainListImage src={Ts} alt="Image" />
                  </ItemList>
                </ItemNav>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>One end products</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>12 Months update</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>6 months of support</TickPara>
                </Features>
                <hr />
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>JavaScript version</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>TypeScript version</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>Design Resources</TickPara>
                </Features>
                <Features>
                  <TickDiv>
                    <TickImage src={Tick} alt="Icon" />
                  </TickDiv>
                  <TickPara>Commercial Application</TickPara>
                </Features>
                <Learn>LearnMore</Learn>
                <ItemButton className="effect">Choose Plane</ItemButton>
              </Item>
            </ItemContainer>
          </Bottom>
        </Wrapper>
      </Main>
    </>
  );
}

const Main = styled.div`
  padding: 250px 0  100px 0;
  @media all and (max-width:640px){
    padding: 100px 0  100px 0;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Top = styled.div`
  text-align: center;
`;
const MainSpan = styled.span`
  font-size: 15px;
  color: grey;
  font-weight: 500;
`;
const MainTittle = styled.h3`
  font-size: 40px;
`;
const MainPara = styled.p`
  font-size: 15px;
  color: grey;
`;
const Bottom = styled.div`
  margin-top: 80px;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
@media all and (max-width:980px){
      flex-wrap: wrap;

    }
`;
const Item = styled.div`
  width: 30%;
  background: #fff;
  padding: 20px;
  margin-left: 50px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  &:hover {
    transform: translate3d(10px, -20px, 30px);
    box-shadow: 0px 1px 20px 0 #7c7b7b;
    transition: 0.4s ease-in-out;
    .effect {
      background: #50ac56;
      transition: 0.4s ease-in-out;
      color: #fff;
    }
  }
  @media all and (max-width:980px){
        width: 100%;
        margin-top: 50px;
    }
  @media all and (max-width:640px){
    margin-left: 0;
      &:hover{
        transform: scale(1.1);
      }
  }
`;
const ItemSpan = styled.span`
  font-size: 15px;
  color: grey;
`;
const ItemTittle = styled.h3``;
const ItemNav = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
const ItemList = styled.li`
  width: 20%;
  margin: 40px 0;
`;
const MainListImage = styled.img``;
const Features = styled.div`
  display: flex;
  align-items: center;
`;
const TickDiv = styled.div`
  width: 6%;
`;
const TickImage = styled.img``;
const TickPara = styled.p`
  margin-left: 20px;
`;
const Learn = styled.p`
  text-align: end;
  font-size: 12px;
  color: grey;
  text-decoration: underline;
  transition: 0.2s ease-in-out;
  &:hover {
    color: darkblue;
  }
`;
const ItemButton = styled.button`
  margin-top: 30px;
  text-align: center;
  display: block;
  padding: 10px 90px;
  border: 1px solid #50ac56;
  color: #50ac56;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  @media all and (max-width:980px){
        width: 100%;
       
    }
`;
