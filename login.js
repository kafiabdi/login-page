document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Basic validation
    if (username === 'admin' && password === 'password123') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password.';
    }
});
