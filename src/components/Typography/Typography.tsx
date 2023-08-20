import React, { FC, ReactNode } from "react";

interface TypographyProps {
  type: TypographyTypes;
  children: ReactNode;
  className?: string;
}

type TypographyTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TypographyElement = FC<{
  children?: ReactNode;
  className?: string;
}>;

const mapTypographyTypeToComponent: Record<TypographyTypes, TypographyElement> =
  {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    h4: (props) => <h4 {...props} />,
    h5: (props) => <h5 {...props} />,
    h6: (props) => <h6 {...props} />,
    p: (props) => <p {...props} />,
    span: (props) => <span {...props} />,
  };

const Typography: FC<TypographyProps> = ({ type, className, children }) => {
  const Comp = mapTypographyTypeToComponent[type];

  return <Comp className={className}>{children}</Comp>;
};

export default Typography;
