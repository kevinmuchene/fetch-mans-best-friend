import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import FavDogsComponent from "./components/Pages/FavDogsComponent";
import RootLayout from "./components/Pages/RootLayout";
import SignIn from "./components/Pages/SigninCard";
import SearchPage from "./components/Pages/SearchPage";

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
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
