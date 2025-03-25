function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6; // Minimum length for password
}

function validateRegistrationForm(form) {
    const errors = [];

    if (!form.name || form.name.trim() === '') {
        errors.push('Nome é obrigatório.');
    }

    if (!validateEmail(form.email)) {
        errors.push('Email inválido.');
    }

    if (!validatePassword(form.password)) {
        errors.push('A senha deve ter pelo menos 6 caracteres.');
    }

    return errors;
}

function displayErrors(errors) {
    const errorContainer = document.getElementById('error-messages');
    errorContainer.innerHTML = '';

    errors.forEach(error => {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = error;
        errorContainer.appendChild(errorElement);
    });
}

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
    };

    const errors = validateRegistrationForm(formData);

    if (errors.length > 0) {
        displayErrors(errors);
    } else {
        // Proceed with form submission or further processing
    }
});