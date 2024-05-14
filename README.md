# API Order Microservices

### Node version 18.x LTS

### Postgres version 14

> > > Docs

- Official Doc RabbitMQ: https://www.rabbitmq.com/tutorials
- Docker image RabbitMQ: https://hub.docker.com/_/rabbitmq

* Nodemailer: https://www.nodemailer.com/about/
* Mailtrap: https://github.com/railsware/mailtrap-nodejs

> > > Dependencies

```bash
    "express": "^4.19.2",
    "pg": "^8.11.5",
    "nodemailer": "^6.9.13",
    "mailtrap": "^3.3.0",
    "cors": "^2.8.5",
    "morgan": "^1.10.0",
    "dotenv": "^16.4.5",
    "uuid": "^9.0.1"
    "ts-node-dev": "^2.0.0",
    "express-async-errors": "^3.1.1",
    "typescript": "^5.4.5"
    "@types/nodemailer": "^6.4.15",
    "@types/pg": "^8.11.6",
    "@types/uuid": "^9.0.8",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/morgan": "^1.9.9",
    "@types/amqplib": "^0.10.5",
```

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Vim](https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### About

This service creates an order, sends an email to the client notifying that the order has entered the process queue without blocking the user's flow. Persists the data in the database with "pending" status and finally puts it in the queue.

### Quick Started

```
git clone https://github.com/WictorHiago/order-service.git
npm install
npm run dev
or
yarn dev
```

### Configure tsconfig.json

```
"strictPropertyInitialization": false
```

### RUN RabbitMQ on Docker:

```bash
sudo docker run -d --hostname my-rabbit --name rabbitmq-server -p 8080:15672 -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password rabbitmq:3-management
```

- Access rabbitmq in browser: http://localhost:8080
