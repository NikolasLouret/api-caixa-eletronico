# API Caixa Eletrônico

## Índice/Sumário

* [Sobre o Projeto](#sobre-o-projeto)
* [Arquitetura](#arquitetura)
* [Instruções de Uso](#instruções-de-uso)
* [Tecnologias Usadas](#tecnologias-usadas)
* [Código Fonte](#código-fonte)
* [Testes](#testes)
* [Implantação](#implantação)

## Sobre o Projeto

O projeto "ATM API" é uma API para um caixa eletrônico (ATM) que permite realizar operações de saque. Esta API é desenvolvida utilizando Node.js com TypeScript e implementa as melhores práticas de desenvolvimento, incluindo testes unitários, integração contínua e análise estática de código.

## Arquitetura

A arquitetura do projeto é baseada em uma estrutura de camadas, incluindo:

- **Controllers**: Gerencia as requisições HTTP e envia respostas apropriadas.
- **Services**: Contém a lógica de negócios da aplicação.
- **Routes**: Define os _endpoints_ da API.
- **Middlewares**: Implementa lógica intermediária, como autenticação.
- **Utils**: Contém funções utilitárias e manipuladores de erros.

## Instruções de Uso

Para utilizar a API, siga os passos abaixo:

### Pré-requisitos
- [Node.Js](https://nodejs.org/en/download/package-manager/current) (v20.15.0)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Instalação

1. Clone o repositório:
   
```sh
git clone https://github.com/NikolasLouret/api-caixa-eletronico.git
cd api-caixa-eletronico/code
```

2. Instale as dependências:
   
```sh
npm install
```

### Executando a API Localmente

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```
   
### Executando com Docker

#### 1. Contruir a imagem Docker

**`Opção 1: DockerHub`**

É possível acessar a imagem Docker hospedada no [DockerHub](https://hub.docker.com/r/nikolaslouret/atm-api) e fazer o `pull` da imagem com o comando:
```sh
docker pull nikolaslouret/atm-api
```

**`Opção 2: Local`**

É possível também construir a imagem localmente, utilizando o comando:
```sh
docker compose up --build
```

#### 2. Execução da imagem Docker

A execução do `container` é realizada através do comando:
```sh
docker run -p 5000:5000 nikolaslouret/atm-api
```

### Acesso a API

A API estará disponível em `http://localhost:5000`.

#### Requisição `HTTP`
  
```http
POST /api/saque HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "valor": 495
}
```

#### Resposta `JSON`
  
```json
{
  "100": 4,
  "50": 1,
  "20": 2,
  "10": 0,
  "5": 1,
  "2": 0
}
```

## Tecnologias Usadas
   As principais tecnologias, frameworks e bibliotecas utilizadas no desenvolvimento da API incluem:
- [Node.Js](https://nodejs.org/en): Plataforma de desenvolvimento.
- [TypeScript](https://www.typescriptlang.org/): Superset de JavaScript que adiciona tipagem estática
- [Express](https://expressjs.com/): Framework para construção de APIs.
- [Jest](https://jestjs.io/pt-BR/): Framework de testes.
- [Supertest](https://www.npmjs.com/package/supertest): Biblioteca para teste de endpoints HTTP.
- [ESLint](https://eslint.org/): Ferramenta de análise estática de código.
- [Docker](https://www.docker.com/): Ferramenta para criação de contêineres e gerenciamento de ambientes.

## Código Fonte

O projeto segue a seguinte estrutura de pastas:
```plaintext
.
├── src
|   ├── api
│   |   ├── controllers
│   |   │   └── atmController.ts
|   |   ├── interfaces
│   |   │   └── atmInterface.ts
|   |   ├── middlewares
│   |   ├── routes
|   |   |   ├── atmRouter.ts
│   |   │   └── router.ts
│   |   ├── services
│   |   │   └── atmService.ts
│   |   ├── utils
│   │   |   └── errorHandler.ts
|   |   ├── app.ts
│   |   └── server.ts
|   └── tests
|       ├── integrationTest
|       |   └── atmController.test.ts
│       └── unitTest
|           └── atmService.test.ts
├── .eslintrc.json
├── jest.config.js
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
└── package.json
```

## Testes

### Executando Testes

Para executar os testes unitários e de integração e verificar a cobertura de testes, use o comando:
```sh
npm test
```

Os relatórios de cobertura serão gerados na pasta coverage.

## Implantação

### CI/CD com GitHub Actions

O projeto utiliza GitHub Actions para CI/CD. O pipeline de integração contínua está configurado para:

- Realizar o build.
- Lintar o código.
- Executar testes unitários e de integração.
- Verificar a cobertura de testes.
- Construir e publicar a imagem Docker.

### Configuração do GitHub Actions

O workflow do GitHub Actions está definido no arquivo `.github/workflows/atm-api.yml`.
