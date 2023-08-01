import {Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="navbar">
            <Link to="/red">Red</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/orange">Orange</Link>
            <Link to="/Lavender">Lavender</Link>
            <Link to="/Home">Home</Link>
        </div>
    );
};

export default Navbar;