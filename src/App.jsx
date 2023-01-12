import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Skills from './Sections/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/> 
      <Skills/>
      <section className='App__Projects section' id='projects'></section>
      <section className='App__Contact section' id='contact'></section>
    </div>
  );
}

export default App;
