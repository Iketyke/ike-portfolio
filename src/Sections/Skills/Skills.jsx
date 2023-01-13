import React, { useState, useEffect, useRef } from "react";
import TypingText from "../../Components/TypingText/TypingText";
import "./Skills.css";
import {
  JSLogo,
  CPPLogo,
  PyLogo,
  ReactLogo,
  ReactNLogo,
  CSSLogo,
  HTMLLogo,
  FirebaseLogo,
  ExpressLogo,
  PSQLLogo,
  JestLogo,
} from "../../Assets/Logos";
import Button from "../../Components/Button/Button";
import "animate.css";

const Skills = () => {
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
    <section className="App__Skills" id="skills">
      <p ref={ref} className={revealed ? "App__About-Hidden" : ""}></p>
      {revealed ? (
        <>
          <h1 className="App__Skills-Title">
            <TypingText text={"Skills"} time={1000} delay={0} />
          </h1>
          <div className="App__Skills-Container">
            <div className="App__Skills-Languages card animate__animated animate__zoomIn">
              <h2>
                <TypingText text={"Languages"} time={1000} delay={0} />
              </h2>
              <img src={JSLogo} alt="JS Logo" />
              <img src={CPPLogo} alt="C++ Logo" />
              <img src={PyLogo} alt="Python Logo" />
            </div>
            <div className="App__Skills-Container2">
              <div className="App__Skills-Frontend animate__animated animate__zoomIn card">
                <h2>
                  <TypingText text={"Front End"} time={1000} delay={0} />
                </h2>
                <div className="App__Skills-Frontend-Main">
                  <img src={ReactLogo} alt="React Logo" />
                  <div>
                    <img src={ReactNLogo} alt="React Native Logo" />
                    <img src={CSSLogo} alt="CSS Logo" />
                    <img src={HTMLLogo} alt="HTML Logo" />
                  </div>
                </div>
              </div>
              <div className="App__Skills-BackendTesting">
                <div className="App__Skills-Backend animate__animated animate__zoomIn card">
                  <h2>
                    <TypingText text={"Back End"} time={1000} delay={0} />
                  </h2>
                  <div className="App__Skills-Backend-Main">
                    <div>
                      <img src={FirebaseLogo} alt="Firebase Logo" />
                      <img src={ExpressLogo} alt="Express Logo" />
                    </div>
                    <img src={PSQLLogo} alt="PSQL Logo" />
                  </div>
                </div>
                <div className="App__Skills-Testing animate__animated animate__zoomIn card">
                  <h2>
                    <TypingText text={"Testing"} time={1000} delay={0} />
                  </h2>
                  <img src={JestLogo} alt="Jest Logo" />
                </div>
              </div>
            </div>
          </div>
          <Button delay={4000} content={"Projects"} link={"#projects"} />
        </>
      ) : null}
    </section>
  );
};

export default Skills;