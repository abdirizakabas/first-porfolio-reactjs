import Pageheader from '../../pagecontent/Pageheader'
import './contact.scss'
import {Bs0CircleFill} from "react-icons/bs"

const Contact = () => {
  return (
    <section id="contact" className='contact'>
   
    <Pageheader textHeader="contact me" Icon={<Bs0CircleFill size={23}/>}/>
  </section>
  )
}

export default Contact