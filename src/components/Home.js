import React from 'react'
import styled from 'styled-components';

import Footer from './Footer';


function Home() {
    return (
        <Container>
            <Content>
                <Titles>
                    <h1>CALDINHO DO DOGÃO</h1>
                    <h2>O MELHOR DE OLINDA</h2>
                </Titles>
                <Logo src="/images/logo.png" />
            </Content>
            {/* <Footer>
                <p>Endereço: Travessa Mun., 27 - Carmo, Olinda - PE, 53120-060</p>
            </Footer> */}
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    position: relative;
    overflow-x: hidden;
    
    /* &:before {
        background-image: url("/images/home-background.png") center center / cover no-repeat fixed ;
        content: "";
        position: absolute;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
        z-index: -1;
    } */
`
const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;  
    top: 35px;
    /* background-color: red; */
    position: absolute; 

`
const Titles = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 42px;
    }

    h2 {
        font-size: 32px;
    }
`;
const Logo = styled.img`
    width: 450px;
    height: 400px;
`

// const Footer = styled.footer`
//     display: flex;
//     width: 100%;
//     align-items: center;
//     justify-content: center;
//     top: 100%;
//     position: absolute;
//     background-color: #d2221b;

//     p {
//         font-size: 18px;
//         font-weight: 100;
//         text-align: center;
//         align-items: center;
//         color: #fff;
        
//     }
// `