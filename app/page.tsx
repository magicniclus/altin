'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Isolation Thermique Extérieure",
      subtitle: "ITE professionnelle",
      content: "Spécialiste de l'isolation thermique par l'extérieur (ITE) dans la région de Lyon. Amélioration de la performance énergétique avec des matériaux de qualité et une expertise reconnue.",
      image: "/card1.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Crépi et Enduit",
      subtitle: "Finitions de qualité",
      content: "Application de crépi et enduits pour vos façades avec un savoir-faire artisanal. Finitions durables et esthétiques adaptées à tous types de bâtiments.",
      image: "/contenu/enduit.jpeg",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Taloché",
      subtitle: "Technique traditionnelle",
      content: "Maîtrise de la technique du taloché pour des finitions murales authentiques et durables. Expertise artisanale pour tous vos projets de façade.",
      image: "/card2.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997"
    },
    {
      title: "Ravalement de Façade",
      subtitle: "Rénovation complète",
      content: "Rénovation et embellissement de vos façades dans la région de Lyon. Techniques professionnelles pour redonner vie à vos murs extérieurs.",
      image: "/contenu/ravelemement.jpeg",
      gradientFrom: "#8B4513",
      gradientTo: "#D2691E"
    },
    {
      title: "Votre Projet",
      subtitle: "Demandez votre devis",
      content: "Vous avez un projet d'ITE, crépi, taloché ou ravalement ? Contactez Svarqa pour un devis personnalisé et gratuit adapté à vos besoins.",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      isCallToAction: true
    }
  ];



  const contactInfo = {
    address: "Lyon et région Rhône-Alpes\nRayon d'intervention : 100 km",
    phone: "07 63 74 08 54",
    email: "altinsvarqa@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Lyon,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet d'isolation thermique et façade dans la région de Lyon"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
