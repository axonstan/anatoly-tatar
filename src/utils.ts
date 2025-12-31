import Translate, { translate } from '@docusaurus/Translate';

export const t = ({ id, message, description }: { id: string, message?: string, description?: string; }) => {
    return translate({ id, message: `(default) ${message}`, description });
};