import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IPortfolio {
  name: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink: string;
  stackList: string[];
}

interface IContact {
  title: string;
  href?: string;
  value: string;
  icon: IconDefinition;
}

interface IEducation {
  degree: string;
  fieldTitle: string;
  establishment: string;
  date: string;
  location: string;
  description: string;
}

interface ICourse {
  degree: string;
  establishment: string;
  date: string;
  location: string;
  description: {
    title: string;
    list: string[];
  };
}

interface IExperience {
  position: string;
  company: string;
  date: string;
  location: string;
  description: {
    title: string;
    list: string[];
  };
  skills: string[];
}

interface ISkillItem {
  name: string;
  progress: string;
  start: Date;
}

export enum SkillTypeEnum {
  LangAndTech = "langAndTech",
  Libs = "libs",
  Store = "store",
  TestAndDocs = "testAndDocs",
  Other = "other",
}

type SkillsConfig = Record<SkillTypeEnum, ISkillItem[]>;

interface ILang {
  language: string;
  level: string;
  description: string;
}

export enum LangEnum {
  En = "en",
  Ru = "ru",
}

export interface ICvBaseData {
  avatar: string;
  avatarV2: string;
  contacts: IContact[];
  skills: SkillsConfig;
  langs: ILang[];
}

export interface ILocation {
  post: string;
  city: string;
  region: string;
  country: string;
}

export interface ICvData {
  name: string;
  location: ILocation;
  positionTitle: string;
  shortAbout: string;
  about: string;
  education: IEducation[];
  courses: ICourse[];
  experience: IExperience[];
  portfolios: IPortfolio[];
}

export type ICvDataConfig = Record<LangEnum, ICvData>;
