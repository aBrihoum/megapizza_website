import { Injectable } from '@angular/core';
import cityData from '../../assets/json/city-data.json';
import _slides from '../../assets/json/slides.json';
interface slidesI {
  name: 'pizza' | 'tacos' | 'dessert'
  slides: { path: string, alt: string, title: string }[]
  menu: { path: string, path_min: string, alt: string, title: string }[]
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  // ? -------------------------------------------------
  isShowModal = false
  // ? -------------------------------------------------
  pickedCity = cityData[0] // pick the first city, cuz i don't have a city switcher 'yet'
  pickedCityTowns = this.pickedCity.towns
  pickedTown = this.pickedCityTowns[0]
  // ? -------------------------------------------------
  slides = _slides as slidesI[]
  pickedMealCategory: slidesI = this.slides[0]
  pickedMealCategoryMenu = this.pickedMealCategory.menu[0]
  // ? -------------------------------------------------

  changeMealCategory(category: slidesI['name']) {
    let i = this.slides.findIndex(x => x.name === category)
    this.pickedMealCategory = this.slides[i]
    this.pickedMealCategoryMenu = this.pickedMealCategory.menu[0]
  }
  changeMealCategoryMenu(index: number) {
    this.pickedMealCategoryMenu = this.pickedMealCategory.menu[index]
  }

  // ? -------------------------------------------------
  jumpToSection(selector: string) {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" })
  }

  // ? -------------------------------------------------
  changeTown(index: number) { this.pickedTown = this.pickedCityTowns[index] }

  // ? -------------------------------------------------
  showModal() {
    this.isShowModal = true
    let modalContainerEl = document.querySelector('#modalContainer47510s5zM') as HTMLDivElement
    let modalEl = document.querySelector('#modal47510s5zM') as HTMLDivElement
    modalContainerEl.style.display = 'block'
    let fct = (event: Event) => {
      if (!(modalEl as any).contains(event.target)) {
        document.removeEventListener('mousedown', fct);
        modalContainerEl.style.display = 'none'
        this.isShowModal = false
      }
    }
    document.addEventListener('mousedown', fct)
  }
}
