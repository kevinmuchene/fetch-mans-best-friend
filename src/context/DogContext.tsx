import React, { createContext, useState } from "react";

export const DogContext = createContext({
  favoriteDogs: [],
  setFavoriteDogs: (newFavoriteDogs) => {},
});

export const DogProvider = ({ children }) => {
  const [favoriteDogs, setFavoriteDogs] = useState([]);

  return (
    <DogContext.Provider value={{ favoriteDogs, setFavoriteDogs }}>
      {children}
    </DogContext.Provider>
  );
};
