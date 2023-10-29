import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const ShareIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(20)}
		height={scale(20)}
		{...props}
	>
		<Path
			data-name='Path 9502'
			fill={props.color}
			scale={0.75}
			d='M17.708 20.001H2.296a2.317 2.317 0 0 1-2.3-2.34V5.338a2.317 2.317 0 0 1 2.3-2.337h2.912a.638.638 0 0 1 0 1.275H2.296a1.053 1.053 0 0 0-1.042 1.062v12.323a1.054 1.054 0 0 0 1.042 1.065h15.412a1.054 1.054 0 0 0 1.042-1.065v-7.223a.625.625 0 1 1 1.25 0v7.223a2.317 2.317 0 0 1-2.292 2.337Zm0 0'
		/>
		<Path
			data-name='Path 9503'
			fill={props.color}
			scale={0.75}
			d='M7.061 11.991a.5.5 0 0 1-.124-.015.555.555 0 0 1-.438-.538v-1.125A7.321 7.321 0 0 1 13.812 3h.187V.563a.562.562 0 0 1 .967-.39l4.875 5.062a.562.562 0 0 1 0 .78l-4.875 5.062a.562.562 0 0 1-.967-.39V8.251h-.891a6.153 6.153 0 0 0-5.534 3.421.579.579 0 0 1-.513.319Zm6.751-7.865a6.2 6.2 0 0 0-6.14 5.415 7.272 7.272 0 0 1 5.437-2.415h1.453a.563.563 0 0 1 .562.562v1.6l3.532-3.667-3.532-3.667v1.609a.563.563 0 0 1-.562.562Zm0 0'
		/>
	</Svg>
);

export default ShareIcon;
