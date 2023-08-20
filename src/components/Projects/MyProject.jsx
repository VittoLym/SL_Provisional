import styled from "styled-components"
import Imgg from "../../../Img/te-de-mate.png"
import html from '../../../Img/html.svg'
import js from '../../../Img/js.svg'
import react from '../../../Img/react.svg'
import vue from '../../../Img/vue.svg'
import node from '../../../Img/node.svg'

function Myproject() {

    return (
        <Article>
            <Img src={Imgg}></Img>
            <Nombre>Mantecol con coca</Nombre>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            </Description>
            <TecContainer>
                <Tecnologias>Tecnologías</Tecnologias>
                <Tecnologias>Frontend:</Tecnologias>
                <Leng src={html}></Leng>
                <Leng src={js}></Leng>
                <Leng src={react}></Leng>
                <Leng src={vue}></Leng>
                <Tecnologias>Backend :</Tecnologias>
                <Leng src={node}></Leng>
            </TecContainer>
            <View>View More Details</View>
        </Article>
    )
}
export default Myproject

const Article = styled.article`
    font-family: 'poppins', monospace;
    height: 80vh;
    width: 25vw;
    border-radius: 8px;
    background-color: #2E2E2E;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
`;

const Img = styled.img`
    box-sizing: content-box;
    height: 27vh;
    width: 23vw;
    margin: 2vh 1vw;
    margin-bottom: 1vh;
`;

const Nombre = styled.h2`
    color: #bfab93;
    width: 23vw;
    height: 5vh;
    margin: 0;
`;

const Description = styled.p`
    height: 7vh;
    width: 23vw;
    margin: 0;
    color: #bfab93;
`;
const TecContainer = styled.article`
    height: 5vh;
    width: 23vw;
    overflow: hidden;
    transition: all .5s ease;
    cursor: pointer;
    &:hover{
        height: 27vh;
    }
`;

const Tecnologias = styled.p`
    height: 5vh;
    line-height: 5vh;
    width: max-content;
    font-weight: bold;
    color: #bfab93;
    margin: 0;
`;

const Leng = styled.img`
    height: 5vh;
    width: 3vw;
`;

const View = styled.a`
    height: 5vh;
    text-align: center;
    line-height: 5vh;
    width: 25vw;
    border-radius: 0 0 8px 8px;
    transition: all .5s ease;
    &:hover{
        background-color: #282828;
        color: #ababab;
        cursor: pointer;
        filter: blur(1);
        height: 10vh;
    }
`;
