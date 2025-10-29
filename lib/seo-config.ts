import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "Svarqa - Spécialiste ITE, Crépi, Taloché & Ravalement Lyon | Isolation Thermique",
  description: "Svarqa, entreprise spécialisée dans l'isolation thermique par l'extérieur (ITE), les travaux de crépi, taloché et ravalement de façade dans la région de Lyon. Devis gratuit.",
  keywords: [
    "isolation thermique extérieure Lyon",
    "ITE Lyon",
    "crépi façade Lyon",
    "taloché Lyon",
    "ravalement façade Lyon",
    "enduit façade Rhône",
    "rénovation énergétique Lyon",
    "isolation thermique",
    "façade",
    "devis gratuit",
    "Svarqa",
    "travaux isolation Lyon",
    "garantie décennale",
    "entreprise isolation Lyon",
    "Altin Svarqa"
  ],
  author: "Svarqa",
  siteUrl: "https://svarqa.fr",
  siteName: "Svarqa - ITE & Ravalement Lyon",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@svarqa"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "Svarqa",
  "legalName": "Svarqa EURL",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Altin Svarqa"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "addressRegion": "Rhône-Alpes",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33763740854",
    "contactType": "customer service",
    "email": "altinsvarqa@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Rhône"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Lyon"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Rhône-Alpes"
    }
  ],
  "serviceType": [
    "Isolation thermique par l'extérieur",
    "Crépi de façade", 
    "Taloché",
    "Ravalement de façade",
    "Enduit de façade"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Insulation and Facade Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services d'isolation et façade",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Isolation thermique par l'extérieur (ITE)",
          "description": "Amélioration de la performance énergétique avec isolation extérieure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Crépi et enduit de façade",
          "description": "Application de crépi et enduits pour finitions de qualité"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Taloché",
          "description": "Technique traditionnelle de finition murale"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Ravalement de façade",
          "description": "Rénovation et embellissement des façades"
        }
      }
    ]
  }
}
