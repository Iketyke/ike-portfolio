import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Sections/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      
      <section className='App__About section' id='about'></section>
      <section className='App__Skills section' id='skills'></section>
      <section className='App__Projects section' id='projects'></section>
      <section className='App__Contact section' id='contact'></section>
    </div>
  );
}

export default App;
