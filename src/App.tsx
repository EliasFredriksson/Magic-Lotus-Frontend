import React, { FC, useEffect } from "react";
import { withDependencyInjection } from "../IOC/withDependencyInjection";
import AppPresenter from "./AppPresenter";

interface AppProps {
  presenter: AppPresenter;
  name: string;
}

const App: FC<AppProps> = ({ presenter, name }) => {
  useEffect(() => {
    presenter.initializeApplication();
  }, [presenter]);

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default withDependencyInjection({
  presenter: AppPresenter,
})(App);
