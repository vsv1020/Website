import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "lib/utils";

const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
  {
    variants: {
      fill: {
        deep_purple_A200_33: "bg-deep_purple-a200_33 shadow-bs1 text-black-900_02",
        deep_purple_A200: "bg-deep_purple-a200 text-white-a700_01",
      },
      size: {
        xs: "h-[50px] pl-2 pr-3.5 text-[20px]",
        md: "h-[62px] pl-[30px] pr-[18px] text-[18px]",
        sm: "h-[58px] px-4",
      },
      shape: {
        round: "rounded-[28px]",
      },
    },
    defaultVariants: {},
  },
);

const Button = React.forwardRef(
  (
    {
      colorScheme,
      variant = "fill",
      shape,
      size = "sm",
      children,
      leftIcon,
      rightIcon,
      className,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ [variant]: colorScheme, size, shape, className }))} ref={ref} {...props}>
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
