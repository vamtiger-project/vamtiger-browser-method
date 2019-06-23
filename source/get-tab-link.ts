import {
    IGetTabLink
} from './types';

export default function ({ href, text }: IGetTabLink) {
    const link = href && text && `<a href="${href}" target="_blank">${text}</a>` || '';

    return link;
}