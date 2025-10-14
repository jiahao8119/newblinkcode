import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "BlinkCode | Modern Web Solutions",
  description = "BlinkCode offers modern web development, design, and digital solutions for your business. Contact us for custom websites, apps, and more.",
  keywords = "web development, react, digital agency, design, SEO, portfolio, services, blinkcode",
  image = "/images/blinkcode.jpg",
  url = "",
  type = "website"
}) => {
  const siteUrl = "https://yourdomain.com"; // Replace with your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

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
      <meta name="twitter:creator" content="@blinkcode" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BlinkCode",
          "url": siteUrl,
          "logo": `${siteUrl}/images/blinkcode.jpg`,
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+60113094116",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;