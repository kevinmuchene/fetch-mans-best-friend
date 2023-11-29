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
