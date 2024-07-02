/* eslint-disable jsx-a11y/no-autofocus */

import { IndexDatetime, Absolute, Relative, Special, Custom } from '@ag108/ct-datetime_libs';
import { IndexFilesys, Image, Pdf, Other } from '@ag108/ct-filesys_libs';
import { IndexMath, Chain, Arithmetic, Geometry, Algebra, Calculus, Matrix, Algorithm } from '@ag108/ct-math_libs';
import { IndexEmote, Faces, FoodAndBev, Nature, Objects, Hearts, Flags, MoreText } from '@ag108/ct-symbols_libs';
import { IndexPaint, Red, Blue, Green, Yellow, Magenta, Cyan } from '@ag108/ct-txtpaint_libs';
import { cn, MainState } from '@ag108/ct-utils';
import { useEffect, useState } from 'react';

import { Popup } from 'types/main';

import { IndexMain } from '~/popups/terminal/main';
import { CloseButton, TextInput } from '~/items/_main.itm';
import { UtilClassValues } from '@ag108/ct-utils/types/styles';
import { TerminalProps } from 'types/terminal';
import { getZ } from './terminal/options';

export const CommandMenuPopup = ({ open, setOpen, z_index, theme_a1, theme_v1, theme_v2, theme_uppercase, theme_capitalize, theme_lowercase, theme_roundness, datetime_pack, filesys_pack, math_pack, symbols_pack, txtpaint_pack }: Popup & TerminalProps) => {
	const [tab, setTab] = useState(MainState);
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				setOpen((open: boolean) => !open);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, [setOpen]);
	let hideClass: UtilClassValues = 'ct-utils_hidden';
	if (open) {
		hideClass = '' as UtilClassValues;
	}
	return (
		<div className={cn(!open ? hideClass : 'ct-utils_grid', 'ct-utils_place-items-center', 'ct-utils_bg-fade', 'ct-utils_absolute', 'ct-utils_h-full', 'ct-utils_w-full', 'ct-utils_top-0', 'ct-utils_left-0')}>
			<div className={cn(getZ(z_index), 'ct-utils_h-15rem', 'ct-utils_w-half', 'ct-utils_bg-secondary', 'ct-utils_color-muted', 'ct-utils_rounded-lg', 'ct-utils_pad-4')}>
				<article className={cn('ct-utils_w-full', 'ct-utils_flex', 'ct-utils_justify-between', 'ct-utils_gap-6')}>
					<TextInput autoFocus placeholder='Search for commands...' />
					<CloseButton setOpen={setOpen} />
				</article>
				<span className={cn('ct-utils_h-p125rem', 'ct-utils_w-full', 'ct-utils_bg-muted', 'ct-utils_block', 'ct-utils_rounded-md')} />
				{tab.main ? <IndexMain setTab={setTab} /> : null}

				{datetime_pack && tab.time.index ? <IndexDatetime setTab={setTab} /> : null}
				{datetime_pack && tab.time.relative ? <Relative setTab={setTab} /> : null}
				{datetime_pack && tab.time.absolute ? <Absolute setTab={setTab} /> : null}
				{datetime_pack && tab.time.special ? <Special setTab={setTab} /> : null}
				{datetime_pack && tab.time.custom ? <Custom setTab={setTab} /> : null}

				{filesys_pack && tab.file.index ? <IndexFilesys setTab={setTab} /> : null}
				{filesys_pack && tab.file.image ? <Image setTab={setTab} /> : null}
				{filesys_pack && tab.file.pdf ? <Pdf setTab={setTab} /> : null}
				{filesys_pack && tab.file.other ? <Other setTab={setTab} /> : null}

				{math_pack && tab.math.index ? <IndexMath setTab={setTab} /> : null}
				{math_pack && tab.math.chain ? <Chain setTab={setTab} /> : null}
				{math_pack && tab.math.arithmetic ? <Arithmetic setTab={setTab} /> : null}
				{math_pack && tab.math.geometry ? <Geometry setTab={setTab} /> : null}
				{math_pack && tab.math.algebra ? <Algebra setTab={setTab} /> : null}
				{math_pack && tab.math.calculus ? <Calculus setTab={setTab} /> : null}
				{math_pack && tab.math.matrix ? <Matrix setTab={setTab} /> : null}
				{math_pack && tab.math.algorithm ? <Algorithm setTab={setTab} /> : null}

				{symbols_pack && tab.emote.index ? <IndexEmote setTab={setTab} /> : null}
				{symbols_pack && tab.emote.faces ? <Faces setTab={setTab} /> : null}
				{symbols_pack && tab.emote.foodBev ? <FoodAndBev setTab={setTab} /> : null}
				{symbols_pack && tab.emote.nature ? <Nature setTab={setTab} /> : null}
				{symbols_pack && tab.emote.objects ? <Objects setTab={setTab} /> : null}
				{symbols_pack && tab.emote.hearts ? <Hearts setTab={setTab} /> : null}
				{symbols_pack && tab.emote.flags ? <Flags setTab={setTab} /> : null}
				{symbols_pack && tab.emote.moreSymbols ? <MoreText setTab={setTab} /> : null}

				{txtpaint_pack && tab.paint.index ? <IndexPaint setTab={setTab} /> : null}
				{txtpaint_pack && tab.paint.red ? <Red setTab={setTab} /> : null}
				{txtpaint_pack && tab.paint.blue ? <Blue setTab={setTab} /> : null}
				{txtpaint_pack && tab.paint.green ? <Green setTab={setTab} /> : null}
				{txtpaint_pack && tab.paint.yellow ? <Yellow setTab={setTab} /> : null}
				{txtpaint_pack && tab.paint.magenta ? <Magenta setTab={setTab} /> : null}
				{txtpaint_pack && tab.paint.cyan ? <Cyan setTab={setTab} /> : null}
			</div>
		</div>
	);
};
