import { Container } from "inversify";
import React, { createContext, FC, useMemo } from "react";

interface IDependencyInjectionContext {
  container: Container | null;
}

interface DependencyInjectionProviderProps {
  container: Container;
  children?: React.ReactNode;
}

export const DependencyInjectionContext =
  createContext<IDependencyInjectionContext>({
    container: null,
  });

export const DependencyInjectionProvider: FC<
  DependencyInjectionProviderProps
> = ({ container, children }) => {
  const dependencyInjectionContainer = useMemo(
    () => ({ container }),
    [container]
  );

  return (
    <DependencyInjectionContext.Provider value={dependencyInjectionContainer}>
      {children}
    </DependencyInjectionContext.Provider>
  );
};
