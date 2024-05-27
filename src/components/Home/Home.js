import home_img from '../../assets/home-img.gif';

const Home = () => {

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
        <img src={home_img} alt="Home" style ={{width: "50%", height:"600px"}}/> 
        </div>
    )
};

export default Home;