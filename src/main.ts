import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import PostgresRepository from "./adapters/repositories/postgresRepository";

const server = express();
const port = process.env.SERVER_PORT || 3000;

server.use(morgan("dev"));

server.use(cors({ origin: "*", methods: "GET,POST" }));

server.use(express.json());

const db = new PostgresRepository();
db.testConnection();

server.listen(port, () => console.log(`Server running on port ${port}`));
