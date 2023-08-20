import styled from "styled-components"
import { useState } from "react"

function Header() {
    const reCharging = () => { window.location.reload() }
    const [loger, setLoger] = useState(true)
    const changeLog = () => { setLoger(!loger) }

    return (
        <HeaderContainer id="header">
            <H1 onClick={reCharging}>STAFF LYM</H1>
            <Nav>
                <P href="#header">Home</P>
                <P>Services</P>
                <P href="#projects">Projects</P>
                <P>Contact</P>
            </Nav>
            <Aside>
                <Button onClick={changeLog}>
                    {
                        loger ? 'Log in' : 'log out'
                    }
                </Button>
            </Aside>
        </HeaderContainer>
    )
}
export default Header

const HeaderContainer = styled.header`
    height: 15vh;
    width: 100vw;
    background-color: #6743a5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    scrollbar-gutter: stable;
`;

const H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin: 0;
    text-align: start;
    line-height: 15vh;
    width: 13vw;
    color: #bfab93;
    &:hover{
        cursor: pointer;
    }
`;

const Nav = styled.nav`
    height: 15vh;
    width: 32vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: space-between;
`;

const P = styled.a`
    text-decoration: none;
    font-family: 'Poppins', monospace;
    color: #bfab93;
    font-weight: 500;
    margin: 0;
    transition: all .3s ease;
    &:hover{
        color: #2E2E2E;
        cursor: pointer;
    }
`;

const Aside = styled.aside`
    height: 15vh;
    width: 35vw;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const Button = styled.button`
    background-color: transparent;
    color: #2e2e2e;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    width: 8vw;
    height: max-content;
    padding: 1vh 2vw;
    border: #2E2E2E solid 3px;
    border-radius: 8px;
    transition: all .5s ease;
    &:hover{
        scale: 1.1;
        background-color: #2E2E2E;
        color: #6743a5;
        cursor: pointer;
    }
`;
