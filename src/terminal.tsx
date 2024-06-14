import { cn } from '@ag108/ct-utils';
import { CommandMenu, ProfileHub, SearchBar } from './items/_main.itm';

export const Terminal = () => {
	return (
		<section className={cn('ct-utils_terminal-a1', 'ct-utils_shrink-0', 'ct-utils_bg-secondary', 'ct-utils_w-15rem', 'ct-utils_h-3rem', 'ct-utils_rounded-3xl', 'ct-utils_flex', 'ct-utils_justify-center', 'ct-utils_items-center', 'ct-utils_gap-6')}>
			<CommandMenu />
			<ProfileHub />
			<SearchBar />
		</section>
	);
};
