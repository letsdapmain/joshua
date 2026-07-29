import type { Metadata, Viewport } from "next";
import "./globals.css";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

function normalizeSiteUrl(value: string) {
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
}

const siteUrl = normalizeSiteUrl(rawSiteUrl);
const ogImageUrl = new URL("/og.png?v=20260729", siteUrl).toString();
const profileImageUrl = new URL("/joshua-hero.jpg", siteUrl).toString();
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
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Joshua Nwankwo Portfolio",
    type: "profile",
    images: [
      {
        url: ogImageUrl,
        width: 1731,
        height: 909,
        alt: "Joshua Nwankwo portfolio social preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@judicodes",
    images: [
      {
        url: ogImageUrl,
        alt: "Joshua Nwankwo portfolio social preview",
      },
    ],
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
  image: profileImageUrl,
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
