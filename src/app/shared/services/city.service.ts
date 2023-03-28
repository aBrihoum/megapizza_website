import { Injectable } from '@angular/core';
import CITYDATA_JSON from '../../../assets/json/city-data.json';
import SLIDES_JSON from '../../../assets/json/slides.json';
import { MealTypesT, SlideI } from '../interfaces/slides.model';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  // ? -------------------------------------------------
  pickedCity = CITYDATA_JSON[0]; // pick the first city, cuz on this version, there's no city switcher
  pickedCityTowns = this.pickedCity.towns;
  pickedTown = this.pickedCityTowns[0];
  // ? -------------------------------------------------
  slides = SLIDES_JSON as SlideI[];
  pickedMealCategory: SlideI = this.slides[0];
  pickedMealCategoryMenu = this.pickedMealCategory.menu[0];

  changeMealCategory(category: MealTypesT) {
    let i = this.slides.findIndex((x) => x.name === category);
    this.pickedMealCategory = this.slides[i];
    this.pickedMealCategoryMenu = this.pickedMealCategory.menu[0];
  }
  changeMealCategoryMenu(index: number) {
    this.pickedMealCategoryMenu = this.pickedMealCategory.menu[index];
  }

  changeTown(index: number) {
    this.pickedTown = this.pickedCityTowns[index];
  }
}
