import { CSSObject } from "@emotion/react";
import { FC, ReactNode } from "react";

interface FlexProps {
  children?: ReactNode;
  className?: string;
}

const styles: CSSObject = {
  border: "50px solid red",
};

const Flex: FC<FlexProps> = ({ className, children }) => {
  return (
    <div className={className} css={styles}>
      {children}
    </div>
  );
};

export default Flex;
