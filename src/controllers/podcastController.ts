import { IncomingMessage, ServerResponse } from "http";
import { listEpisodes } from "../services/episodeListService";
import { filterEpisodes } from "../services/episodeFilterService";
import { ContentTypes } from "../utils/contentTypes";

const DEFAULT_CONTENT = { "content-type": ContentTypes.JSON };

export const getEpisodeList = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodes();
  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};

export const getFilteredEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await filterEpisodes(req.url);
  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};
