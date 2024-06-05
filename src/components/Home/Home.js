import home_img from '../../assets/home-img.gif';
import './Home.css';
import Typewriter from './Typewriter';

const Home = () => {
    return (
        <div className="home-container">
            <div className="text-container">
                <h1 className='text-hi'>Hi There!! <span className="wave">👋</span></h1>
                <h1 className='text-name'>I'm <span>Amisha Mehta</span></h1>
                <Typewriter />
            </div>
            <div className="img-container">
                <img src={home_img} alt="Home" />
            </div>
        </div>
    );
};

export default Home;