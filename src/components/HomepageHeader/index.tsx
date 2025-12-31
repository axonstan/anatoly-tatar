import clsx from 'clsx';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from '@docusaurus/Link';

import logo from "@site/static/img/me.jpg";
import styles from './styles.module.css';

import { t } from '@site/src/utils';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const aboutTitle = t({
    id: 'about.title',
    message: 'About'
  });

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src={logo} style={{ width: 280, borderRadius: '50%', }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/about">
            {aboutTitle} →
          </Link>
        </div>
      </div>
    </header>
  );
}