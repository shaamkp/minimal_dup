import React from 'react'
import styled from 'styled-components';
import Logo from "../assets/images/brand/logo_single.svg";

export default function Footer() {
    return (
        <div>
            <Main>
                <FooterContent>
                    <LogoDiv>
                        <LogoImage src={Logo} alt="Logo" />
                    </LogoDiv>
                    <LogoSpan>© All rights reserved</LogoSpan><br/> 
                    <LogoTitle>made by <LogoSmall>minimals.cc</LogoSmall> </LogoTitle>
                </FooterContent>
            </Main>
        </div>
    )
}

const Main = styled.footer`
    padding: 0 0 40px 0;
`;
const FooterContent = styled.div`
    text-align:center;
`;
const LogoDiv = styled.div`
    width: 5%;
    margin: 0 auto;
`;
const LogoImage = styled.img``;
const LogoSpan = styled.span`
    font-size: 12px;
    color: black;
    font-weight: lighter;
`;
const LogoTitle = styled.span`
     font-size: 12px;
    color: black;
    font-weight: lighter;
`;

const LogoSmall = styled.small`
    color: #50ac56;
    font-size: 12px;
    font-weight: bold;
`;