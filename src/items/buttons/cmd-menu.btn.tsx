import { useEffect, useState } from 'react';

import { DrawerOperationIcon } from '../icons/_main.icn';
import { CommandMenuPopup } from '~/popups/_main.pup';
import { cn } from '@ag108/ct-utils';

export const CommandMenu = () => {
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
			{open ? <CommandMenuPopup open setOpen={setOpen} /> : null}
			<button onClick={() => setOpen(true)} className={cn('ct-utils_outline-none', 'ct-utils_cursor-pointer')}>
				<DrawerOperationIcon />
			</button>
		</>
	);
};
