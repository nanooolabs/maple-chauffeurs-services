import "bootstrap/dist/css/bootstrap.css";
import "@/styles/index.scss";
import Layout from "@/components/wrappers/Layout";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import VisualEditingControls from "@/components/wrappers/VisualEditingControls";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";
import { getSiteSettings } from "@/sanity/utils/queries";
import urlFor from "@/lib/imageUrlBuilder";
import Script from 'next/script';

export const customFont = localFont({
  src: "../../public/fonts/Pacaembu.woff2",
  variable: "--t-font-family-global",
});

export default async function RootLayout({ children }) {
  const siteSettings = await getSiteSettings();
  const favicon = urlFor(siteSettings.favicon).url()
  return (
    <html lang="en">
      <body
        data-url={process.env.NEXT_PUBLIC_VERCEL_URL}
        data-prod-url={process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}
        className={customFont.variable}
      >
      {/* Google Tag Script */}
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PH64RRKF5K"
          strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PH64RRKF5K');
          `}
      </Script>
        <link rel="icon" href={favicon || ``} sizes="any" />
        <NextTopLoader
          color="var(--t-primary-branding-color)"
          showSpinner={false}
          height={2}
          zIndex={999999}
        />
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
        <VisualEditingControls />
      </body>
    </html>
  );
}

export const revalidate = 10;
