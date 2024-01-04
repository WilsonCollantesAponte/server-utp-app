import express, { Express } from "express";
import cors from "cors";
import router from "./routes/route";

const server: Express = express();

server.use(cors());
server.use(express.json());

server.use("/", router);

export default server;
