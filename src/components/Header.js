import React from "react";
import worldLogo from "../images/world-logo.png";

function Header() {
    return (
        <header>
            <img src={worldLogo} alt="Header-logo" />
            <h1 className="header-text">my travel journal.</h1>
        </header>
    );
}

export default Header;