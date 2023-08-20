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
                <Description>
                    Sed ac tellus ac odio condimentum bibendum eget ut arcu. Vivamus et odio ac elit laoreet dictum et sit amet leo. Morbi in justo sit amet massa fermentum facilisis ut at tortor. Duis vehicula aliquet turpis, eu venenatis ante hendrerit quis. Maecenas pharetra lacus nec sem volutpat, eget dignissim odio auctor. Aenean nec vulputate libero, et bibendum justo.
                </Description>
            </Article>
            <Article2>

            </Article2>
        </Section>
    )
}
export default Slogan;

const Section = styled.section`
    width: 100vw;
    background-color: #242424;
    height: 75vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const Article = styled.article`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Article2 = styled.article`
    width: 30vw;
`;
const H1 = styled.h1`
    font-size: 4rem;
    font-weight: bolder;
    letter-spacing: .5vh;
    margin: 0;
    color: #ebebeb;
`;
const Img = styled.img`
    height: 20vh;
    width: 25vw;
`;
const Description = styled.p`
    color: #ebebeb;
    height: max-content;
    margin: 0;
    width: 50vw;
`;
