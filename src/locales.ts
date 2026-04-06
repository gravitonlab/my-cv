import { LangEnum, SkillTypeEnum } from "models";

type SectionKey =
  | "about"
  | "skills"
  | "experiences"
  | "education"
  | "courses"
  | "languages"
  | "location"
  | "contacts"
  | "portfolios";

export const sectionTitles: Record<LangEnum, Record<SectionKey, string>> = {
  [LangEnum.En]: {
    about: "About",
    skills: "Skills",
    experiences: "Experiences",
    education: "Education",
    courses: "Training / Courses",
    languages: "Languages",
    location: "Location",
    contacts: "Contacts",
    portfolios: "Portfolios",
  },
  [LangEnum.Ru]: {
    about: "Обо мне",
    skills: "Навыки",
    experiences: "Опыт работы",
    education: "Образование",
    courses: "Курсы / Обучение",
    languages: "Языки",
    location: "Местоположение",
    contacts: "Контакты",
    portfolios: "Портфолио",
  },
};

export const skillsTitles: Record<LangEnum, Record<SkillTypeEnum, string>> = {
  [LangEnum.En]: {
    [SkillTypeEnum.LangAndTech]: "Programming Languages and Web Technologies",
    [SkillTypeEnum.Libs]: "Frameworks and Libraries",
    [SkillTypeEnum.Store]: "State Management",
    [SkillTypeEnum.TestAndDocs]: "Testing and Documentation",
    [SkillTypeEnum.Other]: "Other",
  },
  [LangEnum.Ru]: {
    [SkillTypeEnum.LangAndTech]: "Языки и технологии",
    [SkillTypeEnum.Libs]: "Библиотеки и фреймворки",
    [SkillTypeEnum.Store]: "Стейт менеджеры",
    [SkillTypeEnum.TestAndDocs]: "Тестирование и документирование",
    [SkillTypeEnum.Other]: "Прочее",
  },
};
