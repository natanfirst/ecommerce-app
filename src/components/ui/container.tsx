import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px]", className)}>
      {children}
    </div>
  );
};

export default Container;
