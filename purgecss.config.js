module.exports = {
  content: ["./dist/**/index.html", "./dist/**/*.js"],
  css: ["./dist/**/pre_styles.css"],
  output: "./dist/app/pre_styles.css",
  safelist: [/^swiper/],
};
