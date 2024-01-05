import express, { Express } from "express";
import cors from "cors";
import router from "./routes/route";

const server: Express = express();

server.use(
  cors({
    // origin: "http://localhost:8081/forms/newPost",
  })
);
server.use(express.json());

server.use("/", router);

export default server;
