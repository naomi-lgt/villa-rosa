import { useState } from 'react';
import './Services.scss';
import Tile from './Tile/Tile.js';
import bar from '../../assets/bar.svg';
import restaurant from '../../assets/restaurant.svg';
import spa from '../../assets/spa.svg';
import karaoke from '../../assets/karaoke.svg';
import chef from '../../assets/chef.svg';
import delivery from '../../assets/delivery.svg';

const Services = () => {
    
    const SERVICES_LIST = [
        {
            icon: restaurant,
            name: 'Restaurant',
            desc: 'Enjoy delicious gourmet meals from £34,99.'
        },
        {
            icon: bar,
            name: 'Bar',
            desc: 'Order a refreshing or hot drink from our bartenders.'
        },
        {
            icon: spa,
            name: 'Spa',
            desc: 'Take some well needed rest at our wellness patio.'
        },
        {
            icon: karaoke,
            name: 'Karaoke',
            desc: 'Book a karaoke session to enjoy with your friends.'
        },
        {
            icon: chef,
            name: 'Chef',
            desc: 'Private gatherings during the weekend for as low as £145,99.'
        },
        {
            icon: delivery,
            name: 'Delivery',
            desc: '15-20 minute delivery for order above £40.'
        },
        {
            icon: karaoke,
            name: 'Karaoke',
            desc: 'Book a karaoke session to enjoy with your friends.'
        },
        {
            icon: bar,
            name: 'Bar',
            desc: 'Order a refreshing or hot drink from our bartenders.'
        },
        {
            icon: delivery,
            name: 'Delivery',
            desc: '15-20 minute delivery for order above £40.'
        },
        {
            icon: spa,
            name: 'Spa',
            desc: 'Take some well needed rest at our wellness patio.'
        },
        {
            icon: chef,
            name: 'Chef',
            desc: 'Private gatherings during the weekend for as low as £145,99.'
        },
        {
            icon: restaurant,
            name: 'Restaurant',
            desc: 'Enjoy delicious gourmet meals from £34,99.'
        },
    ]

    return (
        <div className="services-container" id="services">
            <div className="services-text">
                <h1>Services</h1>
                <p>Click on a service to learn more about it.</p>
            </div>
            <div className="services-tiles-container">
                <ul className="services-tiles">
                    {SERVICES_LIST.map((service, index) => 
                        <Tile service={service} key={index} />
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Services;
