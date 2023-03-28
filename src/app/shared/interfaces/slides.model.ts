export type SlideTypesT = 'food' | 'menus' | 'buildings';

export type MealTypesT = 'pizza' | 'tacos' | 'dessert';

export interface SlideI {
  name: MealTypesT;
  slides: GalleryI[];
  menu: MenuGalleryI[];
}

export interface GalleryI {
  path: string;
  alt: string;
  title: string;
}

export interface MenuGalleryI extends GalleryI {
  path_min: string;
}
