import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MoveLeft } from 'lucide-react'

const About = () => {
  return (
    <Container>
      <div className="logo">
        <p>Ethiopian Tourism</p>
      </div>
      <div>
        <div className='image'>
              <img src='/background.jpg' alt=""/>
        </div>
        <div className='content'>
              <p>We specialize in providing unforgettable experiences in Ethiopia,
              from breathtaking landscapes to rich cultural heritage.</p>     
        </div>     
      </div>
      <Link to="/">
              <button className='outline_btn'><MoveLeft size={15}/>Back to Home</button>
      </Link>
        
        
    </Container>
  )
}

export default About

const Container=styled.div`
  min-height: 100vh;
  min-width: 100vw;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  padding:1rem;
 
  .logo{
  justify-content: left;
  }
.outline_btn{
  background-color: transparent;
  color:#1760ff;
  border: 1px solid #1760ff;
  justify-content: end;
  }

 div{
  display:flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center; 
  
 }
  .content {
    flex: 1;               
    text-align: left;      
    padding-left: 2rem; 

    p{
        font-size: 2.2rem;
        line-height: 1.3;
    } 
  }

  .image {
    flex: 1;               
    display: flex;
    justify-content: center; 
    align-items: center;     
    padding:2rem;
   
    img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    .content, .image {
      flex: unset; 
      width: 100%; 
      padding: 1rem; 
    }

    .content {
      padding-left: 0.5rem; 
      text-align: center; 
      p {
        font-size: 1.6rem;
      }
    }

    .image {
      padding: 0; 
      margin-top: 2rem;
    }

  }
 
 `