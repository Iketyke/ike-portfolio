import React, { useState, useEffect } from 'react'
import "./Button.css"
import {BiChevronDown} from "react-icons/bi"


const Button = ({delay, content, link}) => {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
      setTimeout(()=>{
        setDisplay(true)
      }, delay)
    
    }, [])
    
  return (
    <a className={display ? "scale-up-center App__Button" : 'App__Button App__Button-Hidden'} href={link}>
        <p>{content}</p> <BiChevronDown size={32}/>   
    </a>
  )
     

}
    
  

export default Button