import { FilteredPodcastModel } from "../models/filteredPodcastModel";
import { repositoryPodcasts } from "../repositories/podcastsRepository";
import { StatusCodes } from "../utils/statusCodes";

export const listEpisodes = async (): Promise<FilteredPodcastModel> => {
  const data = await repositoryPodcasts();

  const responseFormat = {
    statusCode: data.length ? StatusCodes.OK : StatusCodes.NO_CONTENT,
    body: data,
  };

  return responseFormat;
};
