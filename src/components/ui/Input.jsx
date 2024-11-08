import * as React from "react";
import { cn } from "lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full flex items-center justify-center sm:px-5 cursor-text text-black-900_02 text-[16px] bg-white-a700_01 shadow-xl flex-grow rounded-[5px]",
  {
    variants: {
      fill: {
        white_A700_01: "bg-white-a700_01 shadow-xl text-black-900_02",
      },
      size: {
        xs: "h-[62px] px-[22px] text-[16px]",
      },
      shape: {
        round: "rounded-[5px]",
      },
    },
    defaultVariants: {},
  },
);

const Input = React.forwardRef(
  ({ variant = "fill", colorScheme, shape, size = "xs", className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ [variant]: colorScheme, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const InputGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("relative flex w-full", className)} {...props} ref={ref}>
      {children}
    </div>
  );
});
InputGroup.displayName = "InputGroup";

const InputLeftElement = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("absolute aspect-square h-full left-0 justify-center flex items-center", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("absolute aspect-square h-full right-0 justify-center flex items-center", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
InputRightElement.displayName = "InputRightElement";

export { Input, InputGroup, InputLeftElement, InputRightElement };
