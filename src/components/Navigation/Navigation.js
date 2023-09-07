import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
    <nav>
    <div className="row">
            <div className="left__column">
                <Link to={'/Home'}> 
                <h1 className="logo">mdz.</h1>
                </Link>
            </div>

            <div className="right__column">
                <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                {/* <!-- <ul class="nav-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul> --> */}
        </div>
    </div>
</nav>
    )
}

export default Navigation;