import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            });
    }

    return (
        <div className="container body mt-4">
            <h1 className="text-primary mb-5">Please Login</h1>
            <button onClick={handleGoogleLogin} className="btn btn-danger">Google Sign-In</button>
        </div>
    );
};

export default Login;