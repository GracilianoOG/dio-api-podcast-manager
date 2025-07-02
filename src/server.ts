import * as http from "http";
import { initApp } from "./app";

const server = http.createServer(initApp);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
