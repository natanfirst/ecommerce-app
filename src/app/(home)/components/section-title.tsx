import { ComponentProps } from "react";

const SectionTitle = ({ title, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-2 pl-5 font-bold uppercase" {...props}>
      {title}
    </p>
  );
};

export default SectionTitle;
