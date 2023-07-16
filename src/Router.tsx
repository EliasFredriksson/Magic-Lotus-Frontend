import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";

const Router: FC = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
    </Routes>
  );
};

export default Router;
