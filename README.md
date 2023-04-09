<div align="center">
<img width="150" src="https://i.imgur.com/6wsFJbB.png">

## Mega Pizza - The Website

[![angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular)](https://angular.io/) [![sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](ttps://sass-lang.com/) [![vercel](https://img.shields.io/badge/Vercel-preview%20online-green?style=for-the-badge&logo=vercel)](https://megapizza-v3.vercel.app) [![github1s](https://img.shields.io/badge/github1s-View%20project-blue?style=for-the-badge&logo=github)]("https://github1s.com/aBrihoum/megapizza_website/blob/master/src/app/app.module.ts)

</div>

# Description

This project is is a lighter version of a website that I designed and coded from the ground up for the largest fast-food restaurant chain in Algeria 🇩🇿 : `Mega Pizza`.

This project is made with the help of :

- [Angular](https://angular.io/)
- [lightGallery](https://www.lightgalleryjs.com/)
- [Swiper](https://swiperjs.com/)
- [lazysizes](https://github.com/aFarkas/lazysizes)

# Preview

<div align="center">

[![Preview](https://i.ibb.co/jfRZ6gq/youtube-cover.webp)](https://www.youtube.com/watch?v=uiHGt7nq0wc)

<img src="https://i.ibb.co/FBsJL7Y/prev1.webp" width="32%"><img src="https://i.ibb.co/X437MmN/prev2.webp" width="32%"><img src="https://i.ibb.co/HVFVxrv/prev3.webp" width="32%">

<br/>

▶ Visite the website

[![MegaPizza Preview](https://img.shields.io/badge/Vercel-preview%20online-green?style=for-the-badge&logo=vercel)](https://megapizza-v3.vercel.app)

</div>

# Features

- Every picture is **compressed** and served with the `webP` format
- Every font is **compressed** and served with the `woff2` format
- Every picture is **lazy loaded**
- Every picture has a `LQIP` (Low Quality Image Placeholder) and a loading indicator
- Every third-party `JavaScript` library is _lazy loaded_
- Every critical styling is **preloaded**
- Every non-critical styling is **lazy loaded**
- Every critical font/picture is **preloaded**
- Super **responsive** (min : `280px`)
- Super **fast loading** (`0.5s`)
- Super low initial page size

I'm sure there's more, but that's already enough 🐸

# Road

The most challenging and time-consuming aspect of this project was designing the website. I was given no specific pattern or information regarding the layout, colors, or design, and was simply told to `make a website.` As a result :

- I spent several days brainstorming ideas, sketching designs, researching inspiration, testing color palettes and backgrounds, searching for suitable SVGs and icons, and editing and creating custom banners and images, all while compressing them to ensure optimal loading times.

Coding the website was a fun challenge, but optimizing it proved to be a bit more difficult. As many are aware, `Angular` is notorious for its large bundle size, and I couldn't rest easy knowing that the website might have a poor [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) score. As a result, I spent hours fine-tuning the website's performance and user experience, ultimately achieving my goal by implementing various strategies like lazy loading and preloading resources to prioritize their loading order. Another useful tactic was to use the `webP` image format, which helped to further reduce the website's load times.

This website is designed to be fully responsive and optimized for viewing on screens **of all sizes**. I thoroughly tested it on a wide range of viewports to ensure that it looks great and functions flawlessly no matter what device you're using. It's worth noting that the website's minimum supported width is `280px`, which is compatible with devices such as the `Galaxy Fold 1`.

## Why angular ?

You may say that the website is simple enough to just use vanilla JavaScript, and yes, you are right, but like I already mentioned, this version is a `lite` version, the original one was supposed to have ton of features, like ordering online and having a realtime status of the latter, sharing thoughts and leaving reviews, a discount program, a mobile application...

Although it's true that the website could have been built using `vanilla JavaScript`, it's important to note that this version is a `'lite'` version of the original concept. The full version was intended to **include a multitude of features**, such as :

- Online ordering with real-time updates on order status
- Customer reviews and feedback,
- A loyalty program
- A dedicated mobile application.

# Lighthouse

<div align="center">

<img src="https://i.ibb.co/nR8wP0p/lighthouse.webp" width="60%" />

<br/><br/>

[![lighthouse](https://img.shields.io/badge/lighthouse-view%20report-blue?style=for-the-badge&logo=lighthouse)](https://googlechrome.github.io/lighthouse/viewer/?gist=4ebba9250e9b7e950151e9cf8c6232cb)

I just can't sleep if my website has a bad score 💯.

</div>

---

<div align="center">
<img width="50" src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png">

<br/><br/>

Checkout my article on `dev.to` explaining the steps & technique I used to optimize this website :

[<img width="500" src="https://i.ibb.co/C5QzXFM/99.webp">](https://dev.to/brihoum/how-i-optimized-my-angular-website-3fd0)

</div>

---

# Quick start

Clone this repo into new project folder (e.g., megapizza).

```
git clone https://github.com/aBrihoum/megapizza_website megapizza
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
