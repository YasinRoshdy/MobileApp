import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const OtherScienceIcon = (props) => (
	<Svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} {...props}>
		<G data-name='Group 1566' scale={1.25}>
			<G data-name='Other science 20-12'>
				<Path
					data-name='Path 9511'
					fill={props.color}
					d='M12.942 0H2.427A2.429 2.429 0 0 0 0 2.427v13.75a2.65 2.65 0 0 0 2.647 2.647h10.295a.589.589 0 0 0 0-1.177H2.647a1.471 1.471 0 0 1 0-2.941h10.295a.588.588 0 0 0 .588-.588V.588A.588.588 0 0 0 12.942 0ZM1.177 13.656V2.427a1.25 1.25 0 0 1 1.25-1.25h.037a.184.184 0 0 1 .184.184v11.991a.183.183 0 0 1-.17.183 2.627 2.627 0 0 0-1.035.285.183.183 0 0 1-.266-.164Z'
				/>
				<Path
					data-name='Path 9512'
					fill={props.color}
					d='M12.942 15.589H2.647a.589.589 0 1 0 0 1.177h10.295a.589.589 0 0 0 0-1.177Z'
				/>
			</G>
		</G>
	</Svg>
);

export default OtherScienceIcon;
