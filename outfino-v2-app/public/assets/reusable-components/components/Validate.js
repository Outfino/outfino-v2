import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { CheckLg, XLg } from 'react-bootstrap-icons';
import Data from '../services/Data';

function Validate() {
    const query = new URLSearchParams(useLocation().search);
    const token = query.get("token");

    if (!token) {
        window.location = '/';
    }

    const [verificationStatus, setVerificationStatus] = useState(null); // null means pending, true for success, false for failure

    useEffect(() => {
        async function fetchValidation() {
            try {
                await Data.fetchValidation(token);
                setVerificationStatus(true);  // Success
            } catch (ex) {
                setVerificationStatus(false); // Failure if there's an error
            }
        }

        fetchValidation();
    }, [token]);

    return (
        <div className="Validate">

            <div className='row'>
                <h1 className='logo d-md-none'>Outfino</h1>
                <div className='col-md-6 d-flex align-items-center justify-content-center px-5'>
                    {verificationStatus === null && (
                        <div>
                            <h1>We are validation your profile.</h1>
                            <span className="spinner-border spinner-border me-2 text-primary" role="status" aria-hidden="true"></span>
                        </div>
                    )}

                    {verificationStatus === true && (
                        <div className='d-flex align-items-center'>
                            <div className="success d-flex justify-content-center align-items-center mb-1 me-3" style={{width: '50px', height: '50px'}}>
                                <CheckLg className="check-lg" style={{fontSize: '25px', transform: 'translate(-1px, 1px)'}} />
                            </div>
                            <h1>We validated your profile.</h1>
                        </div>
                    )}

                    {verificationStatus === false && (
                        <div className='d-flex align-items-center'>
                            <div className="fail d-flex justify-content-center align-items-center mb-1 me-3">
                                <XLg className="x-lg" />
                            </div>
                            <h1>Validation failed.</h1>
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

export default Validate;