declare const _default: {
    '@context': string;
    '@type': string;
    'name': string;
    'description': string;
    'datePublished': string;
    'about': {
        '@context': string;
        '@type': string;
        'name': string;
        'description': string;
    };
    'image': string;
    'producer': ({
        '@context': string;
        '@type': string;
        'name': string;
        'description': string;
        'url': string;
        'email': string;
        'disambiguatingDescription'?: undefined;
        'jobTitle'?: undefined;
        'image'?: undefined;
    } | {
        '@context': string;
        '@type': string;
        'name': string;
        'description': string;
        'disambiguatingDescription': string;
        'jobTitle': string;
        'image': string;
        'url'?: undefined;
        'email'?: undefined;
    })[];
    'creator': ({
        '@context': string;
        '@type': string;
        'name': string;
        'description': string;
        'url': string;
        'email': string;
        'disambiguatingDescription'?: undefined;
        'jobTitle'?: undefined;
        'image'?: undefined;
    } | {
        '@context': string;
        '@type': string;
        'name': string;
        'description': string;
        'disambiguatingDescription': string;
        'jobTitle': string;
        'image': string;
        'url'?: undefined;
        'email'?: undefined;
    })[];
    'funder': {
        '@context': string;
        '@type': string;
        'name': string;
        'description': string;
        'url': string;
    }[];
    'keywords': string;
};
export default _default;
