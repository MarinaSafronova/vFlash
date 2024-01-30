import { createContext, useContext, ReactNode, useState } from "react";

export interface AppContextProps {
  isOpen: boolean;
  toggle: (e: React.SyntheticEvent) => void;
}

export const AppContext = createContext<AppContextProps>({
  isOpen: false,
  toggle: () => {},
});

export interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return setisOpen(!isOpen);
  };

  return (
    <AppContext.Provider value={{ isOpen, toggle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
