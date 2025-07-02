import { IncomingMessage, ServerResponse } from "http";
import { listEpisodes } from "../services/episodeListService";
import { filterEpisodes } from "../services/episodeFilterService";

export const getEpisodeList = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodes();
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilteredEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await filterEpisodes(req.url);
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
