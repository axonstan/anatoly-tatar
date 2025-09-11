import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './about.module.css';

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
    { title: translate({ id: "about.introduction", message: "Introduction" }), link: "#introduction", depth: 1 },
    // Work Experience
    { title: translate({ id: "about.work-experience", message: "Work Experience" }), link: "#work-experience", depth: 1 },
    { title: translate({ id: "about.work-experience.mts-web-services", message: "MTS Web Services" }), link: "#mts-web-services", depth: 2 },
    { title: translate({ id: "about.work-experience.airi", message: "AIRI" }), link: "#airi", depth: 2 },
    { title: translate({ id: "about.work-experience.along", message: "Along" }), link: "#along", depth: 2 },
    // Pet Projects
    // { title: "Pet Projects", link: "#pet-projects", depth: 1 },
    // { title: "CV Project", link: "#cv-project", depth: 2 },
    // Studies
    { title: translate({ id: "about.studies", message: "Studies" }), link: "#studies", depth: 1 },
    { title: translate({ id: "about.studies.innopolis-university", message: "Innopolis University" }), link: "#innopolis-university", depth: 2 },
    { title: translate({ id: "about.studies.school", message: "School" }), link: "#school", depth: 2 },
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
              <h1>{translate({ id: "global.title", message: "Anatoly Soldatov" })}</h1>
              <h4>{translate({ id: "global.tagline", message: "ML Engineer" })}</h4>
              <section style={{ marginTop: '3em' }}>
                <h2 id="introduction">{translate({ id: "about.introduction", message: "Introduction" })}</h2>
                <p>
                  {translate({ id: "about.introduction.description", message: "I'm Anatoly, ML Engineer, Innopolis University bachelor student. I'm eager to learn about programming, machine learning, foreign languages, etc." })}
                </p>
              </section>

              <section style={{ marginTop: '3em' }}>
                <h2 id="work-experience">{translate({ id: "about.work-experience", message: "Work Experience" })}</h2>
                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 id='mts-web-services'>{translate({ id: "about.work-experience.mts-web-services", message: "MTS Web Services" })}</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>06.2025 - {translate({ id: "about.work-experience.to-present", message: "to present" })}</p>
                  </div>
                  <h4 className={styles.aboutRoleText}>{translate({ id: "about.work-experience.mts-web-services.role", message: "ML Engineer" })}</h4>
                  <ul>
                    <li>{translate({ id: "about.work-experience.mts-web-services.1", message: "Added the functionality of the RAG service on FastAPI, storing about 1000 processed corporate documents in Qdrant for vector search" })}</li>
                    <li>{translate({ id: "about.work-experience.mts-web-services.2", message: "I have set up monitoring of 25 metrics for vLLM and RAG service for tracking in the product through Prometheus and Grafana" })}</li>
                    <li>{translate({ id: "about.work-experience.mts-web-services.3", message: "I have configured the measurement of 4 LLM-as-a-Judge RAGAS metrics to evaluate the performance of the RAG pipeline and conduct further comparative experiments using Langfuse" })}</li>
                  </ul>
                </section>

                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 id='airi'>{translate({ id: "about.work-experience.airi", message: "AIRI" })}</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>03.2025 - 06.2025</p>
                  </div>
                  <h4 className={styles.aboutRoleText}>{translate({ id: "about.work-experience.airi.role", message: "ML Practitioner" })}</h4>
                  <ul>
                    <li>{translate({ id: "about.work-experience.airi.1", message: "I took 7th/11th and 5th/9th places on the personality and performance tracks of the AVI Challenge 2025 competition" })}</li>
                    <li>{translate({ id: "about.work-experience.airi.2", message: "I ran more than 100 comparative experiments combining modalities and model architectures, tracking training and metrics through MLflow" })}</li>
                  </ul>
                </section>

                <section>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                    <h3 id='along'>{translate({ id: "about.work-experience.along", message: "Along" })}</h3>
                    <p style={{ fontStyle: 'italic', margin: 0 }}>01.2025 - 03.2025</p>
                  </div>
                  <h4 className={styles.aboutRoleText}>{translate({ id: "about.work-experience.along.role", message: "Prompt Engineer" })}</h4>
                  <ul>
                    <li>{translate({ id: "about.work-experience.along.1", message: "Set up 3 pipelines with business logic in n8n" })}</li>
                    <li>{translate({ id: "about.work-experience.along.2", message: "Optimized the prompts of the OpenAI analyze image node for the taxonomy and tasks of the business domain, increasing the accuracy of recognition of classes and subclasses of the domain to 90%" })}</li>
                    <li>{translate({ id: "about.work-experience.along.3", message: "Improved the quality of the OpenAI edit image node, for stable generation of isolated objects with a transparent background, reducing the consumption of tokens by 2 times" })}</li>
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
                <h2 id="studies">{translate({ id: "about.studies", message: "Studies" })}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                  <h3 id="innopolis-university">{translate({ id: "about.studies.innopolis-university", message: "Innopolis University" })}</h3>
                  <p style={{ fontStyle: 'italic', margin: 0 }}>2022 - 2026</p>
                </div>
                <p>{translate({ id: "about.studies.innopolis-university.description", message: "Applied Artificial Intelligence Bachelor" })}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
                  <h3 id="school">{translate({ id: "about.studies.school", message: "School" })}</h3>
                  <p style={{ fontStyle: 'italic', margin: 0 }}>2011 - 2022</p>
                </div>
                <p>{translate({ id: "about.studies.school.description", message: "Moscow №1288" })}</p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
