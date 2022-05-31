import { useState, useRef } from 'react';
import useOutsideClick from '../../../customHooks/useOutsideClick';

const Tile = ({ service, index }) => {
    const ref = useRef();
    const [showServiceDesc, setShowServiceDesc] = useState(false);

    let toggleClashCheck = showServiceDesc ? 'open' : ''

    useOutsideClick(ref, () => {
        if (showServiceDesc) setShowServiceDesc(false)
    })

    return (
        <>
            <li ref={ref} className="services-tile" key={index} onClick={() => setShowServiceDesc(!showServiceDesc)}>
                <img src={service.icon} alt="" />
                {showServiceDesc &&
                    <div className="services-tile-arrow"></div>
                }
            </li>
            {/* Find a way to show an arrow above the description and below the tile */}
            {showServiceDesc &&
                <>
                    <li className={`services-tile-description ${toggleClashCheck}`}>
                            <>
                                <h2>{service.name}</h2>
                                <p>{service.desc}</p>
                            </>
                    </li>
                </>
            }
        </>
    )
};

export default Tile;
