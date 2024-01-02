// const express = require("express");
// const morgan = require("morgan");

// const server = express();

import express, { Express, Request, Response } from "express";
import cors from "cors";

const server: Express = express();

server.use(cors());
server.use(express.json());

export default server;
