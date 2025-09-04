import React, { useState } from "react";
import Data from "../services/Data";
import { CheckLg } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

function ResetPassword() {
    const query = new URLSearchParams(useLocation().search);
    const token = query.get("token");

    if (!token) {
        window.location = '/';
    }

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (password === '' || confirmPassword === '') {
            setErrorMessage('Please fill out all fields.');
            resetPasswordFields();
        } else if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 6 characters long.');
            resetPasswordFields();
        } else if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            resetPasswordFields();
        } else {
            setErrorMessage('');
            try {
                await Data.fetchResetPassword(token, password);

                setIsSuccess(true);
            } catch (ex) {
                setErrorMessage('Server error! Try again later!');

                resetPasswordFields();
            }
        }

        setIsLoading(false);
    };

    function resetPasswordFields() {
        setPassword('');
        setConfirmPassword('');
    }

    function validatePassword(password) {
		return password.length >= 6;
	}

    return (
        <div className="ResetPassword">
            <h1 className="logo d-md-none">Outfino</h1>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center px-5">
                    {!isSuccess ? (<form onSubmit={handleSubmit} className="reset-form">
                        <h2>Reset your password</h2>
                        <label>
                            New Password
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-apple-style"
                                placeholder="Enter new password"
                                disabled={isLoading}
                            />
                        </label>

                        <label>
                            Confirm Password
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="input-apple-style"
                                placeholder="Confirm password"
                                disabled={isLoading}
                            />
                        </label>

                        <button type="submit" className="apple-button" disabled={isLoading}>
                            {isLoading ? (
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="spinner-border spinner-border-sm me-2 text-white" role="status" aria-hidden="true"></span>
                                </div>
                            ) : (
                                "Reset Password"
                            )}                        </button>

                        {errorMessage && (
                            <div className={`alert alert-danger mt-3`} role="alert">
                                {errorMessage}
                            </div>
                        )}
                    </form>) :
                        (
                            <div className="success d-flex justify-content-center align-items-center">
                                <CheckLg className="check-lg" />
                            </div>
                        )}
                </div>
                <div className="col-6 d-md-block d-none">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1>Outfino</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;