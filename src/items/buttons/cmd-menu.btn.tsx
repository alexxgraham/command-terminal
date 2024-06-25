import { useEffect, useState } from 'react';

import { DrawerOperationIcon } from '../icons/_main.icn';
import { CommandMenuPopup } from '~/popups/_main.pup';
import { cn } from '@ag108/ct-utils';
import { TerminalProps } from 'types/terminal';

export const CommandMenu = ({ theme_a1, theme_v1, theme_v2, theme_uppercase, theme_capitalize, theme_lowercase, theme_roundness, datetime_pack, filesys_pack, math_pack, symbols_pack, txtpaint_pack }: TerminalProps) => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && e.ctrlKey) {
				e.preventDefault();
				setOpen(true);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, [setOpen]);
	return (
		<>
			{open ? <CommandMenuPopup open setOpen={setOpen} theme_a1={theme_a1} theme_v1={theme_v1} theme_v2={theme_v2} theme_uppercase={theme_uppercase} theme_capitalize={theme_capitalize} theme_lowercase={theme_lowercase} theme_roundness={theme_roundness} datetime_pack={datetime_pack} filesys_pack={filesys_pack} math_pack={math_pack} symbols_pack={symbols_pack} txtpaint_pack={txtpaint_pack} /> : null}
			<button onClick={() => setOpen(true)} className={cn('ct-utils_outline-none', 'ct-utils_cursor-pointer')}>
				<DrawerOperationIcon />
			</button>
		</>
	);
};
