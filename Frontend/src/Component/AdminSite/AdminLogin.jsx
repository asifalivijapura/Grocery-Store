import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { errorTostify, successTostify } from '../../toster/tostify.js'

const AdminLogin = ({ setShowHeader, login, data, setLogin }) => {
    // console.log("Dtaa", data)
    setShowHeader(false)

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === data.adminEmail && formData.password === data.adminPassword) {
            const message = 'Login SuccessFull'
            dispatch(successTostify(message))
            setLogin(false)
            localStorage.setItem("isLoggedIn", true)
        } else {
            const message = 'Incorrect Email or PassWord'
            dispatch(errorTostify(message))
            setLogin(true)
        }
    }

    return (
        <>
            <Modal open={login} onClose={() => { }}>
                <div class="login-container">
                    <div class="login-box">
                        <h2>Log In to your account</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="input-group">
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Email"
                                    value={formData?.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div class="input-group">
                                <input
                                    name='password'
                                    type={showPassword &&
                                        showPassword ? 'text' : 'password'
                                    }
                                    placeholder="Password"
                                    value={formData?.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span class="toggle-password">
                                    <FaEye onClick={() => setShowPassword(!showPassword)} />
                                </span>
                            </div>
                            <a class="forgot-password">
                                <Link to={'/'} >Back to user</Link>
                            </a>
                            <button class="login-btn">Log In</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AdminLogin