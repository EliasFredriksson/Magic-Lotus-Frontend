import { FC, Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const AppRoutes: FC = () => {
  const Landing = lazy(() => import("./views/Landing/Landing"));

  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        }
      >
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
