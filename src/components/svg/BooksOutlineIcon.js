import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';

const BooksOutlineIcon = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={scale(20)}
		height={scale(20)}
		{...props}
		fill={props.color}
	>
		<Path
			data-name='Path 9472'
			d='M9 0H5.1a.3.3 0 0 0-.3.3v2.1H.3a.3.3 0 0 0-.3.3v14.992a.3.3 0 0 0 .3.3H9a.3.3 0 0 0 .3-.3V.3A.3.3 0 0 0 9 0Zm-.3 15.593H5.4v-.6h3.3ZM.6 4.5h4.2v9H.6Zm8.1-1.2H5.4v-.9h3.3ZM.6 14.093h4.2v.9H.6Zm4.8.3V3.9h3.3v10.5ZM8.7.6v1.2H5.4V.6ZM4.8 3v.9H.6V3ZM.6 15.593h4.2v1.8H.6Zm4.8 1.8v-1.2h3.3v1.2Zm0 0'
		/>
		<Path
			data-name='Path 9473'
			d='m17.982 16.417-3.6-13.794a.3.3 0 0 0-.368-.214l-4.5 1.2a.3.3 0 0 0-.213.365l3.6 13.794a.3.3 0 0 0 .368.213l4.5-1.2a.3.3 0 0 0 .213-.364ZM10.439 5.943l3.919-1.045.141.54-3.918 1.046Zm4.211.077 1.739 6.671-3.917 1.045-1.739-6.672Zm1.892 7.252.307 1.177-3.919 1.045-.306-1.176ZM13.88 3.067l.327 1.252-3.919 1.044-.326-1.251Zm-.471 14.258-.327-1.252 3.916-1.045.326 1.251Zm0 0'
		/>
		<Path
			data-name='Path 9474'
			d='M3.899 5.398h-2.4a.3.3 0 0 0-.3.3v2.4a.3.3 0 0 0 .3.3h2.4a.3.3 0 0 0 .3-.3v-2.4a.3.3 0 0 0-.3-.3Zm-.3 2.4h-1.8v-1.8h1.8Zm0 0'
		/>
	</Svg>
);

export default BooksOutlineIcon;
