import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';
import Colors from '../../constants/Colors';
import PlayBigIcon from '../svg/PlayBigIcon';
import { styles } from './style';

const SessionsList = (props) => {
	const { data } = props;

	const RenderSessions = ({ session }) => {
		return (
			<ImageBackground
				source={require('../../assets/images/tafsir-list-item-placeholder.png')}
				resizeMode='cover'
				style={{
					flex: 1,
					height: scale(150),
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'stretch',
					marginVertical: scale(8),
					borderRadius: scale(8),
					borderWidth: scale(1),
					borderColor: '#011132',
					overflow: 'hidden',
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',
						backgroundColor: '#01113270',
					}}
				>
					<Text
						style={{
							fontSize: fontScale(16),
							fontFamily: 'NotoKufiArabic-Regular',
							color: Colors.White,
						}}
					>
						{session.name}
					</Text>
					<View
						style={{
							marginVertical: scale(12),
							borderRadius: scale(32),
							overflow: 'hidden',
							// backgroundColor: Colors.MediumSlateBlue,
						}}
					>
						<TouchableOpacity
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'stretch',
								// backgroundColor: Colors.SeaGreen,
							}}
							onPress={() =>
								props.navigation.navigate(
									'SessionVideoLecture',
									{
										sessionId: session.id,
										sessionName: session.name,
									},
								)
							}
						>
							<PlayBigIcon color={Colors.White} />
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	};

	const { container } = styles;

	return (
		<FlatList
			keyExtractor={(session, index) => `${index}-${session}`}
			data={data}
			renderItem={({ item }) => <RenderSessions session={item} />}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				flexGrow: 1,
				paddingVertical: scale(8),
			}}
		/>
	);
};

export default SessionsList;
