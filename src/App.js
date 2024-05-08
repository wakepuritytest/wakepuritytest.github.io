import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function App() {
    const client_ID = "client_secret_634212923285-qcfosg9sr1ke8198hdrjb1vg8ft93ma0.apps.googleusercontent.com.json";
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                const credentialDecode = jwtDecode(
                    credentialResponse.credential
                );
                console.log(credentialDecode);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
}

export default App;
