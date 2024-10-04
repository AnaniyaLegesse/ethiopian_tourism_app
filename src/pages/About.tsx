import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MoveLeft } from 'lucide-react'

const About = () => {
  return (
    <Container>
      <Link to="/">
              <button className='outline_btn'><MoveLeft size={15}/>Back to Home</button>
      </Link>
      <div>
      <div className='content'>
            <p>We specialize in providing unforgettable experiences in Ethiopia,
            from breathtaking landscapes to rich cultural heritage.</p>
            
        </div>
        <div className='image'>
            <img src='/background.jpg' alt=""/>
        </div>
      </div>
        
        
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
 
.outline_btn{
  background-color: transparent;
  color:#1760ff;
  border: 1px solid #1760ff;
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
    padding:1rem;
   
    img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the content and image vertically */
    .content, .image {
      flex: unset; /* Remove flex behavior */
      width: 100%; /* Ensure both content and image take full width */
      padding: 1rem; /* Add some padding for breathing space */
    }

    .content {
      padding-left: 1rem; /* Reduce padding for smaller screens */
      text-align: center; /* Center text for better presentation */
      p {
        font-size: 1.5rem; /* Reduce font size for smaller screens */
      }
    }

    .image {
      padding: 0; /* Remove extra padding for images */
    }
  }
 
 `