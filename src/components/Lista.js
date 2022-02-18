import React from 'react';
import styled from 'styled-components';

function Lista() {
    return (
        <Container>
            <img src="/images/manutenção.png" />
        </Container>
    )
}

export default Lista

const Container = styled.div`
    display: flex;
    margin-top:20px;
    justify-content: center;
    align-items: center;
    
    img {
        
    }
`