import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Project /></div>
    </div>
  );
}

export default App;