import React from 'react'
import { useState, useEffect } from 'react';
const TypingText = ({ text, time, initialDelay }) => {
    const [typedText, setTypedText] = useState('');
    const delayPerChar = time/text.length

    useEffect(() => {
      let i = 0;
      function typing() {
        setTimeout(() => {
          if (i <= text.length) {
            setTypedText(text.slice(0, i));
            i++;
            typing();
          }
        }, delayPerChar);
      }
      setTimeout(() => {
        typing();
      }, initialDelay);
      return () => {};
    }, [text, delayPerChar, initialDelay]);

  return <>{typedText}</>;
}

export default TypingText