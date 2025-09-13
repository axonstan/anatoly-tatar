import React from 'react';
import type { ReactNode } from 'react';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaLinkedin, FaVk } from 'react-icons/fa';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Contacts(): ReactNode {
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
      title={translate({
        id: 'contacts.title',
        message: "Contacts",
      })}
      description={siteConfig.customFields.description as string}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '90vh',
          justifyContent: 'center',
        }}
      >
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, padding: "2rem" }}>{translate({ id: "contacts.description", message: "Here you can contact me" })}</h1>
        </div>
        <hr style={{ width: '80%', margin: '0 auto' }} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: "2rem" }}>
            <a href="https://github.com/PodYapolskiy" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
            <a href="https://t.me/podyapolskiyaa" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={40} />
            </a>
            <a href="mailto:podyapolskiyaa@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={40} />
            </a>
            <a href="https://www.linkedin.com/in/podyapolsky" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href="https://vk.com/podyapolskiyaa" target="_blank" rel="noopener noreferrer">
              <FaVk size={40} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
