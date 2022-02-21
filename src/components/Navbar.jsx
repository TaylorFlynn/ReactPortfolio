import React, { useEffect, useState } from 'react';
import styled from "styled-components";

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
`;


const Navbar = () => {
    const [ShowNav, setShowNav] = useState(true);

    const handleScroll = () => {
        setShowNav(true || window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <NavbarSection id="navbar__section" showNav={ShowNav}>
            <NavbarContainer>
                <LogoContainer>
                    <LogoAnchor href="#app__wrapper"><LogoImg src="../assets/TFLOGO.png" alt="logo for Taylor Flynn" /></LogoAnchor>
                </LogoContainer>
                <div className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <NavbarMenu id="navbar__menu">
                    <NavbarMenuItem id="nav__home">
                        <NavbarMenuLink href="#app__wrapper" >Home</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__portfolio">
                        <NavbarMenuLink href="#portfolio__section" >Projects</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__stack">
                        <NavbarMenuLink href="#stack__section" >Stack</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__about">
                        <NavbarMenuLink href="#about__section" >About</NavbarMenuLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem id="nav__contact">
                        <NavbarMenuLink href="#contact__section" >Contact</NavbarMenuLink>
                    </NavbarMenuItem>
                </NavbarMenu>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar