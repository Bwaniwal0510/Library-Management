import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext.js';

function LibrarianLogin({ onLoginError }) {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(AuthContext);

    const API_URL = process.env.REACT_APP_API_URL;

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(API_URL + "api/auth/librarian/signin", { employeeId, password });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err });
            onLoginError("Wrong Password Or Employee ID");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="employeeId"><b>Employee ID</b></label>
            <input type="text" placeholder="Enter Employee ID" required onChange={(e) => setEmployeeId(e.target.value)} />
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Librarian Log In</button>
        </form>
    );
}

export default LibrarianLogin;
