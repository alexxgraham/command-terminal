/* eslint-disable jsx-a11y/no-autofocus */

import { IndexDatetime, Absolute, Relative, Special, Custom } from "@ag108/ct-datetime_libs";
import { IndexFilesys, Image, Pdf, Other } from "@ag108/ct-filesys_libs";
import { IndexMath, Chain, Arithmetic, Geometry, Algebra, Calculus, Matrix, Algorithm } from "@ag108/ct-math_libs";
import { IndexEmote, Faces, FoodAndBev, Nature, Objects, Hearts, Flags, MoreText } from "@ag108/ct-symbols_libs";
import { IndexPaint, Red, Blue, Green, Yellow, Magenta, Cyan } from "@ag108/ct-txtpaint_libs";
import { MainState, cn } from "@ag108/ct-utils";
import { useEffect, useState } from "react";

import { Popup } from "types/main";

import { IndexMain } from "~/popups/terminal/main";
import { CloseButton, TextInput } from "~/items/_main.itm";

export const CommandMenuPopup = ({ open, setOpen }: Popup) => {
  const [tab, setTab] = useState(MainState);
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
  const hoverCheatClass = "hover:underline uppercase outline-none";
  return (
    <div
      className={cn(
        !open
          ? hideClass
          : "grid place-items-center bg-[#00000080] absolute h-full w-full top-0 left-0",
      )}
    >
      <div className="h-60 w-1/2 bg-secondary text-muted rounded-lg p-4">
        <article className="flex justify-between">
          <TextInput autoFocus placeholder="Search for commands..." />
          <CloseButton setOpen={setOpen} />
        </article>
        <span className="w-full border-t-2 border-muted flex" />
        {tab.main ? (
          <IndexMain hoverClass={hoverCheatClass} setTab={setTab} />
        ) : null}

        {tab.math.index ? <IndexMath setTab={setTab} /> : null}
        {tab.math.chain ? <Chain setTab={setTab} /> : null}
        {tab.math.arithmetic ? <Arithmetic setTab={setTab} /> : null}
        {tab.math.geometry ? <Geometry setTab={setTab} /> : null}
        {tab.math.algebra ? <Algebra setTab={setTab} /> : null}
        {tab.math.calculus ? <Calculus setTab={setTab} /> : null}
        {tab.math.matrix ? <Matrix setTab={setTab} /> : null}
        {tab.math.algorithm ? <Algorithm setTab={setTab} /> : null}

        {tab.time.index ? <IndexDatetime setTab={setTab} /> : null}
        {tab.time.relative ? <Relative setTab={setTab} /> : null}
        {tab.time.absolute ? <Absolute setTab={setTab} /> : null}
        {tab.time.special ? <Special setTab={setTab} /> : null}
        {tab.time.custom ? <Custom setTab={setTab} /> : null}

        {tab.file.index ? <IndexFilesys setTab={setTab} /> : null}
        {tab.file.image ? <Image setTab={setTab} /> : null}
        {tab.file.pdf ? <Pdf setTab={setTab} /> : null}
        {tab.file.other ? <Other setTab={setTab} /> : null}

        {tab.paint.index ? <IndexPaint setTab={setTab} /> : null}
        {tab.paint.red ? <Red setTab={setTab} /> : null}
        {tab.paint.blue ? <Blue setTab={setTab} /> : null}
        {tab.paint.green ? <Green setTab={setTab} /> : null}
        {tab.paint.yellow ? <Yellow setTab={setTab} /> : null}
        {tab.paint.magenta ? <Magenta setTab={setTab} /> : null}
        {tab.paint.cyan ? <Cyan setTab={setTab} /> : null}

        {tab.emote.index ? <IndexEmote setTab={setTab} /> : null}
        {tab.emote.faces ? <Faces setTab={setTab} /> : null}
        {tab.emote.foodBev ? <FoodAndBev setTab={setTab} /> : null}
        {tab.emote.nature ? <Nature setTab={setTab} /> : null}
        {tab.emote.objects ? <Objects setTab={setTab} /> : null}
        {tab.emote.hearts ? <Hearts setTab={setTab} /> : null}
        {tab.emote.flags ? <Flags setTab={setTab} /> : null}
        {tab.emote.moreSymbols ? <MoreText setTab={setTab} /> : null}
      </div>
    </div>
  );
};