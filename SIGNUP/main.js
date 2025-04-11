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
function validateForm(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    const fullName = document.getElementById('fullName').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Reset previous error states
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('error');
        input.classList.remove('success');
    });

    // Validate full name
    if (fullName.trim().length < 3) {
        document.getElementById('fullName').classList.add('error');
        alert('Please enter your full name (minimum 3 characters)');
        return false;
    }

    // Validate email/phone
    const isEmail = userInput.includes('@') && userInput.includes('.');
    const isPhone = /^\d{10}$/.test(userInput);
    
    if (!isEmail && !isPhone) {
        document.getElementById('userInput').classList.add('error');
        alert('Please enter a valid email or 10-digit mobile number');
        return false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password').classList.add('error');
        alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character');
        return false;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        document.getElementById('confirmPassword').classList.add('error');
        alert('Passwords do not match');
        return false;
    }

    // If all validations pass
    document.querySelectorAll('input').forEach(input => {
        input.classList.add('success');
    });

    // Here you would typically send the data to your server
    alert('Signup successful!');
    return false;
}

// Attach form submit handler
document.getElementById('signupForm').addEventListener('submit', validateForm);