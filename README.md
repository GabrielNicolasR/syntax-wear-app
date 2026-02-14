# Syntax Wear App

Este é um projeto de aplicação web de e-commerce moderna, construída utilizando as mais recentes tecnologias do ecossistema React. A aplicação oferece uma experiência de compra completa, com gerenciamento de produtos, categorias, detalhes do produto e um carrinho de compras persistente.

## Tecnologias Utilizadas

*   **React 19:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **Vite 7:** Ferramenta de build rápida para desenvolvimento web.
*   **@tanstack/react-router:** Solução de roteamento robusta e type-safe para aplicações React.
*   **Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva.
*   **react-hook-form e Zod:** Para gerenciamento de formulários e validação de esquemas de forma eficiente.
*   **react-icons:** Biblioteca de ícones populares.

## Funcionalidades

*   **Navegação Dinâmica:** Rotas gerenciadas pelo TanStack Router, incluindo:
    *   Página Inicial (`/`)
    *   Páginas de Autenticação (`/sign-in`, `/sign-up`)
    *   Listagem de Produtos (`/products`)
    *   Detalhes do Produto (`/products/:productId`)
    *   Listagem de Produtos por Categoria (`/products/category/:category`)
    *   Página "Sobre" (`/about`)
    *   Página "Nossas Lojas" (`/our-stores`)
*   **Carrinho de Compras:**
    *   Adicionar, remover e atualizar a quantidade de produtos no carrinho.
    *   Persistência dos itens do carrinho utilizando `localStorage`, garantindo que os produtos permaneçam no carrinho mesmo após o fechamento do navegador.
*   **Estilização Moderna:** Design responsivo e atraente, desenvolvido com Tailwind CSS.
*   **Formulários Controlados:** Implementação de formulários com `react-hook-form` e validação de entrada de dados com `zod`.

## Como Rodar o Projeto

Para configurar e executar o projeto em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão LTS recomendada) instalado em sua máquina. O `npm` (Node Package Manager) é incluído com o Node.js.

### Instalação

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/syntax-wear-app.git
    cd syntax-wear-app
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reloading:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta disponível).

### Build para Produção

Para compilar o projeto para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview do Build de Produção

Para servir o build de produção localmente e verificar como ele se comporta:

```bash
npm run preview
```

### Linting

Para verificar problemas de estilo e possíveis erros no código:

```bash
npm run lint
```
