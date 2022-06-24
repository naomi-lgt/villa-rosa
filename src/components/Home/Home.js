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
            src: "https://img.20mn.fr/ka7m0IiBTWG3w6-ffY4AOA/768x492_heritiere-star-telerealite-paris-hilton"
        },
        {
            src: "https://resize-elle.ladmedia.fr/rcrop/1098,768/img/var/plain_site/storage/images/people/la-vie-des-people/news/paris-hilton-est-fiancee-3905673/94422388-1-fre-FR/Paris-Hilton-est-fiancee.jpg"
        },
        {
            src: "https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/05/08/17/Chronique-C-est-la-vie-Paris-Hilton-le-business-du-moi.jpg?VersionId=LRbgACMAkTgvn1o4TM.V_YbWz5GJpWVR"
        },
        {
            src: "https://swiperjs.com/demos/images/nature-4.jpg"
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
