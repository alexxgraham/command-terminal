import { cn } from "@ag108/ct-utils";
import { useEffect } from "react";

import { Popup } from "types/main";

import { CloseButton, TextInput } from "~/items/_main.itm";

export const SearchBarPopup = ({ open, setOpen }: Popup) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen((open: boolean) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);
  let hideClass = "hidden";
  if (open) {
    hideClass = "";
  }
  return (
    <div
      className={cn(
        !open
          ? hideClass
          : "bg-[#00000080] absolute h-full w-full top-0 left-0",
      )}
    >
      <div className="absolute flex items-center justify-between top-20 left-1/4 h-10 w-1/2 bg-secondary text-muted rounded-lg px-4">
        <TextInput autoFocus placeholder="Search conversation keywords..." />
        <CloseButton setOpen={setOpen} />
      </div>
    </div>
  );
};