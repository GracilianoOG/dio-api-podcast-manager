import { IncomingMessage, ServerResponse } from "http";
import { listEpisodes } from "../services/episodeListService";

export const getEpisodeList = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodes();
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
