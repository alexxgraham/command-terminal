import { cn } from "@ag108/ct-utils";

import { TextInputField } from "types/main";

export const TextInput = ({
  placeholder,
  autoFocus = false,
  specialClass,
}: TextInputField) => {
  return (
    <input
      autoFocus={autoFocus}
      className={cn(
        specialClass,
        "outline-none cursor-text bg-transparent w-full placeholder:italic placeholder:text-[#AAAAAA] caret-[#AAAAAA] text-white text-base",
      )}
      type="text"
      placeholder={placeholder}
    />
  );
};