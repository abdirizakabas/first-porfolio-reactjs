import { Animate, AnimateKeyframes } from 'react-simple-animate';
import Pageheader from '../../pagecontent/Pageheader';
import './skills.scss';
import { FaCode } from 'react-icons/fa';
import { Progress } from 'rsuite';
import ProgressLine from 'rsuite/esm/Progress/ProgressLine';
import { Line } from 'rc-progress';

const Skills = () => {
  const skillData = [
    {
      label: "Programming Languages",
      data: [
        { name: "Python", percentage: "80" },
        { name: "C++", percentage: "90" },
        { name: "JavaScript", percentage: "99" },
        { name: "HTML", percentage: "80" },
        { name: "TailwindCSS", percentage: "87" },
      ],
    },
    {
      label: "Tools",
      data: [
        { name: "VSCode", percentage: "100" },
        { name: "Git", percentage: "90" },
        { name: "GitHub", percentage: "95" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <Pageheader textHeader="Skills" Icon={<FaCode size={23} />} />
      <div className="skill_content">
        {skillData.map((item, i) => (
          <Animate
            key={i}
            play
            duration={1}
            delay={0.2}
            start={{ transform: "translateX(-200px)" }}
            end={{ transform: "translateX(0px)" }}
          >
              <h3 className='skill-conten-label '>{item.label}</h3>
            <div className="skill-content-wrapper">
            
              
                {item.data.map((skill, j) => (
                  <AnimateKeyframes play
                  duration={1}
                  iterationCount="1"
                  keyframes={["opacity:1","opacity:0"]}
                  >
                    <div className='skills-content-name' key={j}>
                      <p>{skill.name}</p>
                      <Line
                        percent={skill.percentage}
                        strokeColor="#fc1111"
                        strokeWidth="2"
                        trailWidth="2"//waa inta yar ee cad
                        strokeLinecap='square'
                      >

                      </Line>
                    </div>
                  </AnimateKeyframes>
                 
                  
                  
                ))}
              
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Skills;
