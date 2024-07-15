"use client"
import { createContext, useContext, useState } from "react";


interface LenguageContextType {
  language: string;
  toggleLanguage?: () => void;
}

const defaultState = {
  language: 'en',
};


const Context = createContext<LenguageContextType>(defaultState);

export function StateContext({ children }:any) {
  const [language, setLanguage] = useState(defaultState.language);
  console.log(language)
  const toggleLanguage = () => {
    console.log("language change")
    if(language === 'en') {
      setLanguage('ru')
      return
    }
    setLanguage('en')
  };
  return (
    <Context.Provider  value={{
      language,
      toggleLanguage,
    }}>{children}</Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}