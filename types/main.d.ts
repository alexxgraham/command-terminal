export interface Popup {
  open: boolean;
  setOpen: DispatchAction<boolean>;
}

export interface TextInputField {
  placeholder: string;
  autoFocus?: boolean;
  specialClass?: string;
}