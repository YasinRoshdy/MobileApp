import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const SaveIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(23)}
		height={scale(20)}
		{...props}
	>
		<Path
			data-name='7124134_save_icon'
			d='M5.5 3.5h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3m-1 4-3 3m0 0-3-3m3 3V.5'
			fill='none'
			stroke={props.color}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</Svg>
);

export default SaveIcon;
