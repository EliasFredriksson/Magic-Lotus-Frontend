import { FC } from "react";
import "./Loader.scss";

const Loader: FC = () => {
  return (
    <div className="loader-component">
      <div className="loader-component__spinner"></div>
    </div>
  );
};

export default Loader;
