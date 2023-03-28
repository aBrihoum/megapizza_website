export interface CityI {
  name: string;
  email: string;
  towns: TownI[];
}
export interface TownI {
  name: string;
  videoThumbnail: string;
  videoPath: string;
  fb: string;
  ig: string;
  map: string;
  mapPic: string;
  youtube: string;
  phones: string[];
  slides: TownSlides[];
}
export interface TownSlides {
  path: string;
  alt: string;
}
