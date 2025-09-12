
import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => setIsMobile(window.innerWidth <= 768), []);
  return isMobile;
}

const CVPage = () => {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const pdfSrc = `cv/cv_${locale}.pdf`;

  const isMobile = useIsMobile();
  const height = isMobile ? "600px" : "1200px";

  return (
    <Layout title="CV">
      <div style={{ textAlign: 'center', }}>
        {/* marginTop: '2rem' */}
        {/* <h1>CV</h1> */}
        <iframe
          src={pdfSrc}
          width="100%"
          height={height}
          title="CV"
          style={{ border: 'none' }}
        />
        <p>
          <a href={pdfSrc} download>
            {translate({ message: 'Download PDF', id: 'cv.download' })}
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default CVPage;
