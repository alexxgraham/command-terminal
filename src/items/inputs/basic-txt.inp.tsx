import { cn } from '@ag108/ct-utils';

import { TextInputField } from 'types/main';

export const TextInput = ({ placeholder, autoFocus = false }: TextInputField) => {
	return <input autoFocus={autoFocus} className={cn('ct-utils_outline-none', 'ct-utils_cursor-text', 'ct-utils_bg-transparent', 'ct-utils_w-full', 'ct-utils_placeholder ct-utils_italic', 'ct-utils_placeholder ct-utils_text-muted', 'ct-utils_caret ct-utils_text-muted', 'ct-utils_color-accent', 'ct-utils_base-text')} type='text' placeholder={placeholder} />;
};
