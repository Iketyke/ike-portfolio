import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import TypingText from "../../Components/TypingText/TypingText";
import Button from "../../Components/Button/Button";
import "animate.css";
import { LinkedInLogo, GithubLogo } from "../../Assets/Logos";
import { sendEmail } from "../../Utils";



const Contact = () => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [error, setError] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      setError({firstName: "Please Enter a First Name"})
    } else if (!lastName) {
      setError({lastName: "Please Enter a Last Name"})
    }
    else if (!email) {
      setError({email: "Please Enter an Email Address"})
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}$/.test(email)) {
      setError({email: "Please Enter a Valid Email Address"})
      setEmail("");
    } else if (!message) {
      setError({message: "Please Leave a Message"})
    }
    else if (!status) {
      sendEmail(firstName, lastName, email, message)
      setStatus(true)
      setFirstName("")
      setLastName("")
      setEmail("")
      setMessage("")
    }
    
  }

  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(revealed);
        if (entry.isIntersecting) {
          setTimeout(() => {
            setRevealed(true);
          }, 500);
        }
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="App__Contact" id="contact">
      <p ref={ref} className={revealed ? "App__About-Hidden" : ""}></p>
      {revealed ? (
        <>
          <div className="App__Contact-Form animate__animated animate__fadeIn">
            <h1 className="App__Contact-Title">
              <TypingText text={status ? "Message Sent!" : "Contact Me"} time={1000} delay={0} />
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                
                  className={error.firstName ? `error animate__animated animate__flipInX` : 'animate__animated animate__flipInX'}
                  type="text"
                  placeholder={error.firstName ? error.firstName : "First Name"}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
                <input
                  
                  className={error.lastName ? `error animate__animated animate__flipInX` : 'animate__animated animate__flipInX'}
                  type="text"
                  placeholder={error.lastName ? error.lastName : "Last Name"}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
              </div>

              <input
                
                className={error.email ? `error animate__animated animate__flipInX` : 'animate__animated animate__flipInX'}
                type="text"
                placeholder={error.email ? error.email : "Email Address"}
                value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
              />
              <textarea
               
      
                className={error.message ? `error animate__animated animate__flipInX` : 'animate__animated animate__flipInX'}
                type="text"
                placeholder={error.message ? error.message : "Leave a message here..."}
                value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
              />
              <button type="submit" className={status ? "animate__animated animate__bounceOut App__Contact-Submit" : "App__Contact-Submit scale-up-center"} >
                Submit
              </button>
            </form>
          </div>
          <div className="App__Contact-Links">
            <h1 className="App__Contact-Title">
              <TypingText text={"Or Find Me On..."} time={1000} delay={0} />
            </h1>
            <div>
              <a href="https://github.com/Iketyke">
                <img src={GithubLogo} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/impemberton/">
                <img src={LinkedInLogo} alt="" />
              </a>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Contact;
