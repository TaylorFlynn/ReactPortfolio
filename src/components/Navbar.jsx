import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Break960 } from '../responsive';

const NavbarSection = styled.nav`
    background: transparent;
    /* background: linear-gradient(to bottom, #181818, #141414), transparent; */
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    top: ${props => props.showNav ? "0":"-30%" };
    z-index: 998;
    transition: top 0.35s cubic-bezier(1, -0.03, 0.28, 0.3);
`;

const NavbarContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100vw;
    max-width: 1300px;
    margin: 0 0;
    padding: 0 40px;
    ${Break960({ display: "flex", justifyContent: "space-between", height: "80px", zIndex: "1", width: "100%", maxWidth: "1300px", padding: "0"})}
`;

const LogoContainer = styled.div`
    height: 60px;
    width: 60px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0em 0em 40px var(--primary-color),
        0em 0em 15px var(--primary-color-alt);
    margin-left: 35px;
`;

const LogoAnchor = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogoImg = styled.img`
    height: 65%;
    width: 65%;
    filter: invert(1);
`;

const NavbarMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    ${Break960({
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "15vw 10vw 5vw 10vw",
        margin: "0",
        width: "100%",
        position: "absolute",
        justifyContent: "space-between",
        top: "-1000px",
        opacity: "1",
        transition: "all 0.5s ease",
        zIndex: "-1",
        background: "#131313"
        })
    }
`;
const NavbarMenuItem = styled.li`
    height: 100%;
`;
const NavbarMenuLink = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    text-decoration: none;
    height: 100%;
    transition: all 0.3s ease;
    :hover{
        color: #f6c388;
    }
`

const NavbarToggle = styled.div`
    ${Break960({ zIndex: 999, cursor: "pointer", position: "absolute", top: "5%", right: "5%", transform: "translate(5%, 20%)"})}
    .bar{
        ${Break960({width: "35px", height: "5px", borderRadius: "5px", margin: "10px auto", transition: "all 0.4s cubic-bezier(1, -0.03, 0.28, 0.3)", background: "#fff"})}
    }
    .is-active:nth-of-type(1){
        transform: translateY(15px) rotate(-225deg);
    }
    .is-active:nth-of-type(2){
        opacity: 0;
    }
    .is-active:nth-of-type(3){
        transform: translateY(-15px) rotate(225deg);
    }
`


const Navbar = () => {
    const [ShowNav, setShowNav] = useState(true);
    const [ShowMobileMenu, setShowMobileMenu] = useState(false);

    const handleScroll = () => {
        setShowNav(true || window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])
    
    const HideMobile = () => {
        setShowMobileMenu(false)
    }
    const ToggleMobile = () => {
        setShowMobileMenu(prev=>!prev)
    }

    return (
        <NavbarSection id="navbar__section" showNav={ShowNav}>
            <NavbarContainer>
                <LogoContainer>
                    <LogoAnchor href="#app__wrapper"><LogoImg src="../assets/TFLOGO.png" alt="logo for Taylor Flynn" /></LogoAnchor>
                </LogoContainer>
                <NavbarToggle id="mobile-menu" onClick={ToggleMobile}>
                    <div className={ShowMobileMenu ? `bar is-active`:"bar"}></div>
                    <div className={ShowMobileMenu ? `bar is-active`:"bar"}></div>
                    <div className={ShowMobileMenu ? `bar is-active`:"bar"}></div>
                </NavbarToggle>
                <NavbarMenu id="navbar__menu" style={ShowMobileMenu ? {background: "#131313", top: "0%", opacity: "1", transition: "all 0.5s ease", zIndex: "99", height: "60vh", fontSize: "1.6rem"}: {}}>
                    <NavbarMenuItem id="nav__home" onClick={HideMobile}>
                        <NavbarMenuLink href="#app__wrapper" >Home</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__portfolio">
                        <NavbarMenuLink href="#portfolio__section" onClick={HideMobile}>Projects</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__stack">
                        <NavbarMenuLink href="#stack__section" onClick={HideMobile}>Stack</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__about">
                        <NavbarMenuLink href="#about__section" onClick={HideMobile}>About</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__contact">
                        <NavbarMenuLink href="#contact__section" onClick={HideMobile}>Contact</NavbarMenuLink>
                    </NavbarMenuItem>
                </NavbarMenu>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar