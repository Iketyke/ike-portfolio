import React from 'react'
import './Home.css'

import { useState, useEffect } from 'react';

function TypingText({ text }) {
  const [typedText, setTypedText] = useState('');


  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
        if(i % 2 === 1) {
            setTypedText(text.slice(0, i) + "_");
        } else {
            setTypedText(text.slice(0, i));
        }
      
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [text]);

  return <>{typedText}</>;
}

const Home = () => {
  return (
    <section className='App__Home' id='home'>
        <h1 className='App__Home-Title'><TypingText text={"Isaac Mellad Pemberton"}/></h1>
        <h2 className='App__Home-Sub'><TypingText text={"Aspiring Full Stack Web Developer"}></TypingText></h2>
    </section>
  )
}

export default Home