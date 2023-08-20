import styled from "styled-components";
import Imgg from '../../Img/te-de-mate.png'

function Slogan() {
    return (
        <Section>
            <Article>
                <Img src={Imgg}></Img>
                <H1>STAFF LYM</H1>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna ac quam volutpat, eget congue tortor facilisis. Fusce congue, mauris sit amet faucibus malesuada. libero neque ultrices sapien, ut interdum velit felis a odio
                </Description>
                <Description>
                    Curabitur ultricies risus non nunc bibendum, ac dignissim arcu vehicula. Donec dictum ultrices tortor. Aenean nec malesuada justo.
                </Description>
            </Article>
        </Section>
    )
}
export default Slogan;

const Section = styled.section`
    width: 100vw;
    background-color: #2e2e2e;
    height: 85vh;
    display: flex;
    align-items:center;
    flex-direction: row;
    justify-content: center;
`;

const Article = styled.article`
    width: 80vw;
    display: flex;
    height: 60vh;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    :nth-child(3){
        margin-top: 0;
    }
`;


const Img = styled.img`
    height: 25vh;
    width: 25vw;
    margin: 0 ;
    margin-bottom:3vh;
`;

const H1 = styled.h1`
    font-size: 4rem;
    font-weight: bolder;
    letter-spacing: .5vh;
    margin: 0;
    color: #ebebeb;
`;

const Description = styled.p`
    color: #ebebeb;
    height: max-content;
    margin: 1vh 0;
    width: 60vw;
`;
