import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const userState = localStorage.getItem('user');
        if (userState) {
          const userObj = JSON.parse(userState);
          setUser(userObj);
        } else {
            console.log("redirect ayyindi");
          navigate('/signup');
        }
      }, [navigate]);


    const handleLogout = () => {
        // Clear user state from localStorage
        localStorage.removeItem('user');
        setUser(null);
        navigate('/signup');
      };


    return (
        <div>
            <div className="container">
            <h1>Profile</h1>
            {user && (
            <div>
                <p>Full Name: {user.fullname}</p>
                <p>Email: {user.email }</p>
                <p>Password: {user.password}</p>
                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>
            )}
            </div>
        </div>
    )
}


export default Profile