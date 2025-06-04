function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const formTitle = document.getElementById('formTitle');
    const toggleBtn = document.querySelector('.toggle-btn');
    const message = document.getElementById('message');
    message.textContent = "";

    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        formTitle.textContent = 'Welcome Back';
        toggleBtn.textContent = "Don't have an account? Sign Up";
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        formTitle.textContent = 'Create Account';
        toggleBtn.textContent = 'Already have an account? Sign In';
    }
}

