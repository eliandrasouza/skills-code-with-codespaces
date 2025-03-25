// src/assets/js/auth.js

const apiUrl = 'https://api.seuservidor.com'; // URL da API

// Função para realizar o login do fornecedor
async function login(email, password) {
    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Erro ao realizar login');
        }

        const data = await response.json();
        // Armazenar token ou informações do fornecedor
        localStorage.setItem('token', data.token);
        alert('Login realizado com sucesso!');
        window.location.href = 'dashboard.html'; // Redirecionar para o painel
    } catch (error) {
        alert(error.message);
    }
}

// Função para realizar o logout do fornecedor
function logout() {
    localStorage.removeItem('token');
    alert('Logout realizado com sucesso!');
    window.location.href = 'login.html'; // Redirecionar para a página de login
}

// Função para verificar se o fornecedor está autenticado
function isAuthenticated() {
    return localStorage.getItem('token') !== null;
}

// Exportar as funções para uso em outros módulos
export { login, logout, isAuthenticated };