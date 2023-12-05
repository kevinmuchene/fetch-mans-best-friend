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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
