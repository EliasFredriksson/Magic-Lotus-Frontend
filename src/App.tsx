import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { withDependencyInjection } from "../IOC/withDependencyInjection";
import { DependencyInjectionProvider } from "../IOC/DependencyInjectionContext";
import AppPresenter from "./AppPresenter";
import appContainer from "../IOC/container";
import Router from "./Router";
import "./theme/global.scss";

interface AppProps {
  presenter: AppPresenter;
}

const App: FC<AppProps> = ({ presenter }) => {
  useEffect(() => {
    presenter.initializeApplication();
  }, []);

  if (presenter.isLoading) {
    return (
      <div>
        <h1>App is initializing...</h1>
      </div>
    );
  }

  return <Router />;
};

export default withDependencyInjection({
  presenter: AppPresenter,
})(observer(App));
