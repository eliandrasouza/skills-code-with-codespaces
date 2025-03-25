// registration.js
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        const data = Object.fromEntries(formData.entries());

        if (validateRegistration(data)) {
            registerSupplier(data);
        }
    });
});

function validateRegistration(data) {
    const { name, email, password } = data;
    let isValid = true;

    if (!name || name.length < 3) {
        alert('Nome deve ter pelo menos 3 caracteres.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        alert('Email inválido.');
        isValid = false;
    }

    if (!password || password.length < 6) {
        alert('Senha deve ter pelo menos 6 caracteres.');
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function registerSupplier(data) {
    fetch('/api/suppliers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar fornecedor.');
        }
        return response.json();
    })
    .then(data => {
        alert('Cadastro realizado com sucesso! Um email de confirmação foi enviado.');
        // Optionally, redirect to login or another page
    })
    .catch(error => {
        alert(error.message);
    });
}