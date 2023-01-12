import React from 'react'
import TypingText from '../../Components/TypingText/TypingText'
import "./Skills.css"
import {JSLogo, CPPLogo, PyLogo, ReactLogo, ReactNLogo, CSSLogo, HTMLLogo, FirebaseLogo, ExpressLogo, PSQLLogo, JestLogo} from "../../Assets/Logos"
const Skills = () => {
  return (
    <section className='App__Skills' id='skills'>
        <h1 className='App__Skills-Title'><TypingText text={"Skills"} time={1000} delay={0}/></h1>
        <div className='App__Skills-Languages card'>
            <h2><TypingText text={"Languages"} time={1000} delay={0}/></h2>
            <img src={JSLogo} alt="JS Logo" />
            <img src={CPPLogo} alt="C++ Logo" />
            <img src={PyLogo} alt="Python Logo" />
        </div>
        <div className='App__Skills-Frontend card'>
            <h2><TypingText text={"Front End"} time={1000} delay={0}/></h2>
            <img src={ReactLogo} alt="React Logo" />
            <img src={ReactNLogo} alt="React Native Logo" />
            <img src={CSSLogo} alt="CSS Logo" />
            <img src={HTMLLogo} alt="HTML Logo" />
        </div>
        <div className='App__Skills-Backend card'>
            <h2><TypingText text={"Back End"} time={1000} delay={0}/></h2>
            <img src={FirebaseLogo} alt="Firebase Logo" />
            <img src={ExpressLogo} alt="Express Logo" />
            <img src={PSQLLogo} alt="PSQL Logo" />
        </div>
        <div className='App__Skills-Testing card'>
            <h2><TypingText text={"Testing"} time={1000} delay={0}/></h2>
            <img src={JestLogo} alt="Jest Logo" />
        </div>
    </section>
  )
}

export default Skills
