import { FC, ReactNode } from "react";
import { CSSObject } from "@emotion/react";

interface FlexProps {
  direction?: CSSObject["flexDirection"];
  justify?: CSSObject["justifyContent"];
  align?: CSSObject["alignItems"];
  children?: ReactNode;
  className?: string;
}

const Flex: FC<FlexProps> = ({
  direction = "row",
  justify = "flex-start",
  align = "center",
  className,
  children,
}) => {
  return (
    <div
      className={className}
      css={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
