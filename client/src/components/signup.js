import firebase from "firebase/app";
import "firebase/auth";

const signUp = () => {
    var email = "test@example.com";
    var password = "hunter2";
    // [START auth_signup_password]
    firebase.auth().createUser(email, password)
        .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        });
    // [END auth_signup_password]
}

export default signUp;