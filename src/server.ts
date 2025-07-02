import * as http from "http";
import {
  getEpisodeList,
  getFilteredEpisodes,
} from "./controllers/podcastController";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
      await getEpisodeList(req, res);
    }

    if (req.method === "GET" && req.url === "/api/episode") {
      await getFilteredEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
