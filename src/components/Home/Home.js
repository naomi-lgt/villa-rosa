import { useRef, StyleSheet } from 'react';
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';

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
                <div className="home-carousel">
                <StackedCarousel
                    autoRotate={false}
                    rotationInterval={3000}
                    containerClassName={"carousel"}
                    cardClassName="card"
                    leftButton={<button>Left</button>}
                    rightButton={<button>Right</button>}
                    >
                    <div className="card" key={'child1'}>
                    <h2>First Card</h2>

                    </div>
                    <div className="card" key={'child2'}>
                    <h2>Second Card</h2>

                    </div>
                    <div className="card" key={'child3'}>
                    <h2>Third Card</h2>

                    </div>
                    <div className="card" key={'child4'}>
                    <h2>Fourth Card</h2>

                    </div>
                    <div className="card" key={'child5'}>
                    <h2>Fifth Card</h2>

                    </div>

                </StackedCarousel>
                </div>
            </div>
        </div>
    )
};

export default Home;
