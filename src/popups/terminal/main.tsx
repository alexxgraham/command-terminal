import { PackageItems } from '@ag108/ct-utils/types/main';
import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';

import { cn, CommandListButton } from '@ag108/ct-utils';
import { UtilClassValues } from '@ag108/ct-utils/types/styles';

const cheatHoverClass: UtilClassValues = ['ct-utils_hover ct-utils_underline', 'ct-utils_uppercase', 'ct-utils_outline-none'];
const packages: PackageItems[] = [
	{
		doubleOpt: 'datetime',
		doubleName: ['date', 'time'],
		kind: 'double',
		utilityClass: [...cheatHoverClass, 'ct-utils_text-cyan'],
	},
	{
		name: 'attachments',
		singleOpt: 'filesys',
		kind: 'single',
		utilityClass: [...cheatHoverClass, 'ct-utils_text-red'],
	},
	{
		singleOpt: 'math',
		kind: 'single',
		utilityClass: [...cheatHoverClass, 'ct-utils_text-light_blue'],
	},
	{
		multiOpt: 'txtpaint',
		kind: 'multi',
		utilityClass: [...cheatHoverClass, 'ct-utils_text-colors'],
	},
	{
		doubleOpt: 'symbols',
		doubleName: ['symbols', 'emoticons'],
		kind: 'double',
		utilityClass: [...cheatHoverClass, 'ct-utils_text-yellow'],
	},
];

export const IndexMain = ({ setTab }: { setTab: TabDispatchAction }) => {
	return (
		<article className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-top-2')}>
			<p className={cn('ct-utils_color-accent', 'ct-utils_uppercase')}>categories:</p>
			<ol className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-x-4', 'ct-utils_items-start')}>
				{packages.map((pkg, i) => (
					<CommandListButton key={i + 1} pkgStuff={pkg} setTab={setTab} />
				))}
			</ol>
		</article>
	);
};
