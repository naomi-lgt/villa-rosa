import { Link } from 'react-scroll';
import './Header.scss';

const Header = () => {
    return (
        <div className="header-container">
            <section>
                <nav><Link to="home" smooth={true} duration="300">home</Link></nav>
                <nav><Link to="services" smooth={true} duration="300">services</Link></nav>
                <nav><Link to="contact" smooth={true} duration="300">contact</Link></nav>
            </section>
        </div>
    )
};

export default Header;
