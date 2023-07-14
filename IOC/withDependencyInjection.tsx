import React, { useContext } from "react";
import { DependencyInjectionContext } from "./DependencyInjectionContext";

export const withDependencyInjection = (identifiers: any) => {
  return (Component: any) => {
    return (props: any) => {
      const { container } = useContext(DependencyInjectionContext);

      if (container) {
        const finalProps = { ...props };

        Object.keys(identifiers).forEach((key) => {
          finalProps[key] = container.get(identifiers[key]);
        });

        return <Component {...finalProps} />;
      }

      return <Component {...props} />;
    };
  };
};
