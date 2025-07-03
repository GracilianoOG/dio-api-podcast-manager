import { IncomingMessage, ServerResponse } from "http";
import { listEpisodes } from "../services/episodeListService";
import { filterEpisodes } from "../services/episodeFilterService";
import { StatusCodes } from "../utils/statusCodes";
import { ContentTypes } from "../utils/contentTypes";

export const getEpisodeList = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodes();
  res.writeHead(StatusCodes.OK, { "content-type": ContentTypes.JSON });
  res.end(JSON.stringify(content));
};

export const getFilteredEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await filterEpisodes(req.url);

  res.writeHead(content.statusCode, { "content-type": ContentTypes.JSON });
  res.end(JSON.stringify(content.body));
};
