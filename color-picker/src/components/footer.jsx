import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="sticky-footer">
            <Link to="/red">Red</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/orange">Orange</Link>
            <Link to="lavender">Lavender</Link>
            <Link to="/home">Home</Link>
        </footer>
    );
};

export default Footer;