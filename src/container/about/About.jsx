import Pageheader from '../../pagecontent/Pageheader'
import './about.scss'
import {Bs0CircleFill} from "react-icons/bs"
import { Animate } from 'react-simple-animate'
import {SiJavascript,SiCplusplus,SiHtml5,SiTailwindcss} from 'react-icons/si'


const About = () => {
  const information=[
    {
      label:"name", value:"abdirizak",
    },
    
    {
      label:"address", value:"mogadisho,somalia",
    },
    
    {
      label:"email", value:"abdirzak@gmail.com",
    },
    {
      label:"phone", value:"+252616597707",
    },
    {
      label:"age", value:"20",
    },
    
  ];

  const jobsummary="passionate with programing and tecnology a young guy who trying to explore the world of new technoloy like cyrpto, AL/ML, web development, blockchain and cyper security"
  return (<>
    <section id="about" className='about'>
  
    <Pageheader textHeader="about me" Icon={<Bs0CircleFill size={23}/>}/>

    <div className="about-content">
        <div className="about_content_personalWrapper">     <Animate play
               duration={0.5}
               delay={0.02}
               start={{
                 transform:"translateX(-900px)",
               }}
               end={{
                 transform:"translateX(0px)"
               }}
             >
               <h2>computer science student(semester111)</h2>
               <p>{jobsummary}</p>
             </Animate>
             <Animate play
               duration={0.5}
               delay={0.02}
               start={{
                 transform:"translateX(540px)",
               }}
               end={{
                 transform:"translateX(0px)"
               }}
             >
               <h3>personal information</h3>
               <ul className='personal'>
                 {information.map((item,index)=>(
                   <li key={index}>
                     <span className='item-label'>{item.label}</span>
                     <span className='item-value'>{item.value}</span>
                   </li>
                 ))}
               </ul>
                </Animate></div>
        <div className="about_content_servicewrapper">
          <div className='about_content_servicewrapper_innercontent'>
          <div><SiHtml5 size={60} color='#fc1111'/></div>
          <div><SiTailwindcss size={60} color='#fc1111'/></div>
          <div><SiJavascript size={60} color='#fc1111'/></div>
          <div>< SiCplusplus size={60} color='#fc1111'/></div>
          </div>
          
        
         </div>
      </div>
    </section>
   
    </>
  
  )
}

export default About