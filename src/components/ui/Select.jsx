import React from "react";
import {
  Root,
  Group,
  Value,
  Trigger,
  Content,
  Label,
  Item,
  ItemText,
  ItemIndicator,
  Separator,
  Viewport,
  ScrollUpButton,
  ScrollDownButton,
  Icon,
  Portal,
} from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "lib/utils";

const selectVariants = cva(
  " flex h-full w-auto items-center justify-between px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      fill: {
        white_A700_01: "bg-white-a700_01 shadow-bs text-black-900_02",
      },
      size: {
        xs: "h-[38px] pl-2.5 pr-[34px] text-[16px]",
      },
      shape: {
        round: "rounded-[5px]",
      },
    },
    defaultVariants: {},
  },
);

const Select = Root;
const SelectGroup = Group;
const SelectValue = Value;

const SelectTrigger = React.forwardRef(
  ({ variant = "fill", shape, size = "xs", colorScheme, className, children, indicator, ...rest }, ref) => {
    return (
      <Trigger ref={ref} className={cn(selectVariants({ [variant]: colorScheme, size, shape, className }))} {...rest}>
        {children}
        <Icon asChild>{indicator ? indicator : <ChevronDown className="h-4 w-4 opacity-50" />}</Icon>
      </Trigger>
    );
  },
);
SelectTrigger.displayName = Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </ScrollUpButton>
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </ScrollDownButton>
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-[#fff] text-[#000] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </Viewport>
      <SelectScrollDownButton />
    </Content>
  </Portal>
));
SelectContent.displayName = Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = Label.displayName;

const SelectItem = React.forwardRef(({ className, children, labelIcon, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "hover:bg-[#6c5ce7] hover:text-[#ffffff] relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>

    <div className="flex item-center gap-3">
      {!!labelIcon && labelIcon}
      <ItemText>{children}</ItemText>
    </div>
  </Item>
));
SelectItem.displayName = Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = Separator.displayName;

const SelectItems = React.forwardRef(({ options, ...props }, ref) => (
  <>
    {options.map((option) => (
      <SelectItem key={option.value} {...props} ref={ref} value={option.value}>
        {option.label}
      </SelectItem>
    ))}
  </>
));
SelectItem.displayName = "SelectItems";

export {
  Select,
  SelectItems,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
