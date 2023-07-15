import React, { FC, useEffect } from "react";
import { withDependencyInjection } from "../IOC/withDependencyInjection";
import AppPresenter from "./AppPresenter";
import { observer } from "mobx-react-lite";
import Landing from "./views/Landing/Landing";

interface AppProps {
  presenter: AppPresenter;
}

const App: FC<AppProps> = ({ presenter }) => {
  useEffect(() => {
    presenter.initializeApplication();
  }, []);

  return (
    <>
      {presenter.viewModel.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{presenter.viewModel.name}</h1>
          <Landing />
        </>
      )}
    </>
  );
};

export default withDependencyInjection({
  presenter: AppPresenter,
})(observer(App));
