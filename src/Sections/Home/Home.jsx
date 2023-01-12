import React from 'react'
import './Home.css'
import Button from '../../Components/Button/Button';
import TypingText from '../../Components/TypingText/TypingText';


const Home = () => {
  return (
    <section className='App__Home' id='home'>
        <h1 className='App__Home-Title'><TypingText delay={0} time={2000} text={"Isaac Mellad Pemberton"}/></h1>
        <h2 className='App__Home-Sub'><TypingText delay={2000} time={2000} text={"Aspiring Full Stack Web Developer"}></TypingText></h2>
        <Button delay={4500} content={"About Me"} link={"#about"}/>
    </section>
  )
}

export default Home