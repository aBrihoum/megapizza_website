<p align="center">
  <img width="150" src="https://i.imgur.com/6wsFJbB.png">
<h4 align="center">Mega Pizza</h4>
<p align="center">
<a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular">
</a>
<a href="https://megapizza-v3.vercel.app" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/Vercel-preview%20online-green?style=for-the-badge&logo=vercel">
</a>
</a>
<a href="https://github1s.com/aBrihoum/megapizza_website/blob/master/src/app/app.module.ts" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/github1s-View%20project-blue?style=for-the-badge&logo=github">
</a>
</p>
</p>

---

This project is a lite version of a website, I designed and coded from the ground up for the largest fast-food restaurant chain in Algeria 🇩🇿 : `Mega Pizza`.

This project is made with the help of :

- [Angular](https://angular.io/)
- [lightGallery](https://www.lightgalleryjs.com/)
- [Swiper](https://swiperjs.com/)
- [lazysizes](https://github.com/aFarkas/lazysizes)

## Preview

Thanks to [Vercel](https://vercel.com/), you can preview the website online

<p align="center">
<a href="https://megapizza-v3.vercel.app" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/Vercel-preview%20online-green?style=for-the-badge&logo=vercel"></img>
</a>
</p>
<p align="center">
<a href="https://i.ibb.co/QHdL9Nz/1.webp" target="_blank" rel="noopener noreferrer">
<img src="https://i.ibb.co/QHdL9Nz/1.webp" width="32%"></img>
</a>
<a href="https://i.ibb.co/GF4DQkZ/2.webp" target="_blank" rel="noopener noreferrer">
<img src="https://i.ibb.co/GF4DQkZ/2.webp" width="32%"></img>
</a>
<a href="https://i.ibb.co/gWtLYXj/3.webp" target="_blank" rel="noopener noreferrer">
<img src="https://i.ibb.co/gWtLYXj/3.webp" width="32%"></img>
</a>
</p>

## Road

The most challenging and time-consuming part of this project is the design. No pattern nor road/information/picture/color/design was given to me. I was told to : `Make A Website` period. Because of that :

- I've spent days, imagining, designing, re-imagining, re-designing, searching, seeking inspiration, testing color palettes, backgrounds, searching for SVGs, icons, editing & creating custom banners/images compressing them...

Coding the website was fun, but optimizing it not that much, like you may know, `Angular` is famous with its big bundle size, and I can't sleep at night if a website I build has a bad [lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) score. Because of that, hours were spent trying to get the perfect score & the perfect UX, and I eventually got there by essentially lazy loading and preloading a bunch of the website resources and prioritizing them from first to last to load. Something that also helped is the use of the `webP` image format.

This website is super responsive, I made sure of that by checking every possible view-port.
The minimum width this website support is `280px` (Galaxy Fold 1).

#### Why angular ?

You may say that the website is simple enough to just use vanilla JavaScript, and yes, you are right, but like I already mentioned, this version is a `lite` version, the original one was supposed to have ton of features, like ordering online and having a realtime status of the latter, sharing thoughts and leaving reviews, a discount program, a mobile application...

## Lighthouse

<p align="center">
<a href="https://i.ibb.co/zsNYbNk/Screenshot-559-min.png" target="_blank" rel="noopener noreferrer">
<img src="https://i.ibb.co/zsNYbNk/Screenshot-559-min.png" width="50%"></img>
</a>
</p>

<p align="center">
<a href="https://googlechrome.github.io/lighthouse/viewer/?gist=818573d691eaf02475348f847e9aaeba" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/lighthouse-view%20report-blue?style=for-the-badge&logo=lighthouse"></img>
</a>
</p>
Of course 💯 man, what did you expect? me not sleeping?

## Features

- Every picture is compressed and served with the `webP` format
- Every font is compressed and served with the `woff2` format
- Every picture is lazy loaded
- Every picture has a `LQIP` (Low Quality Image Placeholder) and a loading indicator
- Every third-party `JavaScript` library is lazy loaded
- Every critical CSS is preloaded
- Every uncritical CSS is lazy loaded
- Super responsive (min : `280px`)
- Super fast loading (`0.5s`)
- Super low initial page size (`602kb`)

I'm sure there's more, but that's already enough 🐸

---

<p align="center">
  <img width="50" src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png">
</p>

<p align="center">
Checkout my article on dev.to explaining the steps & technique I used to optimize this website :
</p>

<p align="center">
<a href="https://dev.to/brihoum/how-i-optimized-my-angular-website-3fd0" target="_blank" rel="noopener noreferrer">
<img width="500" src="https://i.ibb.co/C5QzXFM/99.webp">
</a>
</p>

---

## Quick start

Clone this repo into new project folder (e.g., megapizza).

```
git clone https://github.com/aBrihoum/megapizza_website  megapizza
```

Install npm packages.

```
cd megapizza
npm i
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
