
import React, { useState } from "react"
import Logo from '../navbar/logo.png';
import { Link } from "react-router-dom";
import {HiX} from 'react-icons/hi'
import { FaBars } from "react-icons/fa";
import './index.scss'


const data=[
    {
        label:"home",to:'/'
    },
    {
        label:"about",to:'/about'
    },
    {
        label:"contact",to:'/contact'
    },
    {
        label:"skills",to:'/skills'
    },
    {
        label:"resume",to:'/resume'
    },
]

const Navbar = () => {
    const [toggleIcons,setToggleIcons]=useState(false)

    const toggleIconsHandle=()=>{
        setToggleIcons(!toggleIcons)
    }
  return (
    <div>
        <nav className={`navbar${toggleIcons ? "mobile-active":""}`}>
            <div className="navbar-container">
              <Link to={'/'} className="navbar-container-logo">
              <img src={Logo} />
              </Link>
             </div>
             <ul className="navbar-container-menu">
                {data.map((item, index) => (
                    <li key={index} className="navbar-container-menu-items">
                        <Link to={item.to} className="navbar-container-menu-items-link">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

             <div className="navbar-icons" onClick={toggleIconsHandle}>
                {
                    toggleIcons? <HiX size={30}/>:<FaBars size={30}/>
                }

             </div>


        </nav>
    </div>
  )
}

export default Navbar