import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.png" />
            <NavMenu>

                <a>
                    <Link to="/">
                        <img src="/images/home.png" />
                        <span>Início</span>
                    </Link>
                </a>
                <a>
                    <Link to="/menu">
                        <img src="/images/menu.png" />
                        <span>Cardápio</span>
                    </Link>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>Listas</span>
                </a>
    
            </NavMenu>
            <User>Redes Sociais</User>
            {/* <UserImg src="/images/profile.jpg" /> */}

        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #fff;
    display:flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    border-bottom: solid 1px black;
`
const Logo = styled.img`
    width: 80px;
    

`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    justify-content: center;
    color: black;


    a {
        display: flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        color: black;
        list-style: none;
        text-decoration: none;
    
   
    img {
        height: 20px;
        color: black;
       
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
        color: black;

        &:after {
            content:"";
            height: 2px;
            background: black;
            position: absolute;
            left:0;
            right:0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier( 0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);        
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
            
            
        }
    }
}
`
// const UserImg = styled.img`
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
//     cursor: pointer;
// `
const User = styled.div`
    margin-right: 10px;
    color: black;
    `