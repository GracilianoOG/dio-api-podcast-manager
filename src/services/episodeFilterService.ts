import { repositoryPodcasts } from "../repositories/podcastsRepository";

export const filterEpisodes = async (podcastName: string) => {
  const data = await repositoryPodcasts(podcastName);

  return data;
};
