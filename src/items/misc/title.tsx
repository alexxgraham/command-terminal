import { cn } from '@ag108/ct-utils';

export const PopupTitle = ({ title, pad }: { title: string; pad?: boolean }) => {
	const titleClass = cn(pad ? ['ct-utils_pad-x-10', 'ct-utils_underlines', 'ct-utils_underline-offset-8'] : ['ct-utils_underlines', 'ct-utils_underline-offset-8']);
	return <p className={titleClass}>{title}</p>;
};
