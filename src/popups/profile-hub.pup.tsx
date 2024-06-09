import { cn } from "@ag108/ct-utils";
import { useEffect } from "react";

import { Popup } from "types/main";

import { CloseButton, PopupTitle } from "~/items/_main.itm";

export const ProfileHubPopup = ({ open, setOpen }: Popup) => {
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
          : "bg-[#000000dd] absolute h-full w-full top-0 left-0",
      )}
    >
      <div className="absolute top-20 left-1/4 h-1/4 w-1/2 bg-secondary text-muted rounded-lg p-4">
        <article className="flex justify-between">
          <PopupTitle title="Profile" />
          <CloseButton setOpen={setOpen} />
        </article>
      </div>
    </div>
  );
};