import React, { useState } from 'react';
import './Signin.css';
import StudentLogin from '../Components/StudentLogin';
import LibrarianLogin from '../Components/LibrarianLogin';

function Signin() {
    const [isStudent, setIsStudent] = useState(true);
    const [error, setError] = useState("");

    const handleRoleSwitch = () => {
        setIsStudent(!isStudent);
        setError("");  // Clear error when switching roles
    };

    const handleLoginError = (errorMessage) => {
        setError(errorMessage);
    };

    return (
        <div className='signin-container'>
            <div className="signin-card">
                <h2 className="signin-title">Log in</h2>
                <p className="line"></p>
                <div className="role-switch">
                    <p>Select Role:</p>
                    <button onClick={() => setIsStudent(true)} className={isStudent ? "active-role" : ""}>Student</button>
                    <button onClick={() => setIsStudent(false)} className={!isStudent ? "active-role" : ""}>Librarian</button>
                </div>
                <div className="error-message"><p>{error}</p></div>
                <div className="signin-form">
                    {isStudent ? (
                        <StudentLogin onLoginError={handleLoginError} />
                    ) : (
                        <LibrarianLogin onLoginError={handleLoginError} />
                    )}
                </div>
                <div className='signup-option'>
                    <p className="signup-question">Don't have an account? Contact Librarian</p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
