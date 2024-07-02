import { useEffect, useState } from 'react';

import { DrawerMagGlassIcon } from '../icons/_main.icn';
import { SearchBarPopup } from '~/popups/_main.pup';
import { cn } from '@ag108/ct-utils';
import { TerminalProps } from 'types/terminal';

export const SearchBar = ({ modal_z_index, theme_a1, theme_v1, theme_v2, theme_uppercase, theme_capitalize, theme_lowercase, theme_roundness, datetime_pack, filesys_pack, math_pack, symbols_pack, txtpaint_pack }: TerminalProps) => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'o' && e.ctrlKey) {
				e.preventDefault();
				setOpen(true);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, [setOpen]);
	return (
		<>
			{open ? <SearchBarPopup open setOpen={setOpen} modal_z_index={modal_z_index} /> : null}
			<button onClick={() => setOpen(true)} className={cn('ct-utils_outline-none', 'ct-utils_cursor-pointer')}>
				<DrawerMagGlassIcon />
			</button>
		</>
	);
};
