import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shreyash Dhande | Shreyash Dhande's Portfolio",
  description: "I'm Shreyash Dhande , a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
  keywords: "shreyash, shreyash dhande, shreyash juet, portfolio, HTML, CSS, portfolio , Shreyash Dhande , Shreyash Dhande  portfolio, Shreyash portfolio,Shreyash Dhande  portfolio, shreyasfr website, web developer, MERN projects, web applications",
  author: "Shreyash Dhande",
  canonical: "https://www.shreyashdhande.me",
  openGraph: {
    title: "Shreyash Dhande | Shreyash Dhande's Portfolio",
    description: "I'm Shreyash Dhande  by work and Shreyash Dhande  in real life. I am a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
    url: "https://www.ShreyashDhande.me",
    type: "website",
    images: [
      {
        url: "http://www.manishguptaa.me/src/assets/devymanish-manish-gupta-profile.png",
        width: 800,
        height: 600,
        alt: "DevyManish | Manish Gupta's Portfolio",
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  googleSiteVerification: "syWf9ZbBBMmu0eMJwQL0vxjJAj8BH0wpIzk6LcvoDRI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/favicon.ico" rel="icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}