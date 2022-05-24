import { useState } from 'react';
import './Services.scss';
import Tile from './Tile/Tile.js';
import bar from '../../assets/bar.svg';
import restaurant from '../../assets/restaurant.svg';

const Services = () => {
    
    const SERVICES_LIST = [
        {
            icon: restaurant,
            name: 'Restaurant',
            desc: 'Enjoy delicious gourmet meals from £34,99'
        },
        {
            icon: bar,
            name: 'Bar',
            desc: 'Order a refreshing or hot drink from our bartenders.'
        },
        {
            icon: restaurant,
            name: 'Restaurant',
            desc: 'Enjoy delicious gourmet meals from £34,99'
        },
        {
            icon: bar,
            name: 'Bar',
            desc: 'Order a refreshing or hot drink from our bartenders.'
        },
        {
            icon: restaurant,
            name: 'Restaurant',
            desc: 'Enjoy delicious gourmet meals from £34,99'
        },
        {
            icon: bar,
            name: 'Bar',
            desc: 'Order a refreshing or hot drink from our bartenders.'
        }
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
                        <Tile service={service} index={index} />
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Services;
