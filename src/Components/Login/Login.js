import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Link } from '@material-ui/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email, photoURL} = result.user;

            const currentUser = {...userInfo};
            currentUser.isLoggedIn = true;
            currentUser.userName = displayName;
            currentUser.email = email;
            currentUser.img = photoURL;
            currentUser.errorMessage = '';
            setUserInfo(currentUser);
            history.replace(from);

        })
        .catch((error) => {
            console.log(error);
            const currentUser = {...userInfo};
            currentUser.isLoggedIn = false;
            currentUser.userName = '';
            currentUser.email = '';
            currentUser.img = '';
            currentUser.errorMessage = error.message;
            setUserInfo(currentUser);
            console.log(userInfo);
        });
    }

    return (
        <div className='container my-5 p-3 registration-card'>
            <h3 className="text-danger text-center my-4">Login</h3>
           <Link style={{textDecoration: "none"}}> <Button onClick={signInWithGoogle} className="mx-5 my-3 register-btn" variant="warning" size="lg" block>Sign In With Google</Button> </Link>
        </div>
    );
};

export default Login;