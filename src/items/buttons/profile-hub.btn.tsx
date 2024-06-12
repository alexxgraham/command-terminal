import { useEffect, useState } from 'react';

import { DrawerAvatarIcon } from '../icons/_main.icn';
import { ProfileHubPopup } from '~/popups/_main.pup';
import { cn } from '@ag108/ct-utils';

export const ProfileHub = () => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'p' && e.ctrlKey) {
				e.preventDefault();
				setOpen(true);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, [setOpen]);
	return (
		<>
			{open ? <ProfileHubPopup open setOpen={setOpen} /> : null}
			<button onClick={() => setOpen(true)} className={cn('ct-utils_outline-none', 'ct-utils_cursor-pointer', 'ct-utils_border-x-2', 'ct-utils_pad-x-4', 'ct-utils_border-muted')}>
				<DrawerAvatarIcon />
			</button>
		</>
	);
};
