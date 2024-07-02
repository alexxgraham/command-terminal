import { UtilClasses, UtilClassValues } from '@ag108/ct-utils/types/styles';

import { TerminalProps, Z_INDEX } from 'types/terminal';

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

export const getZ = (z_index?: Z_INDEX): UtilClassValues => {
	if (z_index === -50) {
		return 'ct-utils_-z-50';
	} else if (z_index === -40) {
		return 'ct-utils_-z-40';
	} else if (z_index === -30) {
		return 'ct-utils_-z-30';
	} else if (z_index === -20) {
		return 'ct-utils_-z-20';
	} else if (z_index === -10) {
		return 'ct-utils_-z-10';
	} else if (z_index === 10) {
		return 'ct-utils_z-10';
	} else if (z_index === 20) {
		return 'ct-utils_z-20';
	} else if (z_index === 30) {
		return 'ct-utils_z-30';
	} else if (z_index === 40) {
		return 'ct-utils_z-40';
	} else if (z_index === 50) {
		return 'ct-utils_z-50';
	} else {
		return 'ct-utils_z-0';
	}
};
