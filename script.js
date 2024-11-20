const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation here:
    // - Check if username and password fields are filled
    // - Add error messages if needed

    // Simulated login (replace with actual authentication):
    if (username === 'user' && password === 'password') {
        // Redirect to main menu page
        window.location.href = 'mainmenu.html'; 
    } else {
        // Show error message (e.g., alert)
        alert('Invalid username or password');
    }
});