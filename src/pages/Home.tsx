import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
        <div className='content'>
            <h1>Explore Ethiopia</h1>
            <Link
                to="/about"
            >
            <button>Learn More  <MoveRight size={15}/></button>
            </Link>
            
        </div>
     
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
 
  color: rgba(255, 255, 255, 0.87);
  background-image: linear-gradient(to bottom, rgba(129, 129, 129, 0.1), rgba(18, 18, 18, 0.8)), url('/background.jpg');
  background-size: cover;
  background-position: center;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
  }
h1 {
  font-size: 5.2em;
  line-height: 1.1;
}  
`
