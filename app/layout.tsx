import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";
const title = "Joshua Nwankwo | Product Engineer and Developer Relations Engineer";
const description =
  "Portfolio for Joshua Nwankwo, an AI-fluent product engineer, developer-relations practitioner, and founder working across product engineering, developer experience, and adoption.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Joshua Nwankwo Portfolio",
  authors: [{ name: "Joshua Nwankwo", url: siteUrl }],
  creator: "Joshua Nwankwo",
  keywords: [
    "Joshua Nwankwo",
    "Product Engineer",
    "Frontend Engineer",
    "Developer Relations Engineer",
    "Developer Advocate",
    "Founder",
    "DevRel",
    "AI tools",
    "AI-assisted development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Joshua Nwankwo Portfolio",
    type: "profile",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Joshua Nwankwo portfolio social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@judicodes",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#fbfaf5",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joshua Nwankwo",
  url: siteUrl,
  image: `${siteUrl}/joshua-hero.jpg`,
  jobTitle: ["Product Engineer", "Frontend Engineer", "Developer Relations Engineer", "Founder"],
  email: "mailto:u.joshuanwankwo@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/joshuanwankwo/",
    "https://github.com/joshuanwankwo",
    "https://x.com/judicodes",
    "https://sessionize.com/judicodes/",
  ],
  knowsAbout: [
    "Product engineering",
    "Developer relations",
    "Developer experience",
    "Frontend architecture",
    "AI-assisted development",
    "Technical writing",
    "Community education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
