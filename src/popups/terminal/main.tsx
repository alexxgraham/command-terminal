import { PackageItems } from '@ag108/ct-utils/types/main'
import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch'

import { CommandListButton } from '@ag108/ct-utils';

const packages: PackageItems[] = [ 
	{
		singleOpt: 'math',
		kind: 'single',
		singleClass: 'hover:text-[#5555FF]',
	},
	{
		doubleOpt: 'datetime',
		doubleName: ['date', 'time'],
		kind: 'double',
		doubleClass: ['group uppercase hover:text-[#00AAAA] outline-none', 'group-hover:underline cursor-pointer'],
	},
	{
		name: 'attachments',
		singleOpt: 'filesys',
		kind: 'single',
		singleClass: 'hover:text-[#AA0000]',
	},
	{
		name: 'txtpaint',
		kind: 'multi',
		multiClass: ['group uppercase outline-none', 'group-hover:underline hover:cursor-pointer', ['group-hover:text-[#FF5555]', 'group-hover:text-[#FFEE00]', 'group-hover:text-[#33FF33]', 'group-hover:text-[#55FFFF]', 'group-hover:text-[#5555FF]', 'group-hover:text-[#FF55FF]']],
	},
	{
		doubleOpt: 'symbols',
		doubleName: ['symbol', 'emoticon'],
		kind: 'double',
		doubleClass: ['group uppercase hover:text-[#FFEE00] outline-none', 'group-hover:underline cursor-pointer'],
	},
]

export const IndexMain = ({hoverClass, setTab}: {hoverClass: string; setTab: TabDispatchAction;}) => {
	return (
		<article className='flex flex-col pt-2'>
			<p className='text-accent uppercase'>categories:</p>
			<ol className='flex flex-col px-4 items-start'>
				{packages.map((pkg, i) => (
					<CommandListButton key={i + 1} index={i + 1} pkgStuff={pkg} hoverClass={hoverClass} setTab={setTab} />
				))}
			</ol>
		</article>
	)
}