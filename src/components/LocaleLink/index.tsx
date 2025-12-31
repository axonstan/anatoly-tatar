import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LocaleLink({ targetLocale, children }) {
    const { pathname } = useLocation();
    const { i18n: { defaultLocale } } = useDocusaurusContext();

    let localizedPath: string;

    if (targetLocale === defaultLocale) {
        // Remove locale prefix for default locale
        // Example: /en/knowledge/intro -> /knowledge/intro
        const currentLocaleMatch = pathname.match(/^\/([^\/]+)(\/.*)?$/);
        if (currentLocaleMatch && currentLocaleMatch[1] !== 'knowledge' && currentLocaleMatch[1] !== 'cv') {
            // Currently on a localized path, remove the locale prefix
            localizedPath = currentLocaleMatch[2] || '/';
        } else {
            // Already on default locale path
            localizedPath = pathname;
        }
    } else {
        // Add or replace locale prefix for non-default locale
        // Example: /knowledge/intro -> /en/knowledge/intro
        // or /ru/knowledge/intro -> /en/knowledge/intro
        const currentLocaleMatch = pathname.match(/^\/([^\/]+)/);
        const isCurrentlyLocalized = currentLocaleMatch && currentLocaleMatch[1] !== 'knowledge' && currentLocaleMatch[1] !== 'cv';

        if (isCurrentlyLocalized) {
            // Replace existing locale prefix
            localizedPath = pathname.replace(/^\/[^\/]+/, `/${targetLocale}`);
        } else {
            // Add locale prefix to non-localized path
            localizedPath = `/${targetLocale}${pathname}`;
        }
    }

    return <a href={localizedPath}>{children}</a>;
}