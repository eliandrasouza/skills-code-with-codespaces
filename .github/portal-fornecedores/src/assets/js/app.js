// src/assets/js/app.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize application
    console.log('Portal de Fornecedores - Aplicação Inicializada');

    // Load components
    loadHeader();
    loadFooter();
    loadSidebar();

    // Add event listeners for navigation and other functionalities
    setupEventListeners();
});

function loadHeader() {
    // Load header component
    fetch('src/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

function loadFooter() {
    // Load footer component
    fetch('src/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

function loadSidebar() {
    // Load sidebar component
    fetch('src/components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
        });
}

function setupEventListeners() {
    // Setup event listeners for buttons and forms
    const registerButton = document.getElementById('register-button');
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }

    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
}