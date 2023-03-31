import Link from "next/link";
import { useTranslation } from "../i18n";
import { Game } from "./game/page.jsx";
import {Navbar} from "./components/Navbar/Navbar.jsx"

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="h-screen w-screen bg-[#171D3F]">
      <Navbar />
      <Game />

      {/* <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <br />
      <Link href={`/${lng}/client-page`}>
        {t('to-client-page')}
      </Link>
      <Footer lng={lng}/> */}
    </div>
  );
}
