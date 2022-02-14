import React from 'react'
import styled from 'styled-components';

import Footer from './Footer';

function Menu() {
    return (
        <Container>
          <h1>Cardápio</h1>
          <Footer />
        </Container>
    )
}
export default Menu

const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
    overflow-x: hidden;

    h1 {
        margin-top: 80px;
        text-align: center;
        color: black;
    }
`