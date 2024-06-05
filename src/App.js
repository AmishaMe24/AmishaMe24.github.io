import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
    </div>
  );
}

export default App;