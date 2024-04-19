// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-H1DthngzQ1DIpRMY0f4Sfgr1Cm7fY74",
    authDomain: "mindhub-bf673.firebaseapp.com",
    projectId: "mindhub-bf673",
    storageBucket: "mindhub-bf673.appspot.com",
    messagingSenderId: "50908334476",
    appId: "1:50908334476:web:ed358c8d788df594c12ea9",
    measurementId: "G-QBZS86J8DB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

  const auth = getAuth();

  document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpEmail = document.getElementById('signUpEmail').value
    const signUpPassword = document.getElementById('signUpPassword').value

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            console.log(userCredential)
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            console.log('error')
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

})

document.getElementById("signInButton").addEventListener("click", (event) => {
    event.preventDefault()
    const signInEmail = document.getElementById('signInEmail').value
    const signInPassword = document.getElementById('signInPassword').value

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
  .then((userCredential) => {
    console.log("Login Succes");
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log("Login Failed");
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
