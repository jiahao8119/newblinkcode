import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "BlinkCode | Modern Web Solutions",
  description = "BlinkCode offers modern web development, design, and digital solutions for your business. Contact us for custom websites, apps, and more.",
  keywords = "web development, react, digital agency, design, SEO, portfolio, services, blinkcode",
  image = "/images/blinkcode.jpg",
  url = "",
  type = "website",
  schema = null // New prop for custom JSON-LD
}) => {
  const siteUrl = "https://www.blinkcodedev.com"; // Removed trailing slash for consistency
  const fullUrl = url ? `${siteUrl}${url.startsWith('/') ? url : `/${url}`}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "BlinkCode",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/images/blinkcode.jpg`,
      "width": 600,
      "height": 600
    },
    "description": "Premium Web Development & Digital Solutions Agency in Malaysia.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+60175730388",
      "contactType": "sales",
      "areaServed": "MY",
      "availableLanguage": ["en", "ms"]
    },
    "sameAs": [
      "https://www.facebook.com/blinkcodedev",
      "https://www.instagram.com/blinkcodedev"
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = url ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": url.replace('/', '').charAt(0).toUpperCase() + url.replace('/', '').slice(1),
        "item": fullUrl
      }
    ]
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BlinkCode Team" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="BlinkCode" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default SEO;