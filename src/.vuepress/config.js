module.exports = {
  title: "LoudWalk - Kkrmr Blog",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    //    directories: [
    //      {
    //        id: "blog",
    //        dirname: "_blog",
    //        title: "Blog",
    //        path: "/_blog/",
    //        itemPermalink: "/_blog/:year/:month/:day/:slug",
    //      },
    //    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/Kkrmr/loudwalk",
        },
      ],
    },
    summary: true,
    serviceWorker: true,
    updatePopup: true,
    smoothScroll: true,
  },
  base: "/loudwalk/",
  dest: "docs",
};
