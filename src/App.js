import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import coming_soon_img from './assets/coming-soon.gif'

function App() {
  return (
    <div className='App'>
      {/* <Navbar></Navbar>
      <Home></Home> */}
      <div className="content">
        <img src={coming_soon_img} alt="Website Coming Soon..." style={{ height: "500px" }} />
        <h1 style={{
          color: '#333',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          marginTop: '20px',
          fontSize: '24px'
        }}>Hello!! I am Amisha Mehta. Website is Coming up Soon.</h1>
      </div>
    </div>
  );
}

export default App;
