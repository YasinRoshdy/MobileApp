import React from 'react';
import Svg, { Defs, Pattern, Image, G, Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const StopIcon = (props) => (
	<Svg
		data-name='Component 25 \u2013 1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		width={scale(20)}
		height={scale(20)}
		{...props}
	>
		<Path
			data-name='Path 7921'
			fill={props.color}
			d='M14.959 2.541a8.781 8.781 0 1 0 0 12.356 8.781 8.781 0 0 0 0-12.356ZM8.75 16.825a8.075 8.075 0 1 1 8.075-8.075 8.084 8.084 0 0 1-8.075 8.075Z'
		/>
		<Path
			transform='translate(5.333 4.75)'
			fill={props.color}
			d='M0 0h7v8H0z'
		/>
	</Svg>
);

export default StopIcon;
