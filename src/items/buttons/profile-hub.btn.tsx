import { useEffect, useState } from "react";

import { DrawerAvatarIcon } from "../icons/_main.icn";
import { ProfileHubPopup } from "~/popups/_main.pup";

export const ProfileHub = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "p" && e.ctrlKey) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);
  return (
    <>
      {open ? <ProfileHubPopup open setOpen={setOpen} /> : null}
      <button
        onClick={() => setOpen(true)}
        className="outline-none hover:cursor-pointer border-x-2 px-4 border-[#969696]"
      >
        <DrawerAvatarIcon />
      </button>
    </>
  );
};