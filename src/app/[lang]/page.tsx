
import styles from "./page.module.css";

import { QuickSpeakComponent } from "@/components/shared/QuickSpeakComponent";

import { About } from "@/components/widgets/Advantages";
import { HeaderComponent } from "@/components/widgets/Header";
import { FooterComponent } from "@/components/widgets/Footer";
import { baseLanguages } from "@/types/baseTypes";
import { Metadata } from "next";
import { getDictionary } from "../../../dictionaries/clientDictionary";

export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  let lang = params.lang ? params.lang : 'en'
  const { meta } = getDictionary(lang)
  return {
    title: meta.title,
    description: meta.description
  }
}

export default async function Home({
  params
}: {
  params: { lang: baseLanguages }
}) {
  const lang = params.lang ? params.lang : 'en'
  return (
    <main>
      <HeaderComponent lang={lang} />
      <About lang={lang} />
      <QuickSpeakComponent quickId={`qspk_${lang}`} lang={lang} />
      <FooterComponent />
    </main>
  );
}
