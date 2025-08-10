
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const CVPage = () => {
    const { i18n } = useDocusaurusContext();
    const locale = i18n.currentLocale;
    const pdfSrc = `/cv/cv_${locale}.pdf`;

    return (
        <Layout title="CV">
            <div style={{ textAlign: 'center',  }}> 
                {/* marginTop: '2rem' */}
                {/* <h1>CV</h1> */}
                <iframe
                    src={pdfSrc}
                    width="100%"
                    height="1200px"
                    title="CV"
                    style={{ border: 'none' }}
                />
                <p>
                    <a href={pdfSrc} download>
                        Download PDF
                    </a>
                </p>
            </div>
        </Layout>
    );
};

export default CVPage;
