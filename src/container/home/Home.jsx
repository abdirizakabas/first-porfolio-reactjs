import { useNavigate } from 'react-router-dom';
import './home.scss';
import { Animate } from 'react-simple-animate';
const Home = () => {
  const navigate=useNavigate()
  
  const handleClick=()=>{
    navigate('/contact')
  }
  return (
    <section className='home' id="home">
      <div className="home_text">
        <h1>hello, i'am abdrizak abas<br/>
          <span className='second-color'>computer science student with second year</span>
          <br/>
         
          you can call me king abdirizak king abas. 👑
        
        
        </h1>
 
    
      </div>
     
      <Animate play
        duration={0.5}
        delay={0.02}
        start={{
          transform:"translateY(540px)",
        }}
        end={{
          transform:"translateY(0px)"
        }}
      >
        
      <div className='button-contact'>
        <button onClick={handleClick}>contact me</button>
      </div>
      </Animate>
   

   

    </section>
  )
}

export default Home