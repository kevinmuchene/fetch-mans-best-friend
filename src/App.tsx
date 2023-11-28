import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import FavDogsComponent from "./components/MatchDogsComponent";
import RootLayout from "./components/RootLayout";
import SignIn from "./components/SigninCard";
import SearchPage from "./components/SearchPage";
import { useFetchBreeds } from "./components/custom-hooks/useFetchBreeds";
import { useEffect, useContext } from "react";
import { DogContext } from "./context/DogContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignIn />} />
        <Route path="/dogs" element={<SearchPage />} />
        <Route path="/favoritedogs" element={<FavDogsComponent />} />
      </Route>
    </Route>
  )
);

function App() {
  const [breedsData] = useFetchBreeds();
  const { setBreedData } = useContext(DogContext);
  // console.log(process.env.OPENAIAPI);
  console.log(import.meta.env.VITE_OPENAIAPI);
  useEffect(() => {
    setBreedData(breedsData);
  }, [breedsData]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
