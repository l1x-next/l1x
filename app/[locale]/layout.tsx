import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

const balooBhaijaan2 = Baloo_Bhaijaan_2({
  variable: "--font-baloo-bhaijaan-2",
  subsets: ["latin", "arabic"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const direction = locale === "en" ? "ltr" : "rtl";

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body
        className={`${balooBhaijaan2.variable} font-baloo-bhaijaan-2 antialiased`}
      >
        <NextIntlClientProvider>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
