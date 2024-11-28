# Sistema de Gerenciamento de Notas e Rankings

Este é um sistema desenvolvido em Node.js para gerenciar notas e rankings de alunos, permitindo que coordenadores escolares adicionem notas, visualizem rankings e disponibilizem informações centralizadas para os responsáveis.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução do Projeto](#execução-do-projeto)
- [Testando as Rotas da API](#testando-as-rotas-da-api)
  - [1. Adicionar Nota](#1-adicionar-nota)
  - [2. Consultar Ranking](#2-consultar-ranking)
  - [3. Acessar Desempenho do Responsável](#3-acessar-desempenho-do-responsável)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Possíveis Melhorias](#possíveis-melhorias)
- [Contato](#contato)

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- **Node.js** (versão LTS recomendada: **v20.x.x**)
- **NPM** (gerenciador de pacotes do Node.js)
- **Git** (para clonar o repositório)

Verifique se o Node.js está instalado corretamente:

```bash
node -v
# Deve retornar algo como v20.x.x
```

---

## Instalação

1. **Clone o repositório em sua máquina local:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA_DO_REPOSITORIO>
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

---

## Configuração

Não há configurações adicionais necessárias para executar este projeto. Todas as dependências e dados iniciais estão configurados no código. No entanto, se desejar modificar ou adicionar dados iniciais (como alunos, coordenadores ou responsáveis), você pode editar o arquivo `src/controllers/NotaController.js` onde esses dados estão definidos.

---

## Execução do Projeto

Para iniciar o servidor, você pode escolher entre dois modos:

- **Modo de Desenvolvimento** (com recarregamento automático usando `nodemon`):

  ```bash
  npm run dev
  ```

- **Modo de Produção**:

  ```bash
  npm start
  ```

O servidor iniciará na porta **3000** por padrão. Você verá a mensagem no console:

```
Servidor rodando na porta 3000
```

---

## Testando as Rotas da API

A API possui três rotas principais. Você pode testá-las usando ferramentas como **Postman**, **Insomnia** ou qualquer cliente HTTP de sua preferência.

### 1. **Adicionar Nota**

- **Endpoint**: `POST http://localhost:3000/api/notas`
- **Descrição**: Permite que o coordenador adicione uma nota a um aluno específico.
- **Cabeçalhos**:

  ```
  Content-Type: application/json
  ```

- **Corpo da Requisição** (JSON):

  ```json
  {
    "matriculaAluno": "2021001",
    "valor": 9.5,
    "disciplina": "Matemática",
    "tipoNota": "teorica", // ou "pratica"
    "peso": 1.0
  }
  ```

  - **matriculaAluno**: Matrícula do aluno ao qual a nota será adicionada.
  - **valor**: Valor da nota (número).
  - **disciplina**: Nome da disciplina.
  - **tipoNota**: Tipo da nota (`"teorica"` ou `"pratica"`). Se não for especificado, será considerada uma nota padrão.
  - **peso**: Peso da nota (número). Obrigatório se o tipo de nota for `"teorica"` ou `"pratica"`.

- **Resposta de Sucesso** (Status 200):

  ```json
  {
    "mensagem": "Nota adicionada com sucesso"
  }
  ```

- **Possíveis Erros**:
  - **404 Not Found**: Se a matrícula do aluno não for encontrada.
    ```json
    {
      "mensagem": "Aluno não encontrado"
    }
    ```
  - **400 Bad Request**: Se os dados da requisição estiverem incompletos ou incorretos.
    ```json
    {
      "mensagem": "Dados da requisição inválidos"
    }
    ```

### 2. **Consultar Ranking**

- **Endpoint**: `GET http://localhost:3000/api/ranking`
- **Descrição**: Retorna o ranking dos alunos de uma turma específica.
- **Parâmetros de Consulta**:

  - **turma** (obrigatório): Nome da turma a ser consultada.

  Exemplo: `GET http://localhost:3000/api/ranking?turma=Turma%20A`

- **Resposta de Sucesso** (Status 200):

  ```json
  [
    {
      "posicao": 1,
      "nome": "João",
      "media": 9.5
    },
    {
      "posicao": 2,
      "nome": "Maria",
      "media": 8.0
    }
  ]
  ```

- **Possíveis Erros**:
  - **400 Bad Request**: Se o parâmetro `turma` não for fornecido.
    ```json
    {
      "mensagem": "Turma não especificada"
    }
    ```

### 3. **Acessar Desempenho do Responsável**

- **Endpoint**: `GET http://localhost:3000/api/responsavel/:idResponsavel`
- **Descrição**: Retorna o desempenho de todos os dependentes associados a um responsável específico.
- **Parâmetros de Rota**:

  - **idResponsavel**: Identificação do responsável.

  Exemplo: `GET http://localhost:3000/api/responsavel/R001`

- **Resposta de Sucesso** (Status 200):

  ```json
  [
    {
      "aluno": "João",
      "media": 9.5,
      "notas": [
        {
          "disciplina": "Matemática",
          "valor": 9.5
        }
      ]
    },
    {
      "aluno": "Maria",
      "media": 8.0,
      "notas": [
        {
          "disciplina": "Português",
          "valor": 8.0
        }
      ]
    }
  ]
  ```

- **Possíveis Erros**:
  - **404 Not Found**: Se o ID do responsável não for encontrado.
    ```json
    {
      "mensagem": "Responsável não encontrado"
    }
    ```

---

## Estrutura do Projeto

A estrutura de pastas do projeto é a seguinte:

```
src/
├── models/
│   ├── Aluno.js
│   ├── Coordenador.js
│   ├── FormulaDesempate.js
│   ├── Nota.js
│   ├── NotaPratica.js
│   ├── NotaTeorica.js
│   ├── Ranking.js
│   └── Responsavel.js
├── services/
│   ├── HubInformacoes.js
│   └── RankingService.js
├── controllers/
│   └── NotaController.js
├── routes/
│   └── index.js
└── app.js
server.js
package.json
```

- **models/**: Contém as classes que representam as entidades do sistema.
- **services/**: Contém a lógica de negócio, como cálculo de rankings e gerenciamento de informações.
- **controllers/**: Controladores que lidam com as requisições e respostas da API.
- **routes/**: Define as rotas da API e mapeia para os controladores correspondentes.
- **app.js**: Configuração do aplicativo Express.
- **server.js**: Arquivo principal que inicia o servidor.
- **package.json**: Arquivo de configuração do NPM com as dependências e scripts.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js.
- **ES Modules**: Utilização da sintaxe de módulos ECMAScript (`import`/`export`).
- **Cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **Nodemon**: Ferramenta para desenvolvimento que reinicia automaticamente o servidor quando alterações são detectadas (usada no modo de desenvolvimento).

---

## Possíveis Melhorias

- **Persistência de Dados**: Atualmente, os dados são armazenados em memória. Integrar um banco de dados (como MongoDB, PostgreSQL ou MySQL) para persistir os dados seria uma melhoria significativa.
- **Autenticação e Autorização**: Implementar mecanismos de segurança para controlar o acesso às rotas, garantindo que apenas usuários autorizados possam realizar determinadas ações.
- **Interface de Usuário**: Desenvolver uma interface front-end para facilitar a interação com o sistema.
- **Validações Avançadas**: Adicionar validações mais robustas nos dados recebidos pela API.
- **Testes Automatizados**: Implementar testes unitários e de integração para garantir a qualidade e a confiabilidade do código.
- **Documentação da API**: Utilizar ferramentas como Swagger para gerar uma documentação interativa da API.

---

# Instruções Adicionais para Avaliadores

Para facilitar o processo de avaliação, seguem algumas informações adicionais:

- **Dados Iniciais**: O sistema já possui alguns dados iniciais configurados no arquivo `src/controllers/NotaController.js`, incluindo alunos, responsáveis e um coordenador.

- **Alunos Disponíveis**:
  - **João**:
    - Matrícula: `2021001`
    - Turma: `Turma A`
  - **Maria**:
    - Matrícula: `2021002`
    - Turma: `Turma A`
  - **Pedro**:
    - Matrícula: `2021003`
    - Turma: `Turma B`

- **Responsáveis Disponíveis**:
  - **Carlos**:
    - ID: `R001`
    - Dependentes: `João` e `Maria`

- **Coordenador Disponível**:
  - **Ana**:
    - ID: `C001`
    - Gerencia as turmas `Turma A` e `Turma B`

- **Testes Sugeridos**:
  - Adicionar notas para os alunos acima e verificar como o ranking é atualizado.
  - Consultar o desempenho do responsável `R001` após adicionar as notas.
  - Tentar adicionar uma nota para um aluno inexistente e verificar a mensagem de erro.

- **Importante**: Certifique-se de que o Node.js está na versão LTS recomendada e que todas as dependências estão instaladas corretamente antes de iniciar o servidor.

---

Esperamos que estas instruções sejam úteis e que o sistema atenda às expectativas dos avaliadores. Agradecemos o seu tempo e feedback!
