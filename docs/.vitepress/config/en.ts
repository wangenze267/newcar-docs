import { defineConfig } from "vitepress";

export const enConfig = defineConfig({
  lang: "zh-CN",
  description: "The modern animation engine",
  themeConfig: {
    siteTitle: "Newcar Official Docs",
    outline: {
      label: "This page"
    },
    docFooter: {
      prev: "Previous",
      next: "Next"
    },
    nav: [
      {
        text: "Tutorials",
        link: "/getting-start"
      },
      {
        text: "Members",
        link: "/members"
      },
      {
        text: "Sponsor(CN)",
        link: "https://afdian.net/a/acboxsky"
      }
    ],
    sidebar: {
      "/": [
        {
          text: "Getting Start",
          link: "/getting-start"
        },
        {
          text: "Advanced",
          items: [
            {
              text: "Parent-child components",
              link: "/advanced/father-child-components"
            },
            {
              text: "Custom Object",
              link: "/advanced/custom-object"
            },
            {
              text: "Custom Animation",
              link: "/advanced/custom-animation"
            },
            {
              text: "Audio",
              link: "/advanced/audio"
            }
          ]
        }
      ]
    }
  }
});