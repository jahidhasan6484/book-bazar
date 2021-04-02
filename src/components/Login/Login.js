import { Button, Container } from 'react-bootstrap';
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;
                const token = credential.accessToken;
                console.log(result.user);
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    name: displayName,
                    email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
            });
    }

    return (
        <Container>
            <div className="row mt-5">
                <div className="col-md-8 mt-5 text-center">
                    <h2>Welcome!</h2>
                    <h2>Join with</h2>
                    <p>BOOK<span className="text-success" style={{ fontWeight: '600' }}>BAZAR</span></p>
                </div>
                <div className="col-md-4 text-center login">
                    <h4>Log In with-</h4>
                    <div className="card-body">
                        <Button onClick={handleGoogleSignIn} className="btn-success">Google</Button>
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Login;