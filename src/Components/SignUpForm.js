import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";





const SignUpForm = () => {

    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPass, setConfrimPass] = useState("");
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const navigate = useNavigate();


    useEffect(() => {
        const userState = localStorage.getItem('user');
        if (userState) {
            navigate('/profile');
        } 
      },[navigate]);

    

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Form validation
        if (!fullname || !password || !confrimPass || !email ) {
          setErrorMessage('Error : All fields are mandatory.');
          return;
        }

        if (password != confrimPass) {
            setErrorMessage("Error : Passwords dont match");
            return;
        }

         // Generate access token
        const accessToken = generateAccessToken();

         // Create user state in localStorage
        const userState = {
            fullname,
            email,
            password,
            accessToken,
        };

        localStorage.setItem('user', JSON.stringify(userState));

         // Display success message and redirect to profile
        setSuccessMessage('Successfully Signed Up!');
        setErrorMessage("");
        setFullname('');
        setPassword('');
        setTimeout(() => {
        setSuccessMessage('');
        navigate('/profile');
        }, 2000);
    };


    const generateAccessToken = () => {
        const accessTokenBytes = new Uint8Array(16);
        crypto.getRandomValues(accessTokenBytes);
        const accessToken = Array.from(accessTokenBytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
        return accessToken;
      };
      
    

    return (
        <div className="container">
            <h1>SignUp</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="input-div">
                <input  type="text"
                    placeholder="Full Name"
                    value={fullname}
                        onChange={(e) => setFullname(e.target.value)}>
                </input>
                <input  type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>          
                </input>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confrim Password"
                    value={confrimPass}
                    onChange={(e) => setConfrimPass(e.target.value)}
                />
                </div>
                <button type="submit" className="btn">Signup</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    )
}


export default SignUpForm;