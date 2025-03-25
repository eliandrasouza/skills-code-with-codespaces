# Portal de Fornecedores

Este projeto é um portal de fornecedores desenvolvido em JavaScript, que permite o cadastro, autenticação e gerenciamento de informações de vendas dos fornecedores. Abaixo estão as instruções para instalação e uso do projeto.

## Estrutura do Projeto

```
portal-fornecedores
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   ├── app.js
│   │   │   ├── auth.js
│   │   │   ├── charts.js
│   │   │   ├── registration.js
│   │   │   └── validation.js
│   │   └── vendors
│   │       └── chart.js
│   ├── components
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── sidebar.html
│   ├── pages
│   │   ├── dashboard.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── reset-password.html
│   │   └── sales-report.html
│   └── services
│       ├── api.js
│       └── email.js
├── index.html
├── package.json
└── README.md
```

## Funcionalidades

- **Cadastro de Fornecedores**: Permite que novos fornecedores se cadastrem no portal.
- **Validação de Informações**: Valida os dados inseridos durante o cadastro e outras interações.
- **Envio de Confirmação de Cadastro via Email**: Envia um email de confirmação após o cadastro.
- **Autenticação de Fornecedores**: Fornecedores podem fazer login e logout no portal.
- **Recuperação de Senha**: Permite que os fornecedores recuperem suas senhas.
- **Visualização de Informações de Vendas**: Fornecedores podem visualizar gráficos e relatórios detalhados sobre suas vendas.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd portal-fornecedores
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar o projeto, abra o arquivo `index.html` em um navegador. Você também pode configurar um servidor local para facilitar o desenvolvimento.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.