import { About } from "components/About/About";
import { Contacts } from "components/Contacts/Contacts";
import { Education } from "components/Education/Education";
import { Experience } from "components/Experience/Experience";
import { Languages } from "components/Languages/Languages";
import { Portfolios } from "components/Portfolios/Portfolios";
import { Skills } from "components/Skills/Skills";
import { Footer } from "components/layout/Footer/Footer";
import { Header } from "components/layout/Header/Header";
import { LangProvider } from "components/providers/lang/LangContext";
import mainBg from "images/main-bg.png";
import { LangEnum } from "models";
import { useState } from "react";

export const HomePage = () => {
  const [lang, setLang] = useState<LangEnum>(LangEnum.Ru);

  const switchLang = () => {
    setLang((p) => (p === LangEnum.Ru ? LangEnum.En : LangEnum.Ru));
  };

  return (
    <LangProvider value={{ lang }}>
      <div className="app" style={{ backgroundImage: `url(${mainBg})` }}>
        <Header onSwitchLang={switchLang} />
        <div className="main-wrapper">
          <About />
          <Skills />
          <Experience />
          <Education />
          <Portfolios />
          <Languages />
          <Contacts />
        </div>
        <Footer />
      </div>
    </LangProvider>
  );
};
