// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Version Controls",
  tagline:
    "Everything about version controls, its reference links & technical documentations",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://pravn27.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/version-control-tech-doc/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pravn27", // Usually your GitHub org/user name.
  projectName: "version-control-tech-doc", // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/pravn27/version-control-tech-doc/tree/master",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/pravn27/version-control-tech-doc/tree/master",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Version Controls",
        logo: {
          alt: "My Site Logo",
          src: "/img/logo.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "sidebarDocsId",
          //   position: "left",
          //   label: "About VS System",
          // },
          {
            to: "/docs/intro",
            label: "About VS System",
            position: "left",
          },
          {
            to: "/docs/category/github",
            label: "Github",
            position: "left",
          },
          {
            href: "https://github.com/pravn27",
            position: "right",
            className: "header--github-link",
            "aria-label": "GitHub repository",
            title: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/praveen-s-157b365a/",
            position: "right",
            className: "header--linkedin-link",
            "aria-label": "LinkedIn profile",
            title: "LinkedIn",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Github",
            items: [
              {
                label: "Github",
                to: "/docs/category/github",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/pravn27",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/praveen-s-157b365a/",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/pravn27",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/praveen-s-157b365a/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Version Control Github tech docs. Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
