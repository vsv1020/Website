import React from "react";

const sizes = {
  texts: "text-[15px] font-normal not-italic",
  textlg: "text-[20px] font-normal not-italic",
  textxl: "text-[22px] font-normal not-italic",
};

const Text = ({ children, className = "", as, size = "textlg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
