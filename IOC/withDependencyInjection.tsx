import React, { FC, ReactElement, useContext } from "react";
import { DependencyInjectionContext } from "./DependencyInjectionContext";

export const withDependencyInjection = <TIdentifiers,>(
  identifiers: TIdentifiers
) => {
  return <TProps,>(Component: FC<TProps>) => {
    return function CompFn(
      props: Omit<TProps, keyof TIdentifiers>
    ): ReactElement {
      const { container } = useContext(DependencyInjectionContext);

      if (container) {
        const injectedProps: TIdentifiers = Object.keys(identifiers).reduce(
          (acc, key) => {
            const identifierImplementation = container.get(identifiers[key]);
            if (identifierImplementation) {
              return {
                ...acc,
                [key]: identifierImplementation,
              };
            }

            return acc;
          },
          {} as TIdentifiers
        );

        return <Component {...props} {...injectedProps} />;
      }
      return <Component {...props} />;
    };
  };
};
