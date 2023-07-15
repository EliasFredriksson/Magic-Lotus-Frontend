import { FC, useEffect } from "react";
import "./Landing.scss";
import { withDependencyInjection } from "../../../IOC/withDependencyInjection";
import LandingPresenter from "./LandingPresenter";
import { observer } from "mobx-react-lite";

interface LandingProps {
  presenter: LandingPresenter;
}

const Landing: FC<LandingProps> = ({ presenter }) => {
  useEffect(() => {
    presenter.init();
  }, []);

  return (
    <div className="view__landing">
      <h1>Hello World! With webpack.</h1>
    </div>
  );
};

export default withDependencyInjection({
  presenter: LandingPresenter,
})(observer(Landing));
