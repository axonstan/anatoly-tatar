import type { ReactNode } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomePage from '@site/src/components/Homepage';

import Heading from '@theme/Heading';

import styles from './index.module.css';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             <Translate id="homepage.tutorialButton">Docusaurus Tutorial - 5min ⏱️</Translate>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  siteConfig.title = translate({
    id: 'global.title',
    message: siteConfig.title,
    description: 'The website title',
  });
  siteConfig.tagline = translate({
    id: 'global.tagline',
    message: siteConfig.tagline,
    description: 'The website tagline',
  });
  siteConfig.customFields.description = translate({
    id: 'global.description',
    message: siteConfig.customFields.description as string,
    description: 'The website description',
  });

  const lines = [
    translate({
      id: 'homepage.description.descriptionLine_1',
      message: 'Developer, teacher, dreamer & tech lover.',
      description: 'The first line of description',
    }),
    translate({
      id: 'homepage.description.descriptionLine_2',
      message: 'I maintain a blog about things I learn or I want to share.',
      description: 'The second line of description',
    }),
    translate({
      id: 'homepage.description.descriptionLine_3',
      message: 'I love participating at dev events',
      description: 'The third line of description',
    }),
    translate({
      id: 'homepage.description.descriptionLine_4',
      message: 'and I am also an open-source enthusiast.',
      description: 'The fourth line of description',
    }),
  ];


  return (
    <Layout
      // title={translate({ id: 'homepage.title', message: `Hello from ${siteConfig.title}` })}
      // description={translate({ id: 'homepage.description', message: 'Description will go into a meta tag in <head />' })}
      title={siteConfig.title}
      description={siteConfig.customFields.description as string}
    >
      {/* <HomepageHeader /> */}
      <main className={styles.heroContainer}>
        <HomePage {...siteConfig} descriptionLines={lines} />
      </main>
    </Layout>
  );
}
