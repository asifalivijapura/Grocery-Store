import React from 'react'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AdminLogin = () => {
    return (
        <>
            <div class="login-container">
                <div class="login-box">
                    {/* <!-- Heading --> */}
                    <h2>Log In to your account</h2>
                    {/* <!-- Form --> */}
                    <form>
                        <div class="input-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div class="input-group">
                            <input type="password" placeholder="Password" required />
                            <span class="toggle-password">
                                <FaEye />
                            </span>
                        </div>
                        {/* <!-- Forgot Password --> */}
                        <a href="#" class="forgot-password">
                            <Link to={'/'}>Back to user</Link>
                        </a>
                        {/* <!-- Login Button --> */}
                        <button type="submit" class="login-btn">Log In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin
