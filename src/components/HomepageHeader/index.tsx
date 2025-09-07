import clsx from 'clsx';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';

import logo from "@site/static/img/me.jpg";
import styles from './styles.module.css';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const aboutTitle = translate({
    id: 'about.title',
    message: 'About',
    description: 'Page with information on me.',
  });

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src={logo} style={{ width: 280, borderRadius: '50%', }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/about">
            {aboutTitle} →
          </Link>
        </div>
      </div>
    </header>
  );
}