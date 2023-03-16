import {Servidor} from "./models/servidor.js";
import * as dotenv from 'dotenv';
dotenv.config();

const server = new Servidor();

server.listen();