import React, { useState } from "react";
import Logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return(
        <>
            <div className='login-container'>
                <div className='login-box'>
                    <img src={Logo} className="logo" alt="Logo goes here" />
                    <form method="post" acttion="" role='form' onSubmit={handleLogin}>                        
                        <p className='mb-3'>Use your Arden login credential to login to this platform</p>
                        <div className="form-floating mb-3">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="email" placeholder="Email address" />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Password" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button type="submit" className='btn btn-primary w-100'>Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;