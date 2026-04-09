import { LangEnum, SkillTypeEnum } from "models";

export type SectionKeyType =
  | "about"
  | "skills"
  | "experiences"
  | "education"
  | "courses"
  | "languages"
  | "location"
  | "contacts"
  | "portfolios";

export const sectionTitles: Record<LangEnum, Record<SectionKeyType, string>> = {
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
    [SkillTypeEnum.Core]: "Core",
    [SkillTypeEnum.Frameworks]: "Frameworks",
    [SkillTypeEnum.StateManagement]: "State Management",
    [SkillTypeEnum.Testing]: "Testing",
    [SkillTypeEnum.ToolsAndBuilds]: "Tools & Build",
  },
  [LangEnum.Ru]: {
    [SkillTypeEnum.Core]: "Core",
    [SkillTypeEnum.Frameworks]: "Frameworks",
    [SkillTypeEnum.StateManagement]: "State Management",
    [SkillTypeEnum.Testing]: "Testing",
    [SkillTypeEnum.ToolsAndBuilds]: "Tools & Build",
  },
};
