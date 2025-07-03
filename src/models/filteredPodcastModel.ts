import { PodcastModel } from "./podcastModel";

export interface FilteredPodcastModel {
  statusCode: number;
  body: PodcastModel[];
}
