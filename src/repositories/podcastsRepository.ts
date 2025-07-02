import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcastModel";

const dataPath = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcasts = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const rawData = fs.readFileSync(dataPath, "utf-8");
  let jsonFile: PodcastModel[] = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(podcast => podcast.podcastName === podcastName);
  }

  return jsonFile;
};
