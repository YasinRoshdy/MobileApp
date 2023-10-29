import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const HomeIcon = (props) => (
	<Svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} {...props}>
		<G data-name='Group 1563'>
			<Path
				data-name='Path 9504'
				fill={props.color}
				d='m11.827 3.8-8.436 6.955a.2.2 0 0 1-.007.044.2.2 0 0 0-.007.044v7.042a.953.953 0 0 0 .939.939H9.95V13.19h3.756v5.634h5.634a.954.954 0 0 0 .939-.939v-7.042a.206.206 0 0 0-.015-.088Z'
			/>
			<Path
				data-name='Path 9505'
				fill={props.color}
				d='M23.491 9.17 20.278 6.5V.514a.452.452 0 0 0-.47-.469h-2.816a.452.452 0 0 0-.469.469v2.861L12.943.382a1.82 1.82 0 0 0-2.23 0L.163 9.17a.426.426 0 0 0-.162.315.475.475 0 0 0 .1.345l.91 1.086a.5.5 0 0 0 .308.161.545.545 0 0 0 .352-.1l10.156-8.471 10.153 8.466a.452.452 0 0 0 .308.1h.044a.5.5 0 0 0 .308-.161l.91-1.086a.475.475 0 0 0 .1-.345.428.428 0 0 0-.159-.31Z'
			/>
		</G>
	</Svg>
);

export default HomeIcon;
