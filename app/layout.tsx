import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERTF - Isolation Thermique & Façade en Gironde | ITE ITI Ravalement",
  description: "ERTF, entreprise spécialisée dans l'isolation thermique par l'extérieur (ITE), l'isolation intérieure (ITI), les travaux d'enduit, le ravalement de façade et le bardage en Gironde. Devis gratuit.",
  keywords: "isolation thermique extérieure Gironde, ITE Bordeaux, isolation intérieure ITI, ravalement façade Le Bouscat, enduit façade Gironde, bardage Bordeaux, rénovation énergétique, isolation thermique, façade, devis gratuit, ERTF, travaux isolation, garantie décennale, entreprise isolation Gironde",
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ertf-habitat.fr"),
  alternates: {
    canonical: "https://ertf-habitat.fr",
  },
  openGraph: {
    title: "ERTF - Isolation Thermique & Façade en Gironde | ITE ITI Ravalement",
    description: "ERTF, entreprise spécialisée dans l'isolation thermique par l'extérieur (ITE), l'isolation intérieure (ITI), les travaux d'enduit, le ravalement de façade et le bardage en Gironde.",
    url: "https://ertf-habitat.fr",
    siteName: "ERTF - Isolation & Façade",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ERTF - Isolation Thermique & Façade en Gironde",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERTF - Isolation Thermique & Façade en Gironde",
    description: "Entreprise spécialisée en isolation thermique ITE/ITI et ravalement de façade en Gironde. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - New */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17654607222" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17654607222');
          `}
        </Script>

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
