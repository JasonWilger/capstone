import firebase from '../firebase';


function logIn() {
    console.log('I am running')
    let emailValue = document.getElementById('formBasicEmail').value;
    let passwordValue = document.getElementById('formBasicPassword').value;
    let errorMessageBox = document.getElementById('errorMessage');
    firebase
    .auth()
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then(function(response){
        //LogIn
        console.log("user is logged in");
    })
    .catch(function(error) {
        errorMessageBox.innerHTML = error.message;
        console.log(error.message);
    });
}

export default logIn;