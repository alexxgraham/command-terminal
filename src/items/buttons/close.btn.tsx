import { cn } from '@ag108/ct-utils';
import { DispatchAction } from '@ag108/ct-utils/types/dispatch';

export const CloseButton = ({ setOpen }: { setOpen: DispatchAction<boolean> }) => {
	return (
		<button onClick={() => setOpen(false)} className={cn('ct-utils_outline-none', 'ct-utils_hover ct-utils_text-destructive')}>
			X
		</button>
	);
};
