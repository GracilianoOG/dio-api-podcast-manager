import { repositoryPodcasts } from "../repositories/podcastsRepository";

export const listEpisodes = async () => {
  const data = await repositoryPodcasts();

  return data;
};
