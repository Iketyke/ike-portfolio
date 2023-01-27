import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/> 
      <Skills/>
      <section className='App__Projects section' id='projects'></section>
      <Contact/>
    </div>
  );
}

export default App;
