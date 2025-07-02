import * as http from "http";
import {
  getEpisodeList,
  getFilteredEpisodes,
} from "./controllers/podcastController";
import { Routes } from "./routes/routes";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseURL, queryString] = req.url?.split("?") ?? ["", ""];

    if (req.method === "GET" && baseURL === Routes.LIST) {
      await getEpisodeList(req, res);
    }

    if (req.method === "GET" && baseURL === Routes.EPISODE) {
      await getFilteredEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
