import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
    const title = "Ignus 2024 | IIT Jodhpur's Premier Cultural Festival";
    const description = "Experience Ignus 2024, IIT Jodhpur's flagship cultural extravaganza! Join us for three days of spectacular performances, competitions, workshops, and cultural celebrations. Featuring star-studded concerts, dance competitions, theatrical performances, art exhibitions, literary events, and much more. Don't miss India's most awaited college cultural festival that brings together talented students from across the nation. Register now to be part of this grand celebration of art, culture, and creativity!";
    const keywords = "Ignus 2024, IIT Jodhpur, cultural festival, college fest, cultural events, dance competition, music festival, art exhibition, theatre fest, literary events, workshops, student festival, Rajasthan events, cultural celebration, talent showcase, college cultural fest, performing arts, creative competitions";
    
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/CSCamel.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={window.location.href} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="/CSCamel.png" />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="1 days" />
            <meta name="author" content="IIT Jodhpur" />

            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    );
};

export default SEO;