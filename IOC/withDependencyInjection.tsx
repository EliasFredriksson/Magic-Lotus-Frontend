import React, { FC, useContext } from "react";
import { DependencyInjectionContext } from "./DependencyInjectionContext";

export const withDependencyInjection = <TIdentifiers,>(
  identifiers: TIdentifiers
) => {
  return <TProps,>(Component: FC<TProps>) => {
    return (props: Omit<TProps, keyof TIdentifiers>) => {
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

        // @ts-ignore
        return <Component {...props} {...injectedProps} />;
      }
      // @ts-ignore
      return <Component {...props} />;
    };
  };
};
