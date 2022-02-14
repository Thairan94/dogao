import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
             <p>Endereço: Travessa Mun., 27 - Carmo, Olinda - PE, 53120-060</p>
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
        font-weight: 100;
        text-align: center;
        align-items: center;
        color: #fff;
        
    }
`