import { createContext, useState } from "react";
import { Dog, FilterValues, Location } from "../common/Interfaces";

interface DogContextType {
  aiGeneratedActivities: any;
  setAiGeneratedActivities: (activities: any) => void;
  matchDogData: Dog[];
  setMatchDogData: (dogData: Dog[]) => void;
  matchLocation: Location[];
  setMatchLocation: (locationData: any) => void;
  sortingStrategy: string;
  setSortingStrategy: (strategy: string) => void;
  filterValues: FilterValues;
  setFilterValues: (values: any) => void;
  initialPageLoadSort: string;
  setInitialPageLoadSort: (strategy: string) => void;
}
const defaultContextValue: DogContextType = {
  aiGeneratedActivities: {},
  setAiGeneratedActivities: () => {},
  matchDogData: [],
  setMatchDogData: () => {},
  matchLocation: [],
  setMatchLocation: () => {},
  filterValues: {
    breeds: [],
    ageMin: "",
    ageMax: "",
    validZipCodes: [],
  },
  setFilterValues: () => {},
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
  const [matchDogData, setMatchDogData] = useState<Dog[]>([]);
  const [matchLocation, setMatchLocation] = useState<any>([]);
  const [sortingStrategy, setSortingStrategy] = useState<string>("asc");
  const [filterValues, setFilterValues] = useState<FilterValues>({
    breeds: [],
    ageMin: "",
    ageMax: "",
    validZipCodes: [],
  });
  const [initialPageLoadSort, setInitialPageLoadSort] = useState<string>("asc");

  return (
    <DogContext.Provider
      value={{
        aiGeneratedActivities,
        setAiGeneratedActivities,
        matchDogData,
        setMatchDogData,
        matchLocation,
        setMatchLocation,
        sortingStrategy,
        setSortingStrategy,
        filterValues,
        setFilterValues,
        initialPageLoadSort,
        setInitialPageLoadSort,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
