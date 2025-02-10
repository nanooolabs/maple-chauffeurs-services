import { getSiteSettings } from "@/sanity/utils/queries";
import urlFor from "@/lib/imageUrlBuilder";
import { organization } from "@/lib/constants";

export const metadata = {
  title: organization,
  description: `Generated by ${organization}`,
};

export default async function RootLayout({ children }) {
  const siteSettings = await getSiteSettings();
  const favicon = urlFor(siteSettings.favicon).url();
  return (
    <html lang="en">
      <body>
        <link rel="icon" href={favicon || ``} sizes="any" />
        {children}
      </body>
    </html>
  );
}
