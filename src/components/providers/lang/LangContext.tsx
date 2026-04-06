import { LangEnum } from "models";
import { createContext } from "react";

export interface LangContextProps {
  lang: LangEnum;
}

export const LangContext = createContext<LangContextProps | null>(null);

interface ProviderParams {
  value: LangContextProps;
  children: React.ReactNode;
}

export function LangProvider({ value, children }: ProviderParams) {
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
