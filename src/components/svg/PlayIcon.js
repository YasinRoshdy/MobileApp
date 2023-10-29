import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const PlayIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(20)}
		height={scale(20)}
		{...props}
	>
		<G data-name='Group 23'>
			<G data-name='Group 22'>
				<G data-name='Group 21'>
					<Path
						data-name='Path 7921'
						fill={props.color}
						d='M14.959 2.541a8.781 8.781 0 1 0 0 12.356 8.781 8.781 0 0 0 0-12.356ZM8.75 16.825a8.075 8.075 0 1 1 8.075-8.075 8.084 8.084 0 0 1-8.075 8.075Z'
					/>
					<Path
						data-name='Path 7922'
						fill={props.color}
						d='M13.51 8.444 6.381 4.328a.353.353 0 0 0-.529.305v8.232a.353.353 0 0 0 .529.305l7.129-4.116a.353.353 0 0 0 0-.611Z'
					/>
					<Path
						data-name='Path 9597'
						fill={props.color}
						d='M13.51 8.444 6.381 4.328a.353.353 0 0 0-.529.305v8.232a.353.353 0 0 0 .529.305l7.129-4.116a.353.353 0 0 0 0-.611Z'
					/>
				</G>
			</G>
		</G>
	</Svg>
);

export default PlayIcon;
