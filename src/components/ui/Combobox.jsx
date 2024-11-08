import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./Command";
import { ChevronDown, X } from "lucide-react";
import { Button } from "./Button";
import { ScrollArea } from "./ScrollArea";

const SelectValue = (props) => {
  const { value, options, placeholder } = props;
  const displayValue = options.find((option) => option.value === value)?.label;
  return <span className="overflow-hidden pr-2 flex items-center">{displayValue ?? placeholder}</span>;
};

const SearchInput = () => (
  <>
    <CommandEmpty>No Options</CommandEmpty>
    <CommandInput className="border-none focus:shadow-none focus:ring-0" placeholder={"Search..."} />
  </>
);

const Badge = ({ children }) => <div className="px-2.5 border flex items-center rounded">{children}</div>;

const SearchSelect = ({ selected, handleSelect, placeholder, ...props }) => (
  <div
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
    className="flex flex-wrap gap-1"
    {...props}
  >
    {!selected.length && placeholder}
    {selected.map((option) => (
      <Badge key={option}>
        {option}
        <button
          className="ml-1 h-max rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onKeyDown={(e) => e.key === "Enter" && handleSelect(option)}
          onClick={() => handleSelect(option)}
        >
          <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
        </button>
      </Badge>
    ))}
  </div>
);

const Combobox = ({
  options,
  placeholder,
  isSearch = false,
  indicator = null,
  isMultiple = false,
  className = "",
  width,
  defaultValue,
  onChange,
  value: propValue,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(defaultValue);

  React.useEffect(() => {
    if (propValue !== undefined) {
      setSelected(propValue);
    }
  }, [propValue]);

  const handleSelect = (value) => {
    setSelected((prev) => {
      const isExist = isMultiple ? (selected || []).includes(value) : false;
      const updated = isMultiple
        ? isExist
          ? (Array.isArray(prev) ? prev : []).filter((_) => _ !== value)
          : [...(Array.isArray(prev) ? prev : []), value]
        : value;
      onChange?.(updated);
      return updated;
    });
    if (!isMultiple) setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          style={{ maxWidth: width + "px" }}
          className={`${className} w-full justify-between h-auto px-3 py-3`}
          {...rest}
        >
          {isMultiple ? (
            <SearchSelect
              placeholder={placeholder}
              selected={Array.isArray(selected) ? selected : []}
              handleSelect={handleSelect}
            />
          ) : (
            <SelectValue placeholder={placeholder} value={String(selected)} options={options} />
          )}
          <div>{indicator ?? <ChevronDown />}</div>
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ maxWidth: width + "px" }} align="start" className={`w-full p-0`}>
        {" "}
        <Command className="bg-[#fff]">
          {isSearch && <SearchInput />}
          <CommandList>
            <ScrollArea className="h-72">
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    className={selected.includes(option.value) ? "bg-slate-200" : ""}
                    onSelect={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { SelectValue, SearchInput, Badge, SearchSelect, Combobox };
