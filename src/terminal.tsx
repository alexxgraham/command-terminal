import { cn } from '@ag108/ct-utils';

import { TerminalProps } from 'types/terminal';

import { CommandMenu, ProfileHub, SearchBar } from './items/_main.itm';
import { getThemeClass, getZ } from './popups/terminal/options';

export const Terminal = ({ root_z_index, modal_z_index, theme_a1, theme_v1, theme_v2, theme_uppercase, theme_capitalize, theme_lowercase, theme_roundness, datetime_pack, filesys_pack, math_pack, symbols_pack, txtpaint_pack }: TerminalProps) => {
	const themeClasses = { theme_a1, theme_v1, theme_v2 };
	// const themeTextCases = { theme_uppercase, theme_capitalize, theme_lowercase };
	// theme_roundness;
	return (
		<section className={cn(getZ(root_z_index), getThemeClass(themeClasses), 'ct-utils_shrink-0', 'ct-utils_bg-secondary', 'ct-utils_w-15rem', 'ct-utils_h-3rem', 'ct-utils_rounded-3xl', 'ct-utils_flex', 'ct-utils_justify-center', 'ct-utils_items-center', 'ct-utils_gap-6')}>
			<CommandMenu modal_z_index={modal_z_index} theme_a1={theme_a1} theme_v1={theme_v1} theme_v2={theme_v2} theme_uppercase={theme_uppercase} theme_capitalize={theme_capitalize} theme_lowercase={theme_lowercase} theme_roundness={theme_roundness} datetime_pack={datetime_pack} filesys_pack={filesys_pack} math_pack={math_pack} symbols_pack={symbols_pack} txtpaint_pack={txtpaint_pack} />
			<ProfileHub modal_z_index={modal_z_index} theme_a1={theme_a1} theme_v1={theme_v1} theme_v2={theme_v2} theme_uppercase={theme_uppercase} theme_capitalize={theme_capitalize} theme_lowercase={theme_lowercase} theme_roundness={theme_roundness} datetime_pack={datetime_pack} filesys_pack={filesys_pack} math_pack={math_pack} symbols_pack={symbols_pack} txtpaint_pack={txtpaint_pack} />
			<SearchBar modal_z_index={modal_z_index} theme_a1={theme_a1} theme_v1={theme_v1} theme_v2={theme_v2} theme_uppercase={theme_uppercase} theme_capitalize={theme_capitalize} theme_lowercase={theme_lowercase} theme_roundness={theme_roundness} datetime_pack={datetime_pack} filesys_pack={filesys_pack} math_pack={math_pack} symbols_pack={symbols_pack} txtpaint_pack={txtpaint_pack} />
		</section>
	);
};
