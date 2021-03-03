import firebase from './firebase';

function signupForm() {
    console.log('signup is running')
    let emailValue = document.getElementById('signupEmail').value;
    let passwordValue = document.getElementById('signupPassword').value;
    let errorMessageBox = document.getElementById('errorMessage');
    firebase
    .auth()
    .createUserWithEmailAndPassword(emailValue, passwordValue)
    .catch(function(error) {
        errorMessageBox.innerHTML = error.message;
        console.log(error.message);
    });
}

export default signupForm;