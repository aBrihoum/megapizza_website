import { BehaviorSubject } from 'rxjs';
import { CityI, TownI } from './../interfaces/city.model';
import { Injectable } from '@angular/core';
import CITYDATA_JSON from '../../../assets/json/city-data.json';
import SLIDES_JSON from '../../../assets/json/slides.json';
import { MealTypesT, MenuGalleryI, SlideI } from '../interfaces/slides.model';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  // ? -------------------------------------------------
  private readonly pickedCity = CITYDATA_JSON[0] as CityI; // pick the first city, cuz on this version, there's no city switcher
  private readonly pickedCityTowns = this.pickedCity.towns;
  private readonly pickedTown$ = new BehaviorSubject(this.pickedCityTowns[0]);
  // ? -------------------------------------------------
  private readonly slides = SLIDES_JSON as SlideI[];
  private pickedMealCategory: SlideI = this.slides[0];
  private pickedMealCategoryMenu = this.pickedMealCategory.menu[0];
  // ? -------------------------------------------------

  changeMealCategory(category: MealTypesT) {
    let i = this.slides.findIndex((x) => x.name === category);
    this.pickedMealCategory = this.slides[i];
    this.pickedMealCategoryMenu = this.pickedMealCategory.menu[0];
  }

  changeMealCategoryMenu(index: number) {
    this.pickedMealCategoryMenu = this.pickedMealCategory.menu[index];
  }

  changeTown(index: number) {
    this.pickedTown$.next(this.pickedCityTowns[index]);
  }

  //? returns -------------------------------------

  returnPickedCity(): CityI {
    return this.pickedCity;
  }
  returnPickedCityTowns(): TownI[] {
    return this.pickedCityTowns;
  }
  returnPickedTown(): BehaviorSubject<TownI> {
    return this.pickedTown$;
  }

  returnSlides(): SlideI[] {
    return this.slides;
  }
  returnPickedMealCategory(): SlideI {
    return this.pickedMealCategory;
  }
  returnPickedMealCategoryMenu(): MenuGalleryI {
    return this.pickedMealCategoryMenu;
  }
}
