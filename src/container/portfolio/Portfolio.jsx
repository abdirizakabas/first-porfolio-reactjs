
import Pageheader from '../../pagecontent/Pageheader'
import './portfolio.scss'
import {Bs0CircleFill} from "react-icons/bs"


const Portfolio = () => {
  return (
    <section id="portfolio" className='portfolio'>
      <Pageheader textHeader="my porfolio" Icon={<Bs0CircleFill size={23}/>}/>
      <Pageheader/>
      </section > 
  )
}

export default Portfolio