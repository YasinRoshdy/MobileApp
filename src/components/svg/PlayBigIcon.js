import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const PlayBigIcon = (props) => (
	<Svg xmlns='http://www.w3.org/2000/svg' width={48} height={48} {...props}>
		<G data-name='Group 23'>
			<G data-name='Group 22'>
				<G data-name='Group 21'>
					<Path
						data-name='Path 7921'
						fill={props.color}
						d='M40.41 6.865a23.72 23.72 0 1 0 0 33.38 23.72 23.72 0 0 0 0-33.38ZM23.638 45.452a21.814 21.814 0 1 1 21.814-21.814 21.839 21.839 0 0 1-21.814 21.814Z'
					/>
					<Path
						data-name='Path 7922'
						fill={props.color}
						d='M36.496 22.812 17.237 11.693a.953.953 0 0 0-1.43.825v22.238a.953.953 0 0 0 1.43.825l19.259-11.119a.953.953 0 0 0 0-1.651Z'
					/>
				</G>
			</G>
		</G>
	</Svg>
);

export default PlayBigIcon;
