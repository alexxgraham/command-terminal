import { useEffect, useState } from "react";

import { DrawerMagGlassIcon } from "../icons/_main.icn";
import { SearchBarPopup } from "~/popups/_main.pup";

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "o" && e.ctrlKey) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);
  return (
    <>
      {open ? <SearchBarPopup open setOpen={setOpen} /> : null}
      <button
        onClick={() => setOpen(true)}
        className="outline-none hover:cursor-pointer"
      >
        <DrawerMagGlassIcon />
      </button>
    </>
  );
};