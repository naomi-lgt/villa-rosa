import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

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
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Home;
