import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import './Home.scss';

const Home = () => {
    const homeRef = useRef("");

    const IMG_LIST = [
        {
            src: "https://images.unsplash.com/photo-1642933828502-4fe9bd2e8547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnQlMjBmYWNhZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
        },
        {
            src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
        },
        {
            src: "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1564758866667-d0276ba73ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
        },
    ]

    return (
        <div className="home-container" id="home" ref={homeRef}>
            <div className="home-text">
                <h1>Welcome to Villa Rosa.</h1>
                <p>Since 2003, Villa Rosa welcomes you to their restaurant to offer a one of a kind experience.</p>
            </div>
            <div className="home-carousel-container">
                <div className="home-carousel">
                <Swiper
                    effect={"cards"}
                    loop={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper"
                >
                    {IMG_LIST.map((img, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <img src={img.src} alt="" />
                        </SwiperSlide>
                        )
                    })}
                </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Home;
