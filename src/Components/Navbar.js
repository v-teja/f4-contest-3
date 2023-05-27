import React from "react";
import {  Link } from 'react-router-dom';




const Navbar = () => {
    




    return (
        <nav>
            <ul>
                <div>
                    <li>
                        <Link to="/">Header</Link>
                    </li>
                </div>
                <div className="right-div">
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </div>
          
        </ul>
      </nav>
    )
}


export default Navbar;
