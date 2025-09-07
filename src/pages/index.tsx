import type { ReactNode } from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.customFields.description as string}
    >
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
