import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
             <p>Travessa Mun., 27 - Carmo, Olinda - PE, 53120-060</p>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    top: 100%;
    position: absolute;
    background-color: #d2221b;

    p {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        align-items: center;
        color: #fff;
        
    }
`