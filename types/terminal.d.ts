export type Z_INDEX = -50 | -40 | -30 | -20 | -10 | 0 | 10 | 20 | 30 | 40 | 50;

export interface TerminalProps {
	root_z_index?: Z_INDEX;
	modal_z_index?: Z_INDEX;

	theme_a1?: boolean;
	theme_v1?: boolean;
	theme_v2?: boolean;

	theme_uppercase?: boolean;
	theme_capitalize?: boolean;
	theme_lowercase?: boolean;

	theme_roundness?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

	datetime_pack?: boolean;
	filesys_pack?: boolean;
	math_pack?: boolean;
	symbols_pack?: boolean;
	txtpaint_pack?: boolean;
}
