import type { ReactNode } from "react";
import cn from "../utils/cn";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return <div className={cn("px-4", className)}>{children}</div>;
};

export default Container;
