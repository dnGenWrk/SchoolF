module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        plugins: () => [autoprefixer], // Options
      },
    ],
  ],
};
