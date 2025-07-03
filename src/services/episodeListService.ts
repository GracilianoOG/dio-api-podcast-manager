import { FilteredPodcastModel } from "../models/filteredPodcastModel";
import { repositoryPodcasts } from "../repositories/podcastsRepository";
import { StatusCodes } from "../utils/statusCodes";

export const listEpisodes = async (): Promise<FilteredPodcastModel> => {
  const responseFormat: FilteredPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcasts();

  responseFormat.statusCode = data.length
    ? StatusCodes.OK
    : StatusCodes.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
