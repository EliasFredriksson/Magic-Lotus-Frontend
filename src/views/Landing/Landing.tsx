import { FC, useEffect } from "react";
import "./Landing.scss";
import { withDependencyInjection } from "../../../IOC/withDependencyInjection";
import LandingPresenter from "./LandingPresenter";
import { observer } from "mobx-react-lite";

interface LandingProps {
  presenter: LandingPresenter;
}

const Landing: FC<LandingProps> = ({ presenter }) => {
  return (
    <div className="view__landing">
      <h1>Hello World! With webpack.</h1>
      <button onClick={presenter.getLocaleKey}>CLICK ME</button>
    </div>
  );
};

export default withDependencyInjection({
  presenter: LandingPresenter,
})(observer(Landing));
