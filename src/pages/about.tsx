import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './about.module.css';
// import {BlogSidebar} from '@theme/BlogSidebar';


export default function About(): ReactNode {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener('resize', handleResize);
    // Initial check in case of SSR or resize before mount
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const sidebar = [
    { title: "Introduction", link: "#introduction", depth: 1 },
    // Work Experience
    { title: "Work Experience", link: "#work-experience", depth: 1 },
    { title: "MTS Web Services", link: "#mts-web-services", depth: 2 },
    { title: "AIRI", link: "#airi", depth: 2 },
    { title: "Along", link: "#along", depth: 2 },
    // Pet Projects
    // { title: "Pet Projects", link: "#pet-projects", depth: 1 },
    // { title: "CV Project", link: "#cv-project", depth: 2 },
    // Studies
    { title: "Studies", link: "#studies", depth: 1 },
    { title: "Innopolis University", link: "#innopolis-university", depth: 2 },
    { title: "School", link: "#school", depth: 2 },
  ];

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.customFields.description as string}
    >
      {/* style={{ display: 'flex' }} */}
      <div className='container margin-vert--lg'>
        <div className='row'>
          {!isMobile ? (
            <div
              className='col col--3'
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'sticky',
                top: '0',
                alignSelf: 'flex-start',
                height: '0vh',
                overflowY: 'visible',
                // marginTop: '2em',
              }}
            >
              {
                sidebar.map((item, index) => (
                  item.title && item.link ? (
                    <div key={index} style={{ marginTop: '1em', marginLeft: (item.depth - 1) * 40 }}>
                      - <a href={item.link} className={styles.aboutSidebarLink}>{item.title}</a>
                    </div>
                  ) : null
                ))
              }
            </div>
          ) : null}
          <div className='col col--7' >
            <main>
              <h1>Anatoly Soldatov</h1>
              <h4>ML Engineer</h4>
              <section style={{ marginTop: '3em' }}>
                <h2 id="introduction">Introduction</h2>
                <p>
                  I'm Anatoly, ML Engineer, Innopolis University bachelor student. I'm eager to learn about programming, machine learning, foreign languages, etc.
                </p>
              </section>

              <section style={{ marginTop: '3em' }}>
                <h2 id="work-experience">Work Experience</h2>
                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 id='mts-web-services'>MTS Web Services</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>06.2025 - to present</p>
                  </div>
                  <h4 className={styles.aboutRoleText}>ML Engineer</h4>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    {/* <li>Designed and developed a personal portfolio website using Next.js and Tailwind CSS.</li>
                    <li>Implemented a blog section with Markdown support for easy content management.</li>
                    <li>Deployed the website on Vercel for seamless hosting and continuous integration.</li> */}
                  </ul>
                </section>

                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 id='airi'>AIRI</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>03.2025 - 06.2025</p>
                  </div>
                  <h4 className={styles.aboutRoleText}>ML Practitioner</h4>
                  <ul>
                    <li>Занял #airi-number[7]/11 и #airi-number[5]/9 места на personality и performance треках соревнования #link("https://avichallenge.github.io/challenge.html",[#term[AVI Challenge 2025]])</li>
                    <li>[Прогнал более #airi-number[100] сравнительных экспериментов сочетания модальностей и архитектур моделей, отслеживая обучение и метрики через #term[MLflow]</li>
                    {/* <li>Designed and developed a personal portfolio website using Next.js and Tailwind CSS.</li>
                    <li>Implemented a blog section with Markdown support for easy content management.</li>
                    <li>Deployed the website on Vercel for seamless hosting and continuous integration.</li> */}
                  </ul>
                </section>

                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 id='along'>Along</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>01.2025 - 03.2025</p>
                  </div>
                  <h4 className={styles.aboutRoleText}>Prompt Engineer</h4>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    {/* <li>Designed and developed a personal portfolio website using Next.js and Tailwind CSS.</li>
                    <li>Implemented a blog section with Markdown support for easy content management.</li>
                    <li>Deployed the website on Vercel for seamless hosting and continuous integration.</li> */}
                  </ul>
                </section>
              </section>

              {/* <section style={{ marginTop: '3em' }}>
                <h2 id="pet-projects">Pet Projects</h2>
                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 id='cv-project'>CV Project</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>09.2024 - 12.2024</p>
                  </div>
                  <h4 className={styles.aboutRoleText}>ML Engineer</h4>
                  <ul>
                    <li>Designed and developed a personal portfolio website using Next.js and Tailwind CSS.</li>
                    <li>Implemented a blog section with Markdown support for easy content management.</li>
                    <li>Deployed the website on Vercel for seamless hosting and continuous integration.</li>
                  </ul>
                </section>

                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3>CV Project</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>09.2024 - 12.2024</p>
                  </div>
                  <h4>ML Engineer</h4>
                  <ul>
                    <li>Designed and developed a personal portfolio website using Next.js and Tailwind CSS.</li>
                    <li>Implemented a blog section with Markdown support for easy content management.</li>
                    <li>Deployed the website on Vercel for seamless hosting and continuous integration.</li>
                  </ul>
                </section>
              </section> */}

              <section style={{ marginTop: '3em' }}>
                <h2 id="studies">Studies</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                  <h3 id="innopolis-university">Innopolis University</h3>
                  <p style={{ fontStyle: 'italic', margin: 0 }}>2022 - 2026</p>
                </div>
                <p>Applied Artificial Intelligence Bachelor</p>
                {/* <ul>
                  <li>Obtained a Bachelor's degree in Computer Science.</li>
                  <li>Completed coursework in Data Structures, Algorithms, and Web Development.</li>
                  <li>Participated in hackathons and coding competitions, achieving top placements.</li>
                </ul> */}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                  <h3 id="school">School</h3>
                  <p style={{ fontStyle: 'italic', margin: 0 }}>2011 - 2022</p>
                </div>
                <p>Moscow №1288</p>
              </section>

            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
