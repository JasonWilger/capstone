import firebase from '../firebase';


function logOut() {
    console.log('logOut is running')
    let logout = document.getElementById('logOutSubmit');
    let errorMessageBox = document.getElementById('errorMessage');
    firebase
    .auth()
    .signOut(logout)
    .then(() => {
        //logOut
        console.log("user is logged out");
    })
    .catch(function(error) {
        errorMessageBox.innerHTML = error.message;
        console.log(error.message);
    });
}

export default logOut;