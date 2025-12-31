import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import { t } from '@site/src/utils';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  siteConfig.title = t({
    id: 'global.title',
    message: siteConfig.title,
  });
  siteConfig.tagline = t({
    id: 'global.tagline',
    message: siteConfig.tagline,
  });
  siteConfig.customFields.description = t({
    id: 'global.description',
    message: siteConfig.customFields.description as string,
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
