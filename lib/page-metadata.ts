import { Metadata } from 'next';
import { generateMetadata } from './seo-config';

// Métadonnées pour la page d'accueil
export const homeMetadata: Metadata = generateMetadata(
  "ERTF - Isolation Thermique & Façade en Gironde | ITE ITI Ravalement",
  "ERTF, entreprise spécialisée dans l'isolation thermique par l'extérieur (ITE), l'isolation intérieure (ITI), les travaux d'enduit, le ravalement de façade et le bardage en Gironde. Devis gratuit.",
  "/og-image.jpg",
  "/"
);

// Métadonnées pour la section services
export const servicesMetadata = {
  title: "Services d'Isolation Thermique et Façade | ERTF Gironde",
  description: "Découvrez nos services : isolation thermique extérieure (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage. Devis gratuit en Gironde.",
  keywords: [
    "services isolation thermique",
    "ITE professionnel", 
    "ITI sur mesure",
    "ravalement façade",
    "enduit extérieur",
    "bardage moderne"
  ]
};

// Métadonnées pour la section réalisations
export const realisationsMetadata = {
  title: "Nos Réalisations en Isolation et Façade | ERTF",
  description: "Découvrez nos dernières réalisations en isolation thermique et façade en Gironde. Projets résidentiels et commerciaux de qualité avec garantie décennale.",
  keywords: [
    "réalisations isolation",
    "projets façade",
    "chantiers Gironde",
    "travaux ITE ITI",
    "portfolio isolation"
  ]
};

// Métadonnées pour la section contact
export const contactMetadata = {
  title: "Contact et Devis Gratuit | ERTF Isolation Façade",
  description: "Contactez ERTF pour un devis gratuit d'isolation thermique et façade. Intervention en Gironde et Bordeaux. Réponse rapide garantie.",
  keywords: [
    "devis gratuit isolation",
    "contact entreprise façade",
    "Gironde Bordeaux",
    "Le Bouscat",
    "isolation thermique"
  ]
};

// Fonction pour générer des métadonnées de section
export function generateSectionMetadata(
  section: 'services' | 'realisations' | 'contact',
  baseUrl: string = ''
): Metadata {
  const sectionData = {
    services: servicesMetadata,
    realisations: realisationsMetadata,
    contact: contactMetadata
  }[section];

  return generateMetadata(
    sectionData.title,
    sectionData.description,
    `/og-image.jpg`,
    `${baseUrl}#${section}`
  );
}
