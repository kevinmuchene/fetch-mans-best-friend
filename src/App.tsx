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
import { Provider } from "react-redux";
import { store } from "./redux/Store";

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
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
