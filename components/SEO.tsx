import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: string;
    keywords?: string;
    noindex?: boolean;
    nofollow?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    image = "https://storage.googleapis.com/msgsndr/cG3cesDKIajoyQPNPYZK/media/6931d06981eaa182fc7d14ef.jpg", // Default OG Image
    type = 'website',
    keywords,
    noindex = false,
    nofollow = false
}) => {
    const siteUrl = 'https://summitridgebuilders.com'; // Replace with actual domain from env or constant if available
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const robotsParts = [];
    if (noindex) robotsParts.push('noindex');
    else robotsParts.push('index');

    if (nofollow) robotsParts.push('nofollow');
    else robotsParts.push('follow');

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />
            <meta name="robots" content={robotsParts.join(', ')} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={COMPANY_INFO.name} />
            <meta name="publisher" content={COMPANY_INFO.name} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={COMPANY_INFO.name} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
};
