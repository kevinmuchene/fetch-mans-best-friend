import { createContext, useState } from "react";

interface DogContextType {
  aiGeneratedActivities: any;
  setAiGeneratedActivities: (activities: any) => void;

  sortingStrategy: string;
  setSortingStrategy: (strategy: string) => void;

  initialPageLoadSort: string;
  setInitialPageLoadSort: (strategy: string) => void;
}
const defaultContextValue: DogContextType = {
  aiGeneratedActivities: {},
  setAiGeneratedActivities: () => {},
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
  const [aiGeneratedActivities, setAiGeneratedActivities] = useState<any>({});
  const [sortingStrategy, setSortingStrategy] = useState<string>("asc");
  const [initialPageLoadSort, setInitialPageLoadSort] = useState<string>("asc");

  return (
    <DogContext.Provider
      value={{
        aiGeneratedActivities,
        setAiGeneratedActivities,
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
