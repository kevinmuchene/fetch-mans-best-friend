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
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProtectedRoute from "./authentication/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignIn />} />

        <Route
          path="/dogs"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favoritedogs"
          element={
            <ProtectedRoute>
              <FavDogsComponent />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<ErrorPage />} />
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
