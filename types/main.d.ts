import { UtilClassValues } from '@ag108/ct-utils/types/styles';

export interface Popup {
	open: boolean;
	setOpen: DispatchAction<boolean>;
}

export interface TextInputField {
	placeholder: string;
	autoFocus?: boolean;
}
