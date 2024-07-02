import { DispatchAction } from '@ag108/ct-utils/types/dispatch';
import { Z_INDEX } from './terminal';

export interface Popup {
	open: boolean;
	setOpen: DispatchAction<boolean>;
}

export interface TextInputField {
	placeholder: string;
	autoFocus?: boolean;
}
