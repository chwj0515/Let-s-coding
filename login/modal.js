const logInButton = document.querySelector("#openSignInModal");
const signUpButton = document.querySelector("#openSignUpModal");

const login = document.querySelector("#login");
const signup = document.querySelector("#signup");

const loginOverlay = document.querySelector("#login .modal_overlay");
const signUpOverlay = document.querySelector("#signup .modal_overlay");

function openButton(modal) {
    modal.classList.remove("hidden");
}

function hideModal(modal) {
    modal.classList.add("hidden");
}

logInButton.addEventListener("click", function() {
    openButton(login);
});

signUpButton.addEventListener("click", function() {
    openButton(signup);
});

loginOverlay.addEventListener("click", function(event) {
    if (event.target === loginOverlay) {
        hideModal(login);
    }
});

signUpOverlay.addEventListener("click", function(event) {
    if (event.target === signUpOverlay) {
        hideModal(signup);
    }
});
