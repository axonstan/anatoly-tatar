import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link style={{ color: "black" }} to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link} className={styles.featureHeadingLink}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const FeatureList: FeatureItem[] = [
    {
      title: translate({ id: 'cv.title', message: 'CV' }),
      Svg: require('@site/static/img/cv.svg').default,
      description: (
        <>
          {
            translate({
              id: 'home.feature.cv.description',
              message: 'Check out my experience and skills.',
            })
          }
        </>
      ),
      link: "/cv"
    },
    {
      title: translate({ id: 'knowledge.title', message: 'Knowledge' }),
      Svg: require('@site/static/img/graph.svg').default,
      description: (
        <>
          {
            translate({
              id: 'home.feature.knowledge.description',
              message: 'Read out my knowledge base!',
            })
          }
        </>
      ),
      link: "/docs"
    },
    {
      title: translate({ id: 'contacts.title', message: 'Contacts' }),
      Svg: require('@site/static/img/contacts.svg').default,
      description: (
        <>
          {
            translate({
              id: 'home.feature.contacts.description',
              message: 'Here you also can find me.',
            })
          }
        </>
      ),
      link: "/contacts"
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
