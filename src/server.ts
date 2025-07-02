import * as http from "http";
import {
  getEpisodeList,
  getFilteredEpisodes,
} from "./controllers/podcastController";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/httpMethods";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseURL, queryString] = req.url?.split("?") ?? ["", ""];

    if (req.method === HttpMethods.GET && baseURL === Routes.LIST) {
      await getEpisodeList(req, res);
    }

    if (req.method === HttpMethods.GET && baseURL === Routes.EPISODE) {
      await getFilteredEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
