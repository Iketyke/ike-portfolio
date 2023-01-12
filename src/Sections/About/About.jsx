import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import Button from "../../Components/Button/Button";
import Profile_Pic from "../../Assets/Profile_Pic.jpg";
import TypingText from "../../Components/TypingText/TypingText";
import 'animate.css';

const About = () => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(revealed);
        if (entry.isIntersecting) {
          setTimeout(()=> {
            setRevealed(true);
          }, 500)
        }
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="App__About" id="about">
      <p ref={ref} className={revealed ? "App__About-Hidden" : ""}>
      </p>
      {revealed ? (
        <>
          <img
            className="App__About-Image animate__animated animate__fadeIn"
            src={Profile_Pic}
            alt="Isaac Mellad Pemberton"
          />
          <div className={"App__About-Container"}>
            <h1 className="App__About-Title">
              <TypingText delay={1000} time={1000} text={"About Me"} />
            </h1>
            <p className="App__About-Desc"><TypingText delay={2000} time={5000} text={`An aspiring full stack developer, I have recently graduated from
              the Northcoders Coding Bootcamp and am now seeking a junior role.
              With a background in Mechatronics and Robotics from Leeds
              University, I have found a passion in programming and software
              development where I can use my logical and problem solving
              abilities to apply to my code. Equipped with the fundamentals of
              coding in Python and C++, and now, a more advanced knowledge of
              Javascript and various frameworks - I am keen to put my skills
              into practice within the industry`} />
            </p>
            <Button delay={7500} content={"My Skills"} link={"#skills"} />
          </div>
        </>
      ) : null}
    </section>
  );
};

export default About;
