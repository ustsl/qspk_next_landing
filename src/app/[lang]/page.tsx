
import { QuickSpeakComponent } from "@/components/shared/QuickSpeakComponent";


import { baseLanguages } from "@/types/baseTypes";
import { Metadata } from "next";
import { getDictionary } from "../../../dictionaries/clientDictionary";
import { CookieComponent } from "@/components/features/CookieComponent";

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
      <QuickSpeakComponent quickId={`qspk_${lang}`} lang={lang} />
      <CookieComponent lang={lang} />

    </main>
  );
}
