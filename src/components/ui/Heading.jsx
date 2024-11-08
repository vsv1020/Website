import React from "react";

const sizes = {
  textxs: "text-[12px] font-medium",
  textmd: "text-[18px] font-medium not-italic",
  headingxs: "text-[16px] font-semibold",
  headings: "text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
  headingmd: "text-[48px] font-semibold md:text-[44px] sm:text-[38px]",
  headinglg: "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "textxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_02 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
