import Pageheader from '../../pagecontent/Pageheader';
import './resume.scss';
import {Bs0CircleFill} from "react-icons/bs"


const Resume = () => {
  return (
      <section id="resume" className='resume'>
     
        <Pageheader textHeader="resume" Icon={<Bs0CircleFill size={23}/>}/>
      </section>
  )
}

export default Resume