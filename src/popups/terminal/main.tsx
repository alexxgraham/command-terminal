import { PackageItems } from '@ag108/ct-utils/types/main';
import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';

import { cn, CommandListButton } from '@ag108/ct-utils';
import { UtilClassValues } from '@ag108/ct-utils/types/styles';

const packages: PackageItems[] = [
	{
		singleOpt: 'math',
		kind: 'single',
		singleClass: 'text-light_blue',
		doubleClass: {
			main: 'ct-utils_hidden',
			secondary: 'ct-utils_hidden',
		},
		multiClass: {
			main: 'ct-utils_hidden',
			secondary: 'ct-utils_hidden',
		},
	},
	{
		doubleOpt: 'datetime',
		doubleName: ['date', 'time'],
		kind: 'double',
		singleClass: 'ct-utils_hidden',
		doubleClass: {
			main: 'text-cyan',
			secondary: 'ct-utils_cursor-pointer',
		},
		multiClass: {
			main: 'ct-utils_hidden',
			secondary: 'ct-utils_hidden',
		},
	},
	{
		name: 'attachments',
		singleOpt: 'filesys',
		kind: 'single',
		singleClass: 'text-red',
		doubleClass: {
			main: 'ct-utils_hidden',
			secondary: 'ct-utils_hidden',
		},
		multiClass: {
			main: 'ct-utils_hidden',
			secondary: 'ct-utils_hidden',
		},
	},
	{
		name: 'txtpaint',
		kind: 'multi',
		singleClass: 'ct-utils_hidden',
		doubleClass: {
			main: 'ct-utils_hidden',
			secondary: 'ct-utils_hidden',
		},
		multiClass: {
			main: 'text-colors',
			secondary: 'ct-utils_cursor-pointer',
		},
	},
	{
		doubleOpt: 'symbols',
		doubleName: ['symbol', 'emoticon'],
		kind: 'double',
		singleClass: 'ct-utils_hidden',
		doubleClass: {
			main: 'text-yellow',
			secondary: 'ct-utils_cursor-pointer',
		},
		multiClass: {
			main: 'ct-utils_hidden',
			secondary: 'ct-utils_hidden',
		},
	},
];

export const IndexMain = ({ hoverClass, setTab }: { hoverClass: UtilClassValues; setTab: TabDispatchAction }) => {
	return (
		<article className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-top-2')}>
			<p className={cn('ct-utils_text-accent', 'ct-utils_uppercase')}>categories:</p>
			<ol className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-x-4', 'ct-utils_items-start')}>
				{packages.map((pkg, i) => (
					<CommandListButton key={i + 1} index={i + 1} pkgStuff={pkg} hoverClass={hoverClass} setTab={setTab} />
				))}
			</ol>
		</article>
	);
};
