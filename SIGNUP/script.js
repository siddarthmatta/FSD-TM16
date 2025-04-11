// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '👁️‍🗨️';
    } else {
        passwordInput.type = 'password';
        this.textContent = '👁️';
    }
});

// Form validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Reset previous error states
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('error');
        input.classList.remove('success');
    });

    // Validate email/phone
    const isEmail = userInput.includes('@');
    const isPhone = /^\d{10}$/.test(userInput);
    
    if (!isEmail && !isPhone) {
        document.getElementById('userInput').classList.add('error');
        alert('Please enter a valid email or 10-digit mobile number');
        return;
    }

    // Validate password
    if (password.length < 8) {
        document.getElementById('password').classList.add('error');
        alert('Password must be at least 8 characters long');
        return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        document.getElementById('confirmPassword').classList.add('error');
        alert('Passwords do not match');
        return;
    }

    // If all validations pass
    document.querySelectorAll('input').forEach(input => {
        input.classList.add('success');
    });

    alert('Signup successful!');
});