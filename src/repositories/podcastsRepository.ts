import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcastModel";

const dataPath = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcasts = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";
  const rawData = fs.readFileSync(dataPath, language);
  let jsonFile: PodcastModel[] = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(podcast => podcast.podcastName === podcastName);
  }

  return jsonFile;
};
