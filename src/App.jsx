import Header from './components/Header.jsx'
import Slogan from './components/Slogan.jsx'
import Projects from './components/Projects/Projects.jsx'
import Prices from './components/Prices.jsx'
import AboutUs from './components/AboutUs.jsx'
import Footer from './components/Footer.jsx'
import styled from 'styled-components'

function App() {

  return (
    <Container>
      <Header />
      <Slogan />
      <Projects />
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #2E2E2E;
  height: 200vh;
  width: 100vw;
  scrollbar-gutter: always;
`;