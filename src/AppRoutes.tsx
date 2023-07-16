import { FC, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Loader from "./components/Loader/Loader";

const AppRoutes: FC = () => {
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
