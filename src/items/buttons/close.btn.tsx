import { DispatchAction } from "@ag108/ct-utils/types/dispatch";

export const CloseButton = ({
  setOpen,
}: {
  setOpen: DispatchAction<boolean>;
}) => {
  return (
    <button
      onClick={() => setOpen(false)}
      className="outline-none hover:text-destructive"
    >
      X
    </button>
  );
};