import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const HomeOutlineIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(20)}
		height={scale(18)}
		{...props}
	>
		<G
			data-name='Group 1563'
			fill='none'
			stroke='#000'
			strokeWidth={0.5}
			scale={0.75}
		>
			<Path
				data-name='Path 9504'
				stroke={props.color}
				strokeWidth={1}
				d='m12.077 4.05-8.436 6.955a.2.2 0 0 1-.007.044.2.2 0 0 0-.007.044v7.042a.953.953 0 0 0 .939.939H10.2V13.44h3.756v5.634h5.634a.954.954 0 0 0 .939-.939v-7.042a.206.206 0 0 0-.015-.088Z'
			/>
			<Path
				data-name='Path 9505'
				stroke={props.color}
				strokeWidth={1}
				d='m23.741 9.42-3.213-2.67V.764a.452.452 0 0 0-.47-.469h-2.816a.452.452 0 0 0-.469.469v2.861L13.193.632a1.82 1.82 0 0 0-2.23 0L.413 9.42a.426.426 0 0 0-.162.315.475.475 0 0 0 .1.345l.91 1.086a.5.5 0 0 0 .308.161.545.545 0 0 0 .352-.1l10.156-8.471 10.153 8.466a.452.452 0 0 0 .308.1h.044a.5.5 0 0 0 .308-.161l.91-1.086a.475.475 0 0 0 .1-.345.428.428 0 0 0-.159-.31Z'
			/>
		</G>
	</Svg>
);

export default HomeOutlineIcon;
