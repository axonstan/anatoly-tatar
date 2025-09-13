import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Anatoly Soldatov',
  tagline: 'ML Engineer',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://anatoly.tatar',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/anatoly-tatar/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PodYapolskiy', // Usually your GitHub org/user name.
  projectName: 'anatoly-tatar', // Usually your repo name.
  // deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // preload custom font
  // headTags: [
  //   {
  //     tagName: 'link',
  //     attributes: {
  //       rel: 'preload',
  //       href: '/fonts/MyCustomFont.ttf',
  //       as: 'font',
  //       type: 'font/ttf', // Specify the correct font type
  //       crossorigin: 'anonymous', // Important for preloading fonts
  //     },
  //   },
  // ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    path: 'i18n',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        path: 'en',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        path: 'ru',
      },
    },
  },
  // customFields: {
  //   i18n: {
  //     showDefaultLocaleInUrl: true,
  //   }
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Anatoly Soldatov",
      hideOnScroll: true,
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          to: '/about',
          label: 'about',
          position: 'left',
        },
        {
          to: '/cv',
          label: 'cv',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'knowledge',
        },
        {
          to: '/contacts',
          label: 'contacts',
          position: 'left',
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   // label: 'GitHub',
        //   position: 'right',
        //   className: 'header-tg-link',
        //   'aria-label': 'Telegram',
        // },
        {
          href: 'https://github.com/PodYapolskiy',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          label: ' ',
          className: 'language-icon-dropdown',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    // footer: {
    //   style: 'light',
    //   links: [
    //     {
    //       title: 'Pages',
    //       items: [
    //         {
    //           label: 'Home',
    //           to: '/',
    //         },
    //         {
    //           label: 'About',
    //           to: '/about',
    //         },
    //         // {
    //         //   label: 'Projects',
    //         //   to: '/projects',
    //         // },
    //         {
    //           label: 'CV',
    //           to: '/cv',
    //         },
    //         // {
    //         //   label: 'Knowledge',
    //         //   to: '/docs',
    //         // },
    //         // {
    //         //   label: 'Contacts',
    //         //   to: '/contacts',
    //         // },
    //       ],
    //     },
    //     {
    //       items: [
    //         {
    //           label: 'About',
    //           to: '/about',
    //         }
    //       ]
    //     },
    //     {
    //       items: [
    //         {
    //           label: 'CV',
    //           to: '/cv',
    //         }
    //       ]
    //     },
    //     // {
    //     //   title: '...',
    //     //   items: [
    //     //     {
    //     //       label: 'Stack Overflow',
    //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'Discord',
    //     //       href: 'https://discordapp.com/invite/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'X',
    //     //       href: 'https://x.com/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //     {
    //       title: 'Contacts',
    //       items: [
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //         {
    //           label: 'Telegram',
    //           href: '...',
    //         },
    //         {
    //           label: 'VK',
    //           href: '...',
    //         },
    //         {
    //           label: 'Gmail',
    //           href: '...',
    //         },
    //         {
    //           label: 'LinkedIn',
    //           href: '...',
    //         },
    //         {
    //           label: 'LeetCode',
    //           href: '...',
    //         },
    //       ],
    //     },
    //     {

    //     }
    //   ],
    //   copyright: ' '
    //   // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
