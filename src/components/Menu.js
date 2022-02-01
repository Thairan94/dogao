import React from 'react'
import styled from 'styled-components';



function Menu() {
    return (
        <Container>
          <h1>Cardápio</h1>
        </Container>
    )
}
export default Menu

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    h1 {
        color: black;
    }
`