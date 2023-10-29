import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const ArrowUpIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(16)}
		height={scale(10)}
		{...props}
		fill={props.color}
	>
		<Path
			data-name='Path 9596'
			d='M.291 6.711a1 1 0 0 0 .325.214 1.023 1.023 0 0 0 .769 0 1 1 0 0 0 .325-.214l4.58-4.469a1 1 0 0 1 .325-.214 1.022 1.022 0 0 1 .769 0 1 1 0 0 1 .325.214l4.58 4.469a1 1 0 0 0 .326.214 1.023 1.023 0 0 0 .769 0 1 1 0 0 0 .325-.214.959.959 0 0 0 0-1.376L9.12.856a3.052 3.052 0 0 0-4.24 0L.291 5.335a.959.959 0 0 0 0 1.376Z'
		/>
	</Svg>
);

export default ArrowUpIcon;
