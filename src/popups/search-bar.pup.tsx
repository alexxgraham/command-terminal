import { cn } from '@ag108/ct-utils';
import { UtilClassValues } from '@ag108/ct-utils/types/styles';
import { useEffect } from 'react';

import { Popup } from 'types/main';

import { CloseButton, TextInput } from '~/items/_main.itm';

export const SearchBarPopup = ({ open, setOpen }: Popup) => {
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				setOpen((open: boolean) => !open);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, [setOpen]);
	let hideClass: UtilClassValues = 'ct-utils_hidden';
	if (open) {
		hideClass = '' as UtilClassValues;
	}
	return (
		<div className={cn(!open ? hideClass : 'ct-utils_bg-fade', 'ct-utils_absolute', 'ct-utils_h-full', 'ct-utils_w-full', 'ct-utils_top-0', 'ct-utils_left-0')}>
			<div className={cn('ct-utils_absolute', 'ct-utils_flex', 'ct-utils_items-center', 'ct-utils_justify-between', 'ct-utils_top-20', 'ct-utils_left-quat', 'ct-utils_h-2-5rem', 'ct-utils_w-half', 'ct-utils_bg-secondary', 'ct-utils_color-muted', 'ct-utils_rounded-lg', 'ct-utils_pad-x-4')}>
				<TextInput autoFocus placeholder='Search conversation keywords...' />
				<CloseButton setOpen={setOpen} />
			</div>
		</div>
	);
};
