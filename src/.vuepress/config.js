module.exports = {
  title: "LoudWalk - Kkrmr Blog",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/Kkrmr/loudwalk",
        },
      ],
    },
    summary: true,
    smoothScroll: true,
    pwa: true,
  },
  base: "/loudwalk/",
  dest: "docs",
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-120129436-2",
      },
    ],
  ],
};
