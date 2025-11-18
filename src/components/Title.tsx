import cn from "../utils/cn";

type TTitleProps = {
  children: string;
  level: 2 | 3;
  className?: string;
};

const Title = ({ children, level, className }: TTitleProps) => {
  if (level === 2)
    return (
      <h2 className={cn("mb-4 text-xl font-bold", className)}>{children}</h2>
    );
  else if (level === 3)
    return (
      <h3 className={cn("mb-4 text-lg font-bold", className)}>{children}</h3>
    );
};

export default Title;
