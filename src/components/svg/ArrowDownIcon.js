import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const ArrowDownIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(16)}
		height={scale(10)}
		{...props}
		fill={props.color}
	>
		<Path
			data-name='Path 9596'
			d='M13.709.289a1 1 0 0 0-.325-.214 1.023 1.023 0 0 0-.769 0 1 1 0 0 0-.325.214L7.71 4.758a1 1 0 0 1-.325.214 1.022 1.022 0 0 1-.769 0 1 1 0 0 1-.325-.214L1.711.289a1 1 0 0 0-.326-.214 1.023 1.023 0 0 0-.769 0 1 1 0 0 0-.325.214.959.959 0 0 0 0 1.376L4.88 6.144a3.052 3.052 0 0 0 4.24 0l4.589-4.479a.959.959 0 0 0 0-1.376Z'
		/>
	</Svg>
);

export default ArrowDownIcon;
