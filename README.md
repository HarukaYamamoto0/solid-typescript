Here is the translated version of your text:

# RESTful API with Node.js, TypeScript, and SOLID Principles

This project is a basic implementation of a RESTful API using Node.js and TypeScript, following the SOLID principles, as taught in the **[SOLID Principles in a REST API with Node.js and TypeScript | Code/Drops #44](https://www.youtube.com/watch?v=vAV4Vy4jfkc)** video by Rocketseat.

## 🧾 Description

This API was developed to demonstrate the application of SOLID principles in the development of a REST API. The goal is to create more modular, maintainable, and extensible code, respecting good software architecture practices.

## 📋 Features

- User registration

## 🚀 Technologies Used

- **Node.js**: A platform for running JavaScript on the server-side.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Express**: A minimalist web framework for Node.js.
- **SOLID Principles**: A set of principles for creating robust and maintainable software.

## 📂 Folder Structure

Below is a summary of the folder structure used in the project, organized to reflect SOLID principles:

```javascript
.
├── biome.json
├── package.json
├── src
│   ├── app.ts
│   ├── entities
│   │   └── User.ts
│   ├── providers
│   │   ├── IEmailProvider.ts
│   │   └── implementations
│   │       └── MailTrapMailProvider.ts
│   ├── repositories
│   │   ├── implementations
│   │   │   └── PostgresUserRepository.ts
│   │   └── IUserRepository.ts
│   ├── routers.ts
│   ├── server.ts
│   └── useCases
│       └── CreateUser
│           ├── CreateUserController.ts
│           ├── CreateUserUseCase.spec.ts
│           ├── CreateUserUseCase.ts
│           ├── ICreateUserDTO.ts
│           └── index.ts
├── tsconfig.json
└── yarn.lock
```
