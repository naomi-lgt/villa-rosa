import { useRef } from 'react';
import './Home.scss';

const Home = () => {
    const homeRef = useRef("");

    return (
        <div className="home-container" id="home" ref={homeRef}>
            <div className="home-text">
                <h1>Welcome to Villa Rosa.</h1>
                <p>Since 2003, Villa Rosa welcomes you to their restaurant to offer a one of a kind experience.</p>
            </div>
            <div className="home-carousel-container">
                <div className="home-carousel-container home-carousel">
                    <div className="pic1"></div>
                    <div className="pic2"></div>
                    <div className="pic3"></div>
                </div>
            </div>
        </div>
    )
};

export default Home;
