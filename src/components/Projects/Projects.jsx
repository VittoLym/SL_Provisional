import MyProject from './MyProject'
import LArrow from '../../../Img/arrow-back.svg'
import RArrow from '../../../Img/arrow-right.svg'
import styled from 'styled-components'

function Projects() {
    return (
        <ProjectsContainer id='projects'>
            <Section>
                <Article>
                    <Img src={LArrow}></Img>
                </Article>
                <MyProject />
                <MyProject />
                <MyProject />
                <Article>
                    <Img src={RArrow}></Img>
                </Article>
            </Section>
        </ProjectsContainer>
    )
}
export default Projects

const ProjectsContainer = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(191, 171, 147);
`;

const Section = styled.section`
    height: 80vh;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Article = styled.article`
    height: 80vh;
    width: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Img = styled.img`
    height: 10vh;
    width: 5vw;
    cursor: pointer;
    transition: all .5s ease;
    border-radius: 5vh;
    &:hover{
        background-color: hsl(32.72727272727272, 25.581395348837216%, 90%);
    }
`;