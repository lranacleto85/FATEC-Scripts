# ULTRA AVENIDA - Loja de Vistoria Veicular

Este projeto é uma aplicação web para a loja de vistoria veicular **ULTRA AVENIDA**. Desenvolvido com **Next.js**, **Tailwind CSS** e **ShadCN UI components**, a aplicação conta com um sistema de agendamento de serviços e uma área de login simples, simulando um banco de dados JSON.

## Funcionalidades

- **Login**: Sistema de login simulado usando um banco de dados JSON, com autenticação simples. A sessão é salva no `sessionStorage`.
- **Agendamento de Vistorias**: Clientes podem agendar vistorias diretamente na página inicial. Os dados de agendamento são armazenados no `localStorage`.
- **Validação com Zod**: Utiliza o Zod para validação de dados no login e no agendamento.
- **Interface limpa e responsiva**: Construída com **Tailwind CSS** e **ShadCN UI** para uma interface moderna e funcional.
- **Código limpo e organizado**: O projeto é dividido em componentes reutilizáveis, com foco na organização e legibilidade do código.

## Tecnologias Utilizadas

- **Next.js** (Framework React)
- **Tailwind CSS** (Estilização)
- **ShadCN UI** (Componentes UI)
- **Zod** (Validação de dados)
- **sessionStorage** (Armazenamento de sessão)
- **localStorage** (Armazenamento de agendamentos)
- **JSON simulado** (Banco de dados)

## Estrutura do Projeto

A estrutura do projeto é organizada em componentes reutilizáveis, o que facilita a manutenção e o crescimento da aplicação.

Aqui está a seção atualizada com instruções para rodar o projeto usando **Yarn**:

## Como Rodar o Projeto

### 1. Instalar o **Yarn** (caso não tenha instalado)

Se você ainda não tem o **Yarn** instalado, pode instalá-lo com o seguinte comando:

- **Usando npm**:

  ```bash
  npm install --global yarn
  ```

### 2. Clonar o repositório

Clone este repositório:

```bash
git clone https://github.com/seu-usuario/ultra-avenida.git
cd ultra-avenida
```

### 3. Instalar as dependências

Instale as dependências do projeto com o Yarn:

```bash
yarn install
```

### 4. Rodar o projeto

Execute o projeto localmente:

```bash
yarn dev
```

Agora, você pode acessar a aplicação em [http://localhost:3000](http://localhost:3000).