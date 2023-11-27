import { createContext, useState } from "react";

interface Dog {
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}
interface DogContextType {
  breedData: string[];
  setBreedData: (breedData: string[]) => void;
  favoriteDogsId: string[];
  setFavoriteDogsId: (newFavoriteDogs: string[]) => void;
  aiGeneratedActivities: any;
  setAiGeneratedActivities: (activities: any) => void;
  matchDogData: Dog[];
  setMatchDogData: (dogData: Dog[]) => void;
  matchLocation: string[];
  setMatchLocation: (locationData: any) => void;
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
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
