'use client'
import { usePathname } from 'next/navigation';
import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface InforContextType {
  instituicao: string;
  setinstituicao: React.Dispatch<React.SetStateAction<any>>;
  predio: any;
  setpredio: React.Dispatch<React.SetStateAction<any>>;
  sala: any;
  setsala: React.Dispatch<React.SetStateAction<any>>;
  reset: React.Dispatch<React.SetStateAction<any>>;
}

const defaultValues: InforContextType = {
  instituicao: '',
  setinstituicao: () => { },
  predio: null,
  setpredio: () => { },
  sala: null,
  setsala: () => { },
  reset: () => { }
};
export const InforContext = createContext<InforContextType>(defaultValues);

const InforProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [instituicao, setinstituicao] = useState<any>(null)
  const [predio, setpredio] = useState<any>(null)
  const [sala, setsala] = useState<any>(null);
  const pathname = usePathname()

  const reset = () => {
    setinstituicao(null),
      setpredio(null),
      setsala(null)
  }

  useEffect(() => {
    console.log(pathname)
    if (pathname.includes('instituicoes')) {

    } else {
      reset()
    }
  }, [pathname])
  return (
    <InforContext.Provider value={{
      instituicao,
      setinstituicao,
      predio,
      setpredio,
      sala,
      setsala,
      reset
    }}>
      {children}
    </InforContext.Provider>
  );
};

export default InforProvider;