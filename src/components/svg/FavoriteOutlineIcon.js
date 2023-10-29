import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const FavoriteOutlineIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(20)}
		height={scale(20)}
		{...props}
	>
		<Path
			data-name='Path 9583'
			d='m12.369 1.336 2.914 7.223 8.086.417-6.286 4.88 2.084 7.48-6.8-4.206-6.798 4.206 2.084-7.48-6.284-4.881 8.086-.417Z'
			fill='none'
			stroke={props.color}
			strokeWidth={1}
			strokeMiterlimit={10}
			scale={0.75}
		/>
	</Svg>
);

export default FavoriteOutlineIcon;
