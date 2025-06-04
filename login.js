document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('message').textContent = "Login successful!";
            window.location.href = "dashboard.html"; // Redirect after login
        })
        .catch(error => {
            document.getElementById('message').textContent = error.message;
        });
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('message').textContent = "Registration successful!";
            window.location.href = "dashboard.html"; // Redirect after registration
        })
        .catch(error => {
            document.getElementById('message').textContent = error.message;
        });
});