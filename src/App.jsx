
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'



import Home from './container/home/Home'
import About from './container/about/About'
import Contact from './container/contact/Contact'
import Portfolio from './container/portfolio/Portfolio'
import Skills from './container/skills/Skills'
import Resume from './container/resume/Resume'
import Navbar from './componant/navbar/Navbar'
import TestParticles from './componentparticles/TestParticles'


function App() {
const location=useLocation()

const renderparticles=location.pathname==="/"

    

    return(
        <>
        {/* particles js */}
        {renderparticles&&<TestParticles/>}
        
        
        <Navbar/>
    

        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/about'  element={<About/>} />
            <Route path='/Contact'  element={<Contact/>} />
            <Route path='/portfolio'  element={<Portfolio/>} />
            <Route path='/skills'  element={<Skills/>} />
            <Route path='/resume'  element={<Resume/>} />
        </Routes>
        </>
    )
  
}

export default App
