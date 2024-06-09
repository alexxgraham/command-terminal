import { cn } from "@ag108/ct-utils";

export const PopupTitle = ({
  title,
  pad,
}: {
  title: string;
  pad?: boolean;
}) => {
  const titleClass = cn(
    pad ? "px-10 underline underline-offset-8" : "underline underline-offset-8",
  );
  return <p className={titleClass}>{title}</p>;
};