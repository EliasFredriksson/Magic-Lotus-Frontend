import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { withDependencyInjection } from "../IOC/withDependencyInjection";
import AppPresenter from "./AppPresenter";
import AppRoutes from "./AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// import "./theme/global.scss";

interface AppProps {
  presenter: AppPresenter;
}

const App: FC<AppProps> = ({ presenter }) => {
  useEffect(() => {
    void presenter.initializeApplication();
  }, []);

  if (presenter.isLoading) {
    return (
      <div>
        <h1>App is initializing...</h1>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <AppRoutes />;
    </ErrorBoundary>
  );
};

export default withDependencyInjection({
  presenter: AppPresenter,
})(observer(App));
