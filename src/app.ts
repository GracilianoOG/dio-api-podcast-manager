import * as http from "http";
import {
  getEpisodeList,
  getFilteredEpisodes,
} from "./controllers/podcastController";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/httpMethods";

export const initApp = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const baseURL = req.url?.split("?")[0];

  if (req.method === HttpMethods.GET && baseURL === Routes.LIST) {
    await getEpisodeList(req, res);
  }

  if (req.method === HttpMethods.GET && baseURL === Routes.EPISODE) {
    await getFilteredEpisodes(req, res);
  }
};
