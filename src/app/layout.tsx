import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { personal } from "@/data/resume";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://sakshigupta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s — ${personal.name}`,
  },
  description: personal.summary,
  keywords: [
    "Sakshi Gupta",
    "Electronics and Communication Engineer",
    "Networking Engineer",
    "Industrial Automation",
    "PLC SCADA Engineer",
    "Embedded Systems Developer",
    "Cybersecurity Intern",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — ${personal.title}`,
    description: personal.summary,
    siteName: `${personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.summary,
  },
  robots: { index: true, follow: true },
};

// Inline, render-blocking script to avoid flash of incorrect theme.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('sg-portfolio-theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary selection:text-white`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
