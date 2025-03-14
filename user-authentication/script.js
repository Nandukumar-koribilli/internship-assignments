document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    // Email validation (simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        return;
    }

    // Password validation
    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Simulated authentication
    if (email === 'test@example.com' && password === 'password123') {
        errorElement.textContent = '';
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('add-user-section').classList.remove('hidden');
    } else {
        errorElement.textContent = 'Invalid email or password.';
    }
});

document.getElementById('add-user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;
    const messageElement = document.getElementById('add-user-message');

    // Basic validation for new user
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newEmail)) {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = 'red';
        return;
    }

    if (newPassword.length < 6) {
        messageElement.textContent = 'Password must be at least 6 characters long.';
        messageElement.style.color = 'red';
        return;
    }

    // Simulated user addition
    messageElement.textContent = `User ${newEmail} added successfully!`;
    messageElement.style.color = 'green';
    this.reset();
});