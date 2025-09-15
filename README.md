# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

Inspiration:

- [Akara](https://messiahhh.github.io/blog/) - home page
- [ionic](https://ionicframework.com/docs) - hidden dropdown sign to language change
- [kuizuo](https://kuizuo.cn/) - hidden blog post left sidebar / blog appearance / friends
- [takken](https://takken.io/) - blog post / tools / gists
- [tinaeldevresse](https://tinaeldevresse.eu/) - simplicity / contacts in the footer
- [tsei](https://tsei.jp/) - 3d scene in homepage
- [aleksagordic](https://www.aleksagordic.com/blog/vllm) - geist mono font
- [jest](https://jestjs.io/)
- [vishalgandhi](https://vishalgandhi.in/)


Домен

- https://docs.github.com/ru/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain
- https://docusaurus.io/docs/deployment#deploying-to-github-pages