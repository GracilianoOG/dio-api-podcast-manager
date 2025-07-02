import { IncomingMessage, ServerResponse } from "http";

export const getEpisodeList = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      test: "works!",
    })
  );
};
