// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'K2Lin Docs',
  tagline: 'K2Lin Teams的官方文档呀',
  url: 'https://docs.k2lin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'K2Lin Docs',
        logo: {
          alt: 'K2Docs Logo',
          src: 'img/KTT-Icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documents',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://k2lin.com/',
            label: 'Main',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'OurCraft Network',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'K2Lin Projects',
            items: [
              {
                label: 'K2Lin Tech Tips',
                href: 'https://k2lin.com',
              },
              {
                label: 'Cloud Music',
                href: 'https://music.k2lin.com',
              },
              {
                label: 'K2Chat',
                href: 'https://chat.k2lin.com',
              },
              {
                label: 'OurCraft Network',
                href: 'https://ourcraft.cyou',
              },
            ],
          },
          {
            title: '开放的社区',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Discord',
                href: 'https://k2l.in/dc',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/K2Lin-Daniel',
              },
            ],
          },
        ],
        copyright: `K2Lin Tech Tips co.ltd ${new Date().getFullYear()} | All rights reserved. | Powered by Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
