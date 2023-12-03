import { createContext, useState } from "react";

interface DogContextType {
  sortingStrategy: string;
  setSortingStrategy: (strategy: string) => void;

  initialPageLoadSort: string;
  setInitialPageLoadSort: (strategy: string) => void;
}
const defaultContextValue: DogContextType = {
  sortingStrategy: "",
  setSortingStrategy: () => {},
  initialPageLoadSort: "",
  setInitialPageLoadSort: () => {},
};

interface DogProviderProps {
  children: React.ReactNode;
}

export const DogContext = createContext(defaultContextValue);

export const DogProvider: React.FC<DogProviderProps> = ({ children }) => {
  const [sortingStrategy, setSortingStrategy] = useState<string>("asc");
  const [initialPageLoadSort, setInitialPageLoadSort] = useState<string>("asc");

  return (
    <DogContext.Provider
      value={{
        sortingStrategy,
        setSortingStrategy,

        initialPageLoadSort,
        setInitialPageLoadSort,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
