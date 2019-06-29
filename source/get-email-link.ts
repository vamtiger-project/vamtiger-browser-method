import {
    IGetEmailLink
} from './types';

export default function ({ href, text }: IGetEmailLink) {
    const link = href && text && `<a href="mailto:${href}">${text}</a>` || '';

    return link;
}