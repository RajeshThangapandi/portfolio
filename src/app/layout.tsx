import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rajesht-portfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: "#050609",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title} | Next.js, Node.js, Python & AI`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.shortBio,
  keywords: [
    "Rajesh T",
    "Full Stack Software Engineer",
    "Product Engineer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Engineer",
    "Python AI Developer",
    "OpenAI API",
    "RAG Engineer",
    "Bengaluru Software Engineer",
    "Chennai Software Engineer",
    "Full Stack Developer Portfolio",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: siteUrl }],
  creator: PERSONAL_INFO.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${PERSONAL_INFO.name} — Full Stack Software Engineer & AI Product Builder`,
    description: PERSONAL_INFO.shortBio,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: `${PERSONAL_INFO.name} — Full Stack Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — Full Stack Software Engineer`,
    description: PERSONAL_INFO.shortBio,
    images: ["/profile.jpg"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Chandigarh University",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "OpenAI API",
      "Retrieval-Augmented Generation",
      "AWS",
      "Docker",
    ],
    sameAs: [PERSONAL_INFO.socials.github, PERSONAL_INFO.socials.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="font-sans bg-obsidian-950 text-slate-100 antialiased selection:bg-sky-500/25 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-sky-400 focus:text-slate-950 focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
