import { FilteredPodcastModel } from "../models/filteredPodcastModel";
import { repositoryPodcasts } from "../repositories/podcastsRepository";
import { StatusCodes } from "../utils/statusCodes";

export const filterEpisodes = async (
  podcastName: string | undefined
): Promise<FilteredPodcastModel> => {
  const responseFormat: FilteredPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcasts(queryString);

  responseFormat.statusCode = data.length
    ? StatusCodes.OK
    : StatusCodes.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
