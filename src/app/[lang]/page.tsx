
import { QuickSpeakComponent } from "@/components/shared/QuickSpeakComponent";
import { CookieComponent } from "@/components/features/CookieComponent";
import { baseLanguages } from "@/types/baseTypes";
import { i18n } from "../../../i18n.config";
import { Metadata } from "next";
import { getDictionary } from "../../../dictionaries/serverDictionary";
import styles from "./page.module.css";

type PageParams = {
  lang?: string;
};

type ParamsInput = Promise<PageParams> | PageParams;

type PageProps = {
  params?: ParamsInput;
};

type LandingDictionary = {
  header?: {
    title?: string;
  };
  quickspeak?: {
    title?: string;
    button?: string;
  };
};

const resolveLang = (lang?: string): baseLanguages => {
  return i18n.locales.includes(lang as baseLanguages)
    ? (lang as baseLanguages)
    : i18n.defaultLocale;
};

const unwrapParams = async (paramsInput?: ParamsInput) => {
  return paramsInput ? await paramsInput : undefined;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await unwrapParams(params);
  const lang = resolveLang(resolvedParams?.lang);
  const { meta } = await getDictionary(lang);

  return {
    title: meta.title,
    description: meta.description,
  };
}

export function generateStaticParams() {
  return i18n.locales.map(lang => ({ lang }));
}

export default async function Home({ params }: PageProps) {
  const resolvedParams = await unwrapParams(params);
  const lang = resolveLang(resolvedParams?.lang);
  const dictionary = (await getDictionary(lang)) as LandingDictionary;
  const quickspeak = {
    title: dictionary.quickspeak?.title ?? "Quickspeak",
    button: dictionary.quickspeak?.button ?? "Get started",
  };
  const quickId = `qspk_${lang}`;

  return (
    <main className={styles.main}>
      <QuickSpeakComponent
        quickId={quickId}
        lang={lang}
        title={quickspeak.title}
        buttonLabel={quickspeak.button}
        subtitle={dictionary.header?.title}
      />
      <CookieComponent lang={lang} />
    </main>
  );
}
