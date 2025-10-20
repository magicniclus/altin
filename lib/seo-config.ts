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
  title: "ERTF - Isolation Thermique & Façade en Gironde | ITE ITI Ravalement",
  description: "ERTF, entreprise spécialisée dans l'isolation thermique par l'extérieur (ITE), l'isolation intérieure (ITI), les travaux d'enduit, le ravalement de façade et le bardage en Gironde. Devis gratuit.",
  keywords: [
    "isolation thermique extérieure Gironde",
    "ITE Bordeaux",
    "isolation intérieure ITI",
    "ravalement façade Le Bouscat",
    "enduit façade Gironde",
    "bardage Bordeaux",
    "rénovation énergétique",
    "isolation thermique",
    "façade",
    "devis gratuit",
    "ERTF",
    "travaux isolation",
    "garantie décennale",
    "entreprise isolation Gironde"
  ],
  author: "ERTF",
  siteUrl: "https://ertf-habitat.fr",
  siteName: "ERTF - Isolation & Façade",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@ertf"
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
  "name": "ERTF",
  "legalName": "ERTF EURL",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Abdelkrim HAMDI"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "81 Boulevard Pierre 1er",
    "postalCode": "33110",
    "addressLocality": "Le Bouscat",
    "addressRegion": "Gironde",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33783938694",
    "contactType": "customer service",
    "email": "ertftravaux@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Gironde"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Bordeaux"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Le Bouscat"
    }
  ],
  "serviceType": [
    "Isolation thermique par l'extérieur",
    "Isolation thermique par l'intérieur", 
    "Ravalement de façade",
    "Enduit de façade",
    "Bardage"
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
          "name": "Isolation thermique par l'intérieur (ITI)",
          "description": "Solutions d'isolation intérieure pour confort optimal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Ravalement de façade",
          "description": "Rénovation et embellissement des façades, enduits, bardage"
        }
      }
    ]
  }
}
