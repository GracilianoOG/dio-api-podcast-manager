import { IncomingMessage, ServerResponse } from "http";
import { listEpisodes } from "../services/episodeListService";
import { filterEpisodes } from "../services/episodeFilterService";
import { StatusCodes } from "../utils/statusCodes";

export const getEpisodeList = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodes();
  res.writeHead(StatusCodes.OK, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilteredEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await filterEpisodes(req.url);
  res.writeHead(StatusCodes.OK, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
