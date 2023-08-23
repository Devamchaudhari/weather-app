import { FC } from 'react';

interface IProps {
	className?: string;
	width?: string;
	height?: string;
	onClick?: () => void;
}

export const SearchIcon: FC<IProps> = (props) => (
	<svg
		width={props.width || 150}
		height={props.height || 150}
		viewBox='0 0 20 20'
		fill='none'
		className={props.className || ''}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M4.76403 2.8411C5.91019 2.07527 7.2577 1.6665 8.63617 1.6665V2.50296L8.63622 1.6665C10.4846 1.66662 12.2573 2.40096 13.5643 3.70798C14.8714 5.01501 15.6057 6.78769 15.6058 8.63611V8.63617C15.6058 10.0146 15.1971 11.3621 14.4312 12.5083C13.6654 13.6545 12.5769 14.5478 11.3033 15.0753C10.0298 15.6028 8.62844 15.7408 7.27646 15.4719C5.92447 15.203 4.6826 14.5392 3.70787 13.5645C2.73315 12.5897 2.06935 11.3479 1.80043 9.99588C1.5315 8.6439 1.66952 7.24253 2.19704 5.96899C2.72456 4.69545 3.61788 3.60694 4.76403 2.8411ZM8.63617 3.33317C10.0426 3.33327 11.3914 3.89201 12.3858 4.8865C13.3803 5.88098 13.9391 7.22976 13.9392 8.63617M8.63612 3.33317C7.5873 3.33318 6.56204 3.6442 5.68998 4.22689C4.81791 4.80959 4.13821 5.6378 3.73684 6.6068C3.33547 7.57579 3.23045 8.64205 3.43507 9.67073C3.63969 10.6994 4.14475 11.6443 4.88639 12.3859C5.62802 13.1276 6.57293 13.6326 7.60161 13.8373C8.63029 14.0419 9.69654 13.9369 10.6655 13.5355C11.6345 13.1341 12.4627 12.4544 13.0454 11.5824C13.6281 10.7103 13.9392 9.68503 13.9392 8.63622'
			fill='black'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12.6254 12.6254C12.9509 12.3 13.4785 12.3 13.8039 12.6254L18.0895 16.911C18.4149 17.2364 18.4149 17.764 18.0895 18.0895C17.764 18.4149 17.2364 18.4149 16.911 18.0895L12.6254 13.8039C12.3 13.4785 12.3 12.9509 12.6254 12.6254Z'
			fill='black'
		/>
	</svg>
);

/**weather icons below */
export const ClearSkyIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='150' x2='234' y1='119.2' y2='264.8' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#fbbf24' />
				<stop offset='.5' stopColor='#fbbf24' />
				<stop offset='1' stopColor='#f59e0b' />
			</linearGradient>
			<symbol id='b' viewBox='0 0 384 384'>
				<circle
					cx='192'
					cy='192'
					r='84'
					fill='url(#a)'
					stroke='#f8af18'
					strokeMiterlimit='10'
					strokeWidth='6'
				/>
				<path
					fill='none'
					stroke='#fbbf24'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7'
				>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='rotate'
						values='0 192 192; 45 192 192'
					/>
				</path>
			</symbol>
		</defs>
		<use xlinkHref='#b' width='384' height='384' transform='translate(64 64)' />
	</svg>
);

export const CloudIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<symbol id='b' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
		</defs>
		<use xlinkHref='#b' width='350' height='222' transform='translate(81 145)'>
			<animateTransform
				additive='sum'
				attributeName='transform'
				dur='6s'
				repeatCount='indefinite'
				type='translate'
				values='-18 0; 18 0; -18 0'
			/>
		</use>
	</svg>
);

export const CompassIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='184' x2='328' y1='131.3' y2='380.7' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#6b7280' />
				<stop offset='.5' stopColor='#6b7280' />
				<stop offset='1' stopColor='#374151' />
			</linearGradient>
		</defs>
		<circle cx='256' cy='256' r='144' fill='url(#a)' stroke='#e5e7eb' strokeMiterlimit='10' strokeWidth='12' />
		<path
			fill='#9ca3af'
			d='M259.2 152v-10.4h4.6v18h-4.7l-6.3-10.4v10.4h-4.6v-18h4.7Zm103.3 105.7v3.3h9.8v4h-14.5v-18H372v4h-9.5v3h8.3v3.8Zm-106.4 116a8.4 8.4 0 01-5.4-1.6 5.8 5.8 0 01-2-4.4h4.4c0 1.6 1.1 2.4 3.1 2.4 1.8 0 2.6-.6 2.6-1.7a1.3 1.3 0 00-.4-1 4.6 4.6 0 00-1.6-.7l-3.4-.7c-2.9-.7-4.4-2.4-4.4-4.9a5 5 0 011.7-3.9 7.5 7.5 0 015.1-1.5 8 8 0 015 1.5 5.2 5.2 0 012 4h-4.3c-.2-1.4-1-2-2.7-2a2.9 2.9 0 00-1.6.4 1.3 1.3 0 00-.6 1c0 .8.5 1.3 1.6 1.6l3.5.8q4.7 1.1 4.7 5.1a4.9 4.9 0 01-2 4.1 8.5 8.5 0 01-5.3 1.5ZM156.2 255l2-8h4.7l-5.2 18h-4.5l-2.5-11.5-2.3 11.5h-4.6l-5.2-18h4.7l2 8 .9 4.2.7-4.3 1.7-7.9h4.4l1.8 8 .6 4.1Z'
		/>
		<g>
			<path fill='#ef4444' d='m256 172-24 84h48l-24-84z' />
			<path fill='#fff' d='m232 256 24 84 24-84h-48z' />
			<animateTransform
				additive='sum'
				attributeName='transform'
				calcMode='spline'
				dur='2s'
				keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
				repeatCount='indefinite'
				type='rotate'
				values='-6 256 256; 6 256 256; -6 256 256'
			/>
		</g>
	</svg>
);

export const DrizzleIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<linearGradient
				id='b'
				x1='1314.8'
				x2='1324.2'
				y1='-739.9'
				y2='-715.3'
				gradientTransform='rotate(-9 7682.04 6929.539)'
				gradientUnits='userSpaceOnUse'
			>
				<stop offset='0' stopColor='#0b65ed' />
				<stop offset='.5' stopColor='#0a5ad4' />
				<stop offset='1' stopColor='#0950bc' />
			</linearGradient>
			<linearGradient xlinkHref='#b' id='c' x1='1370.1' x2='1379.5' y1='-731.1' y2='-706.5' />
			<linearGradient xlinkHref='#b' id='d' x1='1425.4' x2='1434.9' y1='-722.4' y2='-697.8' />
			<symbol id='e' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
		</defs>
		<use xlinkHref='#e' width='350' height='222' transform='translate(81 145)' />
		<path
			fill='url(#b)'
			stroke='#0a5ad4'
			strokeMiterlimit='10'
			d='M200 376a8 8 0 01-8-8v-12a8 8 0 0116 0v12a8 8 0 01-8 8Z'
			opacity='0'
		>
			<animateTransform
				id='x1'
				additive='sum'
				attributeName='transform'
				begin='0s; x1.end+1s'
				dur='1s'
				keyTimes='0; .25; 1'
				type='translate'
				values='0 -32; 0 -32; 0 120;'
			/>
			<animate
				id='y1'
				attributeName='opacity'
				begin='0s; y1.end+1s'
				dur='1s'
				keyTimes='0; .25; 1'
				values='0; 1; 0'
			/>
		</path>
		<path
			fill='url(#c)'
			stroke='#0a5ad4'
			strokeMiterlimit='10'
			d='M256 376a8 8 0 01-8-8v-12a8 8 0 0116 0v12a8 8 0 01-8 8Z'
			opacity='0'
		>
			<animateTransform
				id='x2'
				additive='sum'
				attributeName='transform'
				begin='1.34s; x2.end+1s'
				dur='1s'
				keyTimes='0; .25; 1'
				type='translate'
				values='0 -32; 0 -32; 0 120;'
			/>
			<animate
				id='y2'
				attributeName='opacity'
				begin='1.34s; y2.end+1s'
				dur='1s'
				keyTimes='0; .25; 1'
				values='0; 1; 0'
			/>
		</path>
		<path
			fill='url(#d)'
			stroke='#0a5ad4'
			strokeMiterlimit='10'
			d='M312 376a8 8 0 01-8-8v-12a8 8 0 0116 0v12a8 8 0 01-8 8Z'
			opacity='0'
		>
			<animateTransform
				id='x3'
				additive='sum'
				attributeName='transform'
				begin='.67s; x3.end+1s'
				dur='1s'
				keyTimes='0; .25; 1'
				type='translate'
				values='0 -32; 0 -32; 0 120;'
			/>
			<animate
				id='y3'
				attributeName='opacity'
				begin='.67s; y3.end+1s'
				dur='1s'
				keyTimes='0; .25; 1'
				values='0; 1; 0'
			/>
		</path>
	</svg>
);

export const DustIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='138.5' x2='224.2' y1='5.1' y2='153.5' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#d4d7dd' />
				<stop offset='.5' stopColor='#d4d7dd' />
				<stop offset='1' stopColor='#bec1c6' />
			</linearGradient>
			<linearGradient xlinkHref='#a' id='b' x1='77.7' x2='169' y1='96.2' y2='254.4' />
			<linearGradient id='c' x1='90' x2='102' y1='185.6' y2='206.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#fde68a' />
				<stop offset='.5' stopColor='#fde68a' />
				<stop offset='1' stopColor='#fde171' />
			</linearGradient>
			<linearGradient xlinkHref='#c' id='d' x1='174' x2='186' y1='185.6' y2='206.4' />
			<linearGradient xlinkHref='#c' id='e' x1='258' x2='270' y1='185.6' y2='206.4' />
			<linearGradient xlinkHref='#c' id='f' x1='216' x2='228' y1='245.6' y2='266.4' />
			<linearGradient xlinkHref='#c' id='g' x1='300' x2='312' y1='245.6' y2='266.4' />
			<linearGradient xlinkHref='#c' id='h' x1='384' x2='396' y1='245.6' y2='266.4' />
			<linearGradient xlinkHref='#c' id='i' x1='166' x2='178' y1='305.6' y2='326.4' />
			<linearGradient xlinkHref='#c' id='j' x1='250' x2='262' y1='305.6' y2='326.4' />
			<linearGradient xlinkHref='#c' id='k' x1='334' x2='346' y1='305.6' y2='326.4' />
			<symbol id='l' viewBox='0 0 348 240'>
				<path
					fill='none'
					stroke='url(#a)'
					strokeDasharray='148'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M267.2 24.3A40 40 0 11296 92H12'
				>
					<animate attributeName='stroke-dashoffset' dur='6s' repeatCount='indefinite' values='0; 2960' />
				</path>
				<path
					fill='none'
					stroke='url(#b)'
					strokeDasharray='110'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M151.2 215.7A40 40 0 10180 148H12'
				>
					<animate attributeName='stroke-dashoffset' dur='6s' repeatCount='indefinite' values='0; 1540' />
				</path>
			</symbol>
		</defs>
		<g opacity='0'>
			<circle cx='96' cy='196' r='12' fill='url(#c)' />
			<circle cx='222' cy='256' r='12' fill='url(#f)' />
			<circle cx='172' cy='316' r='12' fill='url(#i)' />
			<animateTransform
				id='x1'
				additive='sum'
				attributeName='transform'
				begin='1s; x1.end+1.17s'
				dur='.83s'
				type='translate'
				values='-24 0; 24 0'
			/>
			<animate
				id='y1'
				attributeName='opacity'
				begin='1s; y1.end+1.17s'
				dur='.83s'
				keyTimes='0; .17; .83; 1'
				values='0; 1; 1; 0'
			/>
		</g>
		<g opacity='0'>
			<circle cx='180' cy='196' r='12' fill='url(#d)' />
			<circle cx='306' cy='256' r='12' fill='url(#g)' />
			<circle cx='256' cy='316' r='12' fill='url(#j)' />
			<animateTransform
				id='x2'
				additive='sum'
				attributeName='transform'
				begin='.5s; x2.end+1.17s'
				dur='.83s'
				type='translate'
				values='-24 0; 24 0'
			/>
			<animate
				id='y2'
				attributeName='opacity'
				begin='.5s; y2.end+1.17s'
				dur='.83s'
				keyTimes='0; .17; .83; 1'
				values='0; 1; 1; 0'
			/>
		</g>
		<g opacity='0'>
			<circle cx='264' cy='196' r='12' fill='url(#e)' />
			<circle cx='390' cy='256' r='12' fill='url(#h)' />
			<circle cx='340' cy='316' r='12' fill='url(#k)' />
			<animateTransform
				id='x3'
				additive='sum'
				attributeName='transform'
				begin='0s; x3.end+1.17s'
				dur='.83s'
				type='translate'
				values='-24 0; 24 0'
			/>
			<animate
				id='y3'
				attributeName='opacity'
				begin='0s; y3.end+1.17s'
				dur='.83s'
				keyTimes='0; .17; .83; 1'
				values='0; 1; 1; 0'
			/>
		</g>
		<use xlinkHref='#l' width='348' height='240' transform='translate(83 136)' />
	</svg>
);

export const FogIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<linearGradient id='b' x1='96' x2='168' y1='-2.4' y2='122.3' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#d4d7dd' />
				<stop offset='.5' stopColor='#d4d7dd' />
				<stop offset='1' stopColor='#bec1c6' />
			</linearGradient>
			<linearGradient xlinkHref='#b' id='c' x2='168' y1='-50.4' y2='74.3' />
			<symbol id='d' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='e' overflow='visible' viewBox='0 0 264 72'>
				<path
					fill='none'
					stroke='url(#b)'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M12 60h240'
				>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='-24 0; 24 0; -24 0'
					/>
				</path>
				<path
					fill='none'
					stroke='url(#c)'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M12 12h240'
				>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='24 0; -24 0; 24 0'
					/>
				</path>
			</symbol>
		</defs>
		<use xlinkHref='#d' width='350' height='222' transform='translate(81 145)' />
		<use xlinkHref='#e' width='264' height='72' transform='translate(124 402)' />
	</svg>
);

export const HumidityIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='14.8' x2='124.2' y1='42.3' y2='231.7' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#3392d6' />
				<stop offset='.5' stopColor='#3392d6' />
				<stop offset='1' stopColor='#2477b2' />
			</linearGradient>
			<symbol id='b' viewBox='0 0 164 245.6'>
				<path
					fill='url(#a)'
					stroke='#2885c7'
					strokeMiterlimit='10'
					strokeWidth='4'
					d='M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z'
				>
					<animateTransform
						additive='sum'
						attributeName='transform'
						calcMode='spline'
						dur='6s'
						keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
						repeatCount='indefinite'
						type='scale'
						values='1 1; 1 .9; 1 1'
					/>
				</path>
			</symbol>
		</defs>
		<use xlinkHref='#b' width='164' height='245.6' transform='translate(173.9 133.01)' />
		<path
			fill='#fff'
			d='M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 01-.6 2.6l-53 73.3a9.4 9.4 0 01-2.8 2.8 12.3 12.3 0 01-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 01.7-2.8l53-73.3a7 7 0 012.6-2.7 12.7 12.7 0 014.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z'
		/>
	</svg>
);

export const MistIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='220' x2='292' y1='137.7' y2='262.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#d4d7dd' />
				<stop offset='.5' stopColor='#d4d7dd' />
				<stop offset='1' stopColor='#bec1c6' />
			</linearGradient>
			<linearGradient xlinkHref='#a' id='b' y1='193.7' y2='318.4' />
			<linearGradient xlinkHref='#a' id='c' y1='249.7' y2='374.4' />
		</defs>
		<path
			fill='none'
			stroke='url(#a)'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='24'
			d='M136 200h240'
		>
			<animateTransform
				additive='sum'
				attributeName='transform'
				dur='6s'
				repeatCount='indefinite'
				type='translate'
				values='-48 0; 48 0; -48 0'
			/>
		</path>
		<path
			fill='none'
			stroke='url(#b)'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='24'
			d='M136 256h240'
		>
			<animateTransform
				additive='sum'
				attributeName='transform'
				begin='-1.5s'
				dur='6s'
				repeatCount='indefinite'
				type='translate'
				values='-48 0; 48 0; -48 0'
			/>
		</path>
		<path
			fill='none'
			stroke='url(#c)'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='24'
			d='M136 312h240'
		>
			<animateTransform
				additive='sum'
				attributeName='transform'
				dur='6s'
				repeatCount='indefinite'
				type='translate'
				values='48 0; -48 0; 48 0'
			/>
		</path>
	</svg>
);

export const RainIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<linearGradient
				id='b'
				x1='1381.3'
				x2='1399.5'
				y1='-1144.7'
				y2='-1097.4'
				gradientTransform='rotate(-9 8002.567 8233.063)'
				gradientUnits='userSpaceOnUse'
			>
				<stop offset='0' stopColor='#0b65ed' />
				<stop offset='.5' stopColor='#0a5ad4' />
				<stop offset='1' stopColor='#0950bc' />
			</linearGradient>
			<linearGradient
				xlinkHref='#b'
				id='c'
				x1='1436.7'
				x2='1454.9'
				y1='-1137'
				y2='-1089.7'
				gradientTransform='rotate(-9 8009.537 8233.037)'
			/>
			<linearGradient
				xlinkHref='#b'
				id='d'
				x1='1492.1'
				x2='1510.3'
				y1='-1129.3'
				y2='-1082.1'
				gradientTransform='rotate(-9 8016.566 8233.078)'
			/>
			<symbol id='e' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='f' overflow='visible' viewBox='0 0 129 57'>
				<path
					fill='url(#b)'
					stroke='#0a5ad4'
					strokeMiterlimit='10'
					d='M8.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z'
					opacity='0'
				>
					<animateTransform
						id='x1'
						additive='sum'
						attributeName='transform'
						begin='0s; x1.end+.33s'
						dur='.67s'
						type='translate'
						values='0 -60; 0 60'
					/>
					<animate
						id='y1'
						attributeName='opacity'
						begin='0s; y1.end+.33s'
						dur='.67s'
						keyTimes='0; .25; 1'
						values='0; 1; 0'
					/>
				</path>
				<path
					fill='url(#c)'
					stroke='#0a5ad4'
					strokeMiterlimit='10'
					d='M64.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z'
					opacity='0'
				>
					<animateTransform
						id='x2'
						additive='sum'
						attributeName='transform'
						begin='.33s; x2.end+.33s'
						dur='.67s'
						type='translate'
						values='0 -60; 0 60'
					/>
					<animate
						id='y2'
						attributeName='opacity'
						begin='.33s; y2.end+.33s'
						dur='.67s'
						keyTimes='0; .25; 1'
						values='0; 1; 0'
					/>
				</path>
				<path
					fill='url(#d)'
					stroke='#0a5ad4'
					strokeMiterlimit='10'
					d='M120.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z'
					opacity='0'
				>
					<animateTransform
						id='x3'
						additive='sum'
						attributeName='transform'
						begin='-.33s; x3.end+.33s'
						dur='.67s'
						type='translate'
						values='0 -60; 0 60'
					/>
					<animate
						id='y3'
						attributeName='opacity'
						begin='-.33s; y3.end+.33s'
						dur='.67s'
						keyTimes='0; .25; 1'
						values='0; 1; 0'
					/>
				</path>
			</symbol>
		</defs>
		<use xlinkHref='#e' width='350' height='222' transform='translate(81 145)' />
		<use xlinkHref='#f' width='129' height='57' transform='translate(191.5 343.5)' />
	</svg>
);

export const SmokeIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<linearGradient id='b' x1='74' x2='98' y1='165.2' y2='206.8' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#b8bdc6' />
				<stop offset='.5' stopColor='#b8bdc6' />
				<stop offset='1' stopColor='#a5aab2' />
			</linearGradient>
			<symbol id='e' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='f' overflow='visible' viewBox='0 0 168 212'>
				<circle
					cx='86'
					cy='186'
					r='24'
					fill='url(#b)'
					stroke='#afb4bc'
					strokeMiterlimit='10'
					strokeWidth='4'
					opacity='0'
				>
					<animateTransform
						id='x1'
						additive='sum'
						attributeName='transform'
						begin='0s; x1.end+.75s'
						dur='2.25s'
						type='translate'
						values='0 0; -58 -118'
					/>
					<animate id='y1' attributeName='r' begin='0s; y1.end+.75s' dur='2.25s' values='24; 36' />
					<animate
						id='z1'
						attributeName='opacity'
						begin='0s; y1.end+.75s'
						dur='2.25s'
						keyTimes='0; .17; .83; 1'
						values='0; 1; 1; 0'
					/>
				</circle>
				<circle
					cx='86'
					cy='186'
					r='24'
					fill='url(#b)'
					stroke='#afb4bc'
					strokeMiterlimit='10'
					strokeWidth='4'
					opacity='0'
				>
					<animateTransform
						id='x2'
						additive='sum'
						attributeName='transform'
						begin='.83s; x2.end+.75s'
						dur='2.25s'
						type='translate'
						values='0 0; 58 -118'
					/>
					<animate id='y2' attributeName='r' begin='.83s; y2.end+.75s' dur='2.25s' values='24; 36' />
					<animate
						id='z2'
						attributeName='opacity'
						begin='.83s; z2.end+.75s'
						dur='2.25s'
						keyTimes='0; .17; .83; 1'
						values='0; 1; 1; 0'
					/>
				</circle>
				<circle
					cx='86'
					cy='186'
					r='24'
					fill='url(#b)'
					stroke='#afb4bc'
					strokeMiterlimit='10'
					strokeWidth='4'
					opacity='0'
				>
					<animateTransform
						id='x3'
						additive='sum'
						attributeName='transform'
						begin='1.66s; x3.end+.75s'
						dur='2.25s'
						type='translate'
						values='0 0; 0 -118'
					/>
					<animate id='y3' attributeName='r' begin='1.66s; y3.end+.75s' dur='2.25s' values='24; 36' />
					<animate
						id='z3'
						attributeName='opacity'
						begin='1.66s; z3.end+.75s'
						dur='2.25s'
						keyTimes='0; .17; .83; 1'
						values='0; 1; 1; 0'
					/>
				</circle>
			</symbol>
		</defs>
		<use xlinkHref='#e' width='350' height='222' transform='translate(81 145)' />
		<use xlinkHref='#f' width='168' height='212' transform='translate(172 232)' />
	</svg>
);

export const SnowIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<linearGradient id='b' x1='11.4' x2='32.8' y1='5.9' y2='43.1' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#86c3db' />
				<stop offset='.5' stopColor='#86c3db' />
				<stop offset='1' stopColor='#5eafcf' />
			</linearGradient>
			<linearGradient xlinkHref='#b' id='c' x1='67.4' x2='88.8' y1='5.9' y2='43.1' />
			<linearGradient xlinkHref='#b' id='d' x1='123.4' x2='144.8' y1='5.9' y2='43.1' />
			<symbol id='e' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='f' overflow='visible' viewBox='0 0 156.2 49'>
				<g>
					<path
						fill='url(#b)'
						stroke='#86c3db'
						strokeMiterlimit='10'
						d='m41.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2L6.6 11A4 4 0 001 12.5 4 4 0 002.5 18l5.8 3.3a13.7 13.7 0 000 6.5L2.5 31A4 4 0 001 36.5a4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.6 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008.2 0v-6.6a14.2 14.2 0 005.6-3.2l6 3.3a4 4 0 002 .5 4 4 0 003.4-2 4 4 0 00-1.4-5.5ZM19 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z'
						opacity='0'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='0 24 24; 360 24 24'
						/>
						<animate
							id='t1'
							attributeName='opacity'
							begin='0s; t1.end+1s'
							dur='2s'
							keyTimes='0; .17; .83; 1'
							values='0; 1; 1; 0'
						/>
					</path>
					<animateTransform
						id='s1'
						additive='sum'
						attributeName='transform'
						begin='0s; s1.end+1s'
						dur='2s'
						type='translate'
						values='0 -36; 0 92;'
					/>
				</g>
				<g>
					<path
						fill='url(#c)'
						stroke='#86c3db'
						strokeMiterlimit='10'
						d='m97.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2L62.6 11a4 4 0 00-5.6 1.5 4 4 0 001.5 5.5l5.8 3.3a13.7 13.7 0 000 6.5L58.5 31a4 4 0 00-1.5 5.5 4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.7 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008 0v-6.6a14.2 14.2 0 005.7-3.2l6 3.3a4 4 0 002 .5 4 4 0 003.4-2 4 4 0 00-1.4-5.5ZM75 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z'
						opacity='0'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='0 80 24; 360 80 24'
						/>
						<animate
							id='t2'
							attributeName='opacity'
							begin='-.83s; t2.end+1s'
							dur='2s'
							keyTimes='0; .17; .83; 1'
							values='0; 1; 1; 0'
						/>
					</path>
					<animateTransform
						id='s2'
						additive='sum'
						attributeName='transform'
						begin='-.83s; s2.end+1s'
						dur='2s'
						type='translate'
						values='0 -36; 0 92;'
					/>
				</g>
				<g>
					<path
						fill='url(#d)'
						stroke='#86c3db'
						strokeMiterlimit='10'
						d='m153.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2l-5.8-3.3a4 4 0 00-5.6 1.5 4 4 0 001.5 5.5l5.8 3.3a13.7 13.7 0 000 6.5l-5.8 3.2a4 4 0 00-1.5 5.5 4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.7 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008 0v-6.6a14.2 14.2 0 005.7-3.2l5.8 3.3a4 4 0 002 .5 4 4 0 003.5-2 4 4 0 00-1.3-5.5ZM131 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z'
						opacity='0'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='0 136 24; 360 136 24'
						/>
						<animate
							id='t3'
							attributeName='opacity'
							begin='.83s; t3.end+1s'
							dur='2s'
							keyTimes='0; .17; .83; 1'
							values='0; 1; 1; 0'
						/>
					</path>
					<animateTransform
						id='s3'
						additive='sum'
						attributeName='transform'
						begin='.83s; s3.end+1s'
						dur='2s'
						type='translate'
						values='0 -36; 0 92;'
					/>
				</g>
			</symbol>
		</defs>
		<use xlinkHref='#e' width='350' height='222' transform='translate(81 145)' />
		<use xlinkHref='#f' width='156.2' height='49' transform='translate(177.9 337.5)' />
	</svg>
);

export const SunRiseIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='150' x2='234' y1='119.2' y2='264.8' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#fbbf24' />
				<stop offset='.5' stopColor='#fbbf24' />
				<stop offset='1' stopColor='#f59e0b' />
			</linearGradient>
			<clipPath id='b'>
				<path fill='none' d='M512 306H304l-35.9-31.4a18.4 18.4 0 00-24.2 0L208 306H0V0h512Z' />
			</clipPath>
			<symbol id='c' viewBox='0 0 384 384'>
				<circle
					cx='192'
					cy='192'
					r='84'
					fill='url(#a)'
					stroke='#f8af18'
					strokeMiterlimit='10'
					strokeWidth='6'
				/>
				<path
					fill='none'
					stroke='#fbbf24'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7'
				>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='rotate'
						values='0 192 192; 45 192 192'
					/>
				</path>
			</symbol>
		</defs>
		<g clip-path='url(#b)'>
			<use xlinkHref='#c' width='384' height='384' transform='translate(64 100)' />
		</g>
		<path
			fill='none'
			stroke='#374151'
			strokeLinecap='round'
			stroke-linejoin='round'
			strokeWidth='18'
			d='M128 332h88l40-36 40 36h88'
		/>
	</svg>
);

export const SunSetIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='150' x2='234' y1='119.2' y2='264.8' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#fbbf24' />
				<stop offset='.5' stopColor='#fbbf24' />
				<stop offset='1' stopColor='#f59e0b' />
			</linearGradient>
			<clipPath id='b'>
				<path
					fill='none'
					d='M512 306H296a21.5 21.5 0 00-14 5.3L256 334l-26-22.7a21.5 21.5 0 00-14-5.3H0V0h512Z'
				/>
			</clipPath>
			<symbol id='c' viewBox='0 0 384 384'>
				<circle
					cx='192'
					cy='192'
					r='84'
					fill='url(#a)'
					stroke='#f8af18'
					strokeMiterlimit='10'
					strokeWidth='6'
				/>
				<path
					fill='none'
					stroke='#fbbf24'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7'
				>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='rotate'
						values='0 192 192; 45 192 192'
					/>
				</path>
			</symbol>
		</defs>
		<g clip-path='url(#b)'>
			<use xlinkHref='#c' width='384' height='384' transform='translate(64 100)' />
		</g>
		<path
			fill='none'
			stroke='#374151'
			strokeLinecap='round'
			stroke-linejoin='round'
			strokeWidth='18'
			d='M128 332h88l40 36 40-36h88'
		/>
	</svg>
);

export const TornadoIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='220' x2='292' y1='97.7' y2='222.3' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#d4d7dd' />
				<stop offset='.5' stopColor='#d4d7dd' />
				<stop offset='1' stopColor='#bec1c6' />
			</linearGradient>
			<linearGradient xlinkHref='#a' id='b' x1='224' x2='288' y1='152.6' y2='263.4' />
			<linearGradient xlinkHref='#a' id='c' x1='229' x2='283' y1='209.2' y2='302.8' />
			<linearGradient xlinkHref='#a' id='d' x1='234' x2='278' y1='265.9' y2='342.1' />
			<linearGradient xlinkHref='#a' id='e' x1='242' x2='270' y1='327.8' y2='376.3' />
		</defs>
		<path
			fill='none'
			stroke='url(#a)'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='24'
			d='M136 160h240'
		>
			<animateTransform
				id='x2'
				additive='sum'
				attributeName='transform'
				calcMode='spline'
				dur='3s'
				keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
				repeatCount='indefinite'
				type='translate'
				values='-12 0; 12 0; -12 0'
			/>
		</path>
		<path
			fill='none'
			stroke='url(#b)'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='24'
			d='M152 208h208'
		>
			<animateTransform
				id='x2'
				additive='sum'
				attributeName='transform'
				calcMode='spline'
				dur='3s'
				keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
				repeatCount='indefinite'
				type='translate'
				values='-24 0; 24 0; -24 0'
			/>
		</path>
		<path
			fill='none'
			stroke='url(#c)'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='24'
			d='M172 256h168'
		>
			<animateTransform
				id='x2'
				additive='sum'
				attributeName='transform'
				calcMode='spline'
				dur='3s'
				keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
				repeatCount='indefinite'
				type='translate'
				values='-36 0; 36 0; -36 0'
			/>
		</path>
		<path
			fill='none'
			stroke='url(#d)'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='24'
			d='M192 304h128'
		>
			<animateTransform
				id='x2'
				additive='sum'
				attributeName='transform'
				calcMode='spline'
				dur='3s'
				keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
				repeatCount='indefinite'
				type='translate'
				values='-48 0; 48 0; -48 0'
			/>
		</path>
		<path fill='none' stroke='url(#e)' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='24' d='M224 352h64'>
			<animateTransform
				id='x2'
				additive='sum'
				attributeName='transform'
				calcMode='spline'
				dur='3s'
				keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
				repeatCount='indefinite'
				type='translate'
				values='-60 0; 60 0; -60 0'
			/>
		</path>
	</svg>
);

export const WindIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='138.5' x2='224.2' y1='5.1' y2='153.5' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#d4d7dd' />
				<stop offset='.5' stopColor='#d4d7dd' />
				<stop offset='1' stopColor='#bec1c6' />
			</linearGradient>
			<linearGradient xlinkHref='#a' id='b' x1='77.7' x2='169' y1='96.2' y2='254.4' />
			<symbol id='c' viewBox='0 0 348 240'>
				<path
					fill='none'
					stroke='url(#a)'
					strokeDasharray='148'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M267.2 24.3A40 40 0 11296 92H12'
				>
					<animate attributeName='stroke-dashoffset' dur='6s' repeatCount='indefinite' values='0; 2960' />
				</path>
				<path
					fill='none'
					stroke='url(#b)'
					strokeDasharray='110'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='24'
					d='M151.2 215.7A40 40 0 10180 148H12'
				>
					<animate attributeName='stroke-dashoffset' dur='6s' repeatCount='indefinite' values='0; 1540' />
				</path>
			</symbol>
		</defs>
		<use xlinkHref='#c' width='348' height='240' transform='translate(82 136)' />
	</svg>
);

export const ThunderStormIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<linearGradient id='b' x1='8.7' x2='80.9' y1='17.1' y2='142.1' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f7b23b' />
				<stop offset='.5' stopColor='#f7b23b' />
				<stop offset='1' stopColor='#f59e0b' />
			</linearGradient>
			<symbol id='c' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='d' viewBox='0 0 102.7 186.8'>
				<path
					fill='url(#b)'
					stroke='#f6a823'
					strokeMiterlimit='10'
					strokeWidth='4'
					d='m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z'
				>
					<animate
						id='x1'
						attributeName='opacity'
						begin='0s; x1.end+.67s'
						dur='1.33s'
						keyTimes='0; .38; .5; .63; .75; .86; .94; 1'
						values='1; 1; 0; 1; 0; 1; 0; 1'
					/>
				</path>
			</symbol>
		</defs>
		<use xlinkHref='#c' width='350' height='222' transform='translate(81 145)' />
		<use xlinkHref='#d' width='102.7' height='186.7' transform='translate(205.23 291)' />
	</svg>
);

export const HazeIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#f3f7fe' />
				<stop offset='.5' stopColor='#f3f7fe' />
				<stop offset='1' stopColor='#deeafb' />
			</linearGradient>
			<linearGradient id='b' x1='17.3' x2='89.3' y1='43.1' y2='167.8' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#d4d7dd' />
				<stop offset='.5' stopColor='#d4d7dd' />
				<stop offset='1' stopColor='#bec1c6' />
			</linearGradient>
			<linearGradient xlinkHref='#b' id='c' x1='107.3' x2='179.3' y1='-8.8' y2='115.9' />
			<linearGradient xlinkHref='#b' id='d' x1='174.8' x2='246.8' y1='-47.8' y2='76.9' />
			<linearGradient xlinkHref='#b' id='e' x2='89.3' y1='-4.9' y2='119.8' />
			<linearGradient xlinkHref='#b' id='f' x1='107.3' x2='179.3' y1='-56.9' y2='67.9' />
			<linearGradient xlinkHref='#b' id='g' x1='174.8' x2='246.8' y1='-95.8' y2='28.9' />
			<symbol id='h' viewBox='0 0 350 222'>
				<path
					fill='url(#a)'
					stroke='#e6effc'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='i' overflow='visible' viewBox='0 0 264 72'>
				<g>
					<path
						fill='none'
						stroke='url(#b)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M12 60h30'
					/>
					<path
						fill='none'
						stroke='url(#c)'
						strokeDasharray='60 60'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M102 60h90'
					/>
					<path
						fill='none'
						stroke='url(#d)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M222 60h30'
					/>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='-24 0; 24 0; -24 0'
					/>
				</g>
				<g>
					<path
						fill='none'
						stroke='url(#e)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M12 12h30'
					/>
					<path
						fill='none'
						stroke='url(#f)'
						strokeDasharray='60 60'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M102 12h90'
					/>
					<path
						fill='none'
						stroke='url(#g)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M222 12h30'
					/>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='24 0; -24 0; 24 0'
					/>
				</g>
			</symbol>
		</defs>
		<use xlinkHref='#h' width='350' height='222' transform='translate(81 145)' />
		<use xlinkHref='#i' width='264' height='72' transform='translate(124 402)' />
	</svg>
);

export const AshIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<symbol id='h' viewBox='0 0 196 196'>
				<circle cx='98' cy='98' r='40' fill='url(#f)' stroke='#f8af18' strokeMiterlimit='10' strokeWidth='4' />
				<path
					fill='none'
					stroke='#fbbf24'
					strokeLinecap='round'
					strokeMiterlimit='10'
					strokeWidth='12'
					d='M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51 33 33m130.1 130.1-18-18M6 98h25.4M190 98h-25.4'
				>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='rotate'
						values='0 98 98; 45 98 98'
					/>
				</path>
			</symbol>
			<symbol id='j' viewBox='0 0 200.3 126.1'>
				<path
					fill='url(#a)'
					stroke='#848b98'
					strokeMiterlimit='10'
					d='M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z'
				/>
			</symbol>
			<symbol id='k' viewBox='0 0 350 222'>
				<path
					fill='url(#b)'
					stroke='#5b6472'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='i' overflow='visible' viewBox='0 0 398 222'>
				<use xlinkHref='#j' width='200.3' height='126.1' transform='translate(198 27)'>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='-9 0; 9 0; -9 0'
					/>
				</use>
				<use xlinkHref='#k' width='350' height='222'>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='-18 0; 18 0; -18 0'
					/>
				</use>
			</symbol>
			<symbol id='g' overflow='visible' viewBox='0 0 410.8 258'>
				<use xlinkHref='#h' width='196' height='196' />
				<use xlinkHref='#i' width='398' height='222' transform='translate(12.84 36)' />
			</symbol>
			<symbol id='l' overflow='visible' viewBox='0 0 168 212'>
				<circle
					cx='86'
					cy='186'
					r='24'
					fill='url(#c)'
					stroke='#afb4bc'
					strokeMiterlimit='10'
					strokeWidth='4'
					opacity='0'
				>
					<animateTransform
						id='x1'
						additive='sum'
						attributeName='transform'
						begin='0s; x1.end+.75s'
						dur='2.25s'
						type='translate'
						values='0 0; -58 -118'
					/>
					<animate id='y1' attributeName='r' begin='0s; y1.end+.75s' dur='2.25s' values='24; 36' />
					<animate
						id='z1'
						attributeName='opacity'
						begin='0s; y1.end+.75s'
						dur='2.25s'
						keyTimes='0; .17; .83; 1'
						values='0; 1; 1; 0'
					/>
				</circle>
				<circle
					cx='86'
					cy='186'
					r='24'
					fill='url(#c)'
					stroke='#afb4bc'
					strokeMiterlimit='10'
					strokeWidth='4'
					opacity='0'
				>
					<animateTransform
						id='x2'
						additive='sum'
						attributeName='transform'
						begin='.83s; x2.end+.75s'
						dur='2.25s'
						type='translate'
						values='0 0; 58 -118'
					/>
					<animate id='y2' attributeName='r' begin='.83s; y2.end+.75s' dur='2.25s' values='24; 36' />
					<animate
						id='z2'
						attributeName='opacity'
						begin='.83s; z2.end+.75s'
						dur='2.25s'
						keyTimes='0; .17; .83; 1'
						values='0; 1; 1; 0'
					/>
				</circle>
				<circle
					cx='86'
					cy='186'
					r='24'
					fill='url(#c)'
					stroke='#afb4bc'
					strokeMiterlimit='10'
					strokeWidth='4'
					opacity='0'
				>
					<animateTransform
						id='x3'
						additive='sum'
						attributeName='transform'
						begin='1.66s; x3.end+.75s'
						dur='2.25s'
						type='translate'
						values='0 0; 0 -118'
					/>
					<animate id='y3' attributeName='r' begin='1.66s; y3.end+.75s' dur='2.25s' values='24; 36' />
					<animate
						id='z3'
						attributeName='opacity'
						begin='1.66s; z3.end+.75s'
						dur='2.25s'
						keyTimes='0; .17; .83; 1'
						values='0; 1; 1; 0'
					/>
				</circle>
			</symbol>
			<linearGradient id='a' x1='52.7' x2='133.4' y1='9.6' y2='149.3' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#9ca3af' />
				<stop offset='.5' stopColor='#9ca3af' />
				<stop offset='1' stopColor='#6b7280' />
			</linearGradient>
			<linearGradient id='b' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#6b7280' />
				<stop offset='.5' stopColor='#6b7280' />
				<stop offset='1' stopColor='#4b5563' />
			</linearGradient>
			<linearGradient id='c' x1='74' x2='98' y1='165.2' y2='206.8' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#b8bdc6' />
				<stop offset='.5' stopColor='#b8bdc6' />
				<stop offset='1' stopColor='#a5aab2' />
			</linearGradient>
			<linearGradient id='f' x1='78' x2='118' y1='63.4' y2='132.7' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#fbbf24' />
				<stop offset='.5' stopColor='#fbbf24' />
				<stop offset='1' stopColor='#f59e0b' />
			</linearGradient>
		</defs>
		<use xlinkHref='#g' width='410.8' height='258' transform='translate(56 109)' />
		<use xlinkHref='#l' width='168' height='212' transform='translate(172 232)' />
	</svg>
);

export const SquallIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<defs>
			<linearGradient id='a' x1='52.7' x2='133.4' y1='9.6' y2='149.3' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#9ca3af' />
				<stop offset='.5' stopColor='#9ca3af' />
				<stop offset='1' stopColor='#6b7280' />
			</linearGradient>
			<linearGradient id='b' x1='99.5' x2='232.6' y1='30.7' y2='261.4' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#6b7280' />
				<stop offset='.5' stopColor='#6b7280' />
				<stop offset='1' stopColor='#4b5563' />
			</linearGradient>
			<linearGradient id='c' x1='17.3' x2='89.3' y1='43.1' y2='167.8' gradientUnits='userSpaceOnUse'>
				<stop offset='0' stopColor='#d4d7dd' />
				<stop offset='.5' stopColor='#d4d7dd' />
				<stop offset='1' stopColor='#bec1c6' />
			</linearGradient>
			<linearGradient xlinkHref='#c' id='d' x1='107.3' x2='179.3' y1='-8.8' y2='115.9' />
			<linearGradient xlinkHref='#c' id='e' x1='174.8' x2='246.8' y1='-47.8' y2='76.9' />
			<linearGradient xlinkHref='#c' id='f' x2='89.3' y1='-4.9' y2='119.8' />
			<linearGradient xlinkHref='#c' id='g' x1='107.3' x2='179.3' y1='-56.9' y2='67.9' />
			<linearGradient xlinkHref='#c' id='h' x1='174.8' x2='246.8' y1='-95.8' y2='28.9' />
			<symbol id='j' viewBox='0 0 200.3 126.1'>
				<path
					fill='url(#a)'
					stroke='#848b98'
					strokeMiterlimit='10'
					d='M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z'
				/>
			</symbol>
			<symbol id='k' viewBox='0 0 350 222'>
				<path
					fill='url(#b)'
					stroke='#5b6472'
					strokeMiterlimit='10'
					strokeWidth='6'
					d='m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z'
				/>
			</symbol>
			<symbol id='i' overflow='visible' viewBox='0 0 398 222'>
				<use xlinkHref='#j' width='200.3' height='126.1' transform='translate(198 27)'>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='-9 0; 9 0; -9 0'
					/>
				</use>
				<use xlinkHref='#k' width='350' height='222'>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='-18 0; 18 0; -18 0'
					/>
				</use>
			</symbol>
			<symbol id='l' overflow='visible' viewBox='0 0 264 72'>
				<g>
					<path
						fill='none'
						stroke='url(#c)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M12 60h30'
					/>
					<path
						fill='none'
						stroke='url(#d)'
						strokeDasharray='60 60'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M102 60h90'
					/>
					<path
						fill='none'
						stroke='url(#e)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M222 60h30'
					/>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='-24 0; 24 0; -24 0'
					/>
				</g>
				<g>
					<path
						fill='none'
						stroke='url(#f)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M12 12h30'
					/>
					<path
						fill='none'
						stroke='url(#g)'
						strokeDasharray='60 60'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M102 12h90'
					/>
					<path
						fill='none'
						stroke='url(#h)'
						strokeLinecap='round'
						strokeMiterlimit='10'
						strokeWidth='24'
						d='M222 12h30'
					/>
					<animateTransform
						additive='sum'
						attributeName='transform'
						dur='6s'
						repeatCount='indefinite'
						type='translate'
						values='24 0; -24 0; 24 0'
					/>
				</g>
			</symbol>
		</defs>
		<use xlinkHref='#i' width='398' height='222' transform='translate(68.84 145)' />
		<use xlinkHref='#l' width='264' height='72' transform='translate(124 402)' />
	</svg>
);

export const PressureIcon: FC<IProps> = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 512 512'
		className={props.className || ''}
		width={props.width || 150}
		height={props.height || 150}
	>
		<path
			fill='#e34647'
			d='M293.5 213a7.7 7.7 0 01-5.3-2L256 180.1 223.8 211a7.8 7.8 0 01-10.6 0 6.9 6.9 0 010-10l37.5-35.8a7.8 7.8 0 0110.6 0l37.5 35.7a6.9 6.9 0 010 10.1 7.7 7.7 0 01-5.3 2.1Z'
			opacity='0'
		>
			<animateTransform
				attributeName='transform'
				begin='-1.3s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				type='translate'
				values='0 30; 0 0; 0 -30'
			/>
			<animate
				attributeName='opacity'
				begin='-1.3s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				values='0; 1; 0'
			/>
		</path>
		<path
			fill='#e34647'
			d='M293.5 258a7.7 7.7 0 01-5.3-2L256 225.1 223.8 256a7.8 7.8 0 01-10.6 0 6.9 6.9 0 010-10l37.5-35.8a7.8 7.8 0 0110.6 0l37.5 35.7a6.9 6.9 0 010 10.1 7.7 7.7 0 01-5.3 2.1Z'
			opacity='0'
		>
			<animateTransform
				attributeName='transform'
				begin='-1.2s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				type='translate'
				values='0 30; 0 0; 0 -30'
			/>
			<animate
				attributeName='opacity'
				begin='-1.2s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				values='0; 1; 0'
			/>
		</path>
		<path
			fill='#e34647'
			d='M293.5 303a7.7 7.7 0 01-5.3-2L256 270.1 223.8 301a7.8 7.8 0 01-10.6 0 6.9 6.9 0 010-10l37.5-35.8a7.8 7.8 0 0110.6 0l37.5 35.7a6.9 6.9 0 010 10.1 7.7 7.7 0 01-5.3 2.1Z'
			opacity='0'
		>
			<animateTransform
				attributeName='transform'
				begin='-1.1s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				type='translate'
				values='0 30; 0 0; 0 -30'
			/>
			<animate
				attributeName='opacity'
				begin='-1.1s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				values='0; 1; 0'
			/>
		</path>
		<path
			fill='#e34647'
			d='M293.5 348a7.7 7.7 0 01-5.3-2L256 315.1 223.8 346a7.8 7.8 0 01-10.6 0 6.9 6.9 0 010-10l37.5-35.8a7.8 7.8 0 0110.6 0l37.5 35.7a6.9 6.9 0 010 10.1 7.7 7.7 0 01-5.3 2.1Z'
			opacity='0'
		>
			<animateTransform
				attributeName='transform'
				begin='-1s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				type='translate'
				values='0 30; 0 0; 0 -30'
			/>
			<animate
				attributeName='opacity'
				begin='-1s'
				calcMode='spline'
				dur='3s'
				keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
				repeatCount='indefinite'
				values='0; 1; 0'
			/>
		</path>
	</svg>
);
