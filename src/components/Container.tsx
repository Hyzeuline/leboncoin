import { memo, type ReactNode } from "react";
import cn from "../utils/cn";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={cn(
        "font-nunito-sans px-4 lg:mr-[110px] lg:ml-[110px] xl:mr-[212px] xl:ml-[212px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default memo(Container);
