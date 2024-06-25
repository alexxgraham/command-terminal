import { UtilClasses } from '@ag108/ct-utils/types/styles';

import { TerminalProps } from 'types/terminal';

export const getThemeClass = ({ theme_a1, theme_v1, theme_v2 }: TerminalProps): UtilClasses => {
	if (theme_a1) return 'ct-utils_terminal-a1';
	if (theme_v1) return 'ct-utils_terminal-v1';
	if (theme_v2) return 'ct-utils_terminal-v2';
	return 'ct-utils_terminal-a1';
};

export const getThemeTextCase = ({ theme_uppercase, theme_capitalize, theme_lowercase }: TerminalProps): UtilClasses => {
	if (theme_uppercase) return 'ct-utils_uppercase';
	if (theme_capitalize) return 'ct-utils_capitalize';
	if (theme_lowercase) return 'ct-utils_lowercase';
	return 'ct-utils_uppercase';
};

export const getThemeRoundness = ({ theme_roundness }: TerminalProps): UtilClasses => {
	if (theme_roundness === 'full') return 'ct-utils_rounded-3xl';
	return 'ct-utils_rounded-3xl';
};

export const useTerminalPacks = ({ datetime_pack, filesys_pack, math_pack, symbols_pack, txtpaint_pack }: TerminalProps) => {
	return;
};
