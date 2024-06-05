import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Experience></Experience>
    </div>
  );
}

export default App;
