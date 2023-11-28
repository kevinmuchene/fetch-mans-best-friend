import { createContext, useState } from "react";
import { Dog, FilterValues, Location } from "../common/Interfaces";

interface DogContextType {
  breedData: string[];
  setBreedData: (breedData: string[]) => void;
  favoriteDogsId: string[];
  setFavoriteDogsId: (newFavoriteDogs: string[]) => void;
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
  breedData: [],
  setBreedData: () => {},
  favoriteDogsId: [],
  setFavoriteDogsId: () => {},
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
  const [favoriteDogsId, setFavoriteDogsId] = useState<string[]>([]);
  const [aiGeneratedActivities, setAiGeneratedActivities] = useState<any>({});
  const [matchDogData, setMatchDogData] = useState<Dog[]>([]);
  const [matchLocation, setMatchLocation] = useState<any>([]);
  const [breedData, setBreedData] = useState<string[]>([]);
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
        breedData,
        setBreedData,
        favoriteDogsId,
        setFavoriteDogsId,
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
