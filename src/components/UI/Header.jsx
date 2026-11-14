import React from "react";

const Header = () => {
    return (
        <header className="app-header">
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox" id="grayscale" />
                    <span className="slider"></span>
                </label>
                <span>Make photos grayscale</span>
            </div>
            <button class="fetch-btn">Fetch New Photos</button>
        </header>
    );
};

export default Header;