import { DispatchAction } from '@ag108/ct-utils/types/dispatch';
import { Z_INDEX } from './terminal';

export interface Popup {
	open: boolean;
	setOpen: DispatchAction<boolean>;
	z_index?: Z_INDEX;
}

export interface TextInputField {
	placeholder: string;
	autoFocus?: boolean;
}
