import React from 'react'
import { useState, useEffect } from 'react';
const TypingText = ({ text, time, delay }) => {
    const [typedText, setTypedText] = useState('');
    const delayPerChar = time/text.length

    useEffect(() => {
      let i = 0;
      function typing() {
        setTimeout(() => {
          if (i === text.length) {
            setTypedText(text.slice(0, i));
          }
          else if (i <= text.length) {
            setTypedText(text.slice(0, i) + "_");
            i++;
            typing();
          }
          
        }, delayPerChar);
      }
      setTimeout(() => {
        typing();
      }, delay);
      return () => {};
    }, [text, delayPerChar, delay]);

  return <>{typedText}</>;
}

export default TypingText