import React from "react";
import Logo from '../../assets/images/logo.png'

function Login() {
    return(
        <>
            <div className='login-container'>
                <div className='login-box'>
                    <img src={Logo} className="logo" alt="Logo goes here" />
                    <form method="post" acttion="" role='form'>                        
                        <p className='mb-3'>Use your Arden login credential to login to this platfrom</p>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Email address" />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <a href='/dashboard' className='btn btn-primary w-100'>Sign in</a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;