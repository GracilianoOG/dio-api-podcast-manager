import { repositoryPodcasts } from "../repositories/podcastsRepository";

export const filterEpisodes = async (podcastName: string | undefined) => {
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcasts(queryString);

  return data;
};
