import { useContext } from "react";
import { LangContext, LangContextProps } from "./LangContext";

export function useLangContext(): LangContextProps {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLangContext must be used within a LangProvider");
  }
  return context;
}
