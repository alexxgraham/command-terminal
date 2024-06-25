import { DispatchAction } from '@ag108/ct-utils/types/dispatch';

export interface Popup {
	open: boolean;
	setOpen: DispatchAction<boolean>;
}

export interface TextInputField {
	placeholder: string;
	autoFocus?: boolean;
}
