import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { useDispatch, useSelector } from "react-redux";
import { getOtherScienceBySubjectId } from "../../api/otherScience";
import OtherScienceAudioItemsList from "../../components/OtherScienceAudioItemsList";
import ScreenHeader from "../../components/ScreenHeader";
import Colors from "../../constants/Colors";
import reactotron from "../../ReactotronConfig";
import {
  setIsOtherScienceAudioLoading,
  setOtherScienceAudioSubjects,
} from "../../redux/actions/otherScienceActions";
// import { otherScienceAudioItems } from '../../data/otherScience';
import { styles } from "./style";

const OtherScienceAudioScreen = (props) => {
  const { subjectId, subjectName } = props.route.params;

  const { isOtherScienceAudioLoading, otherScienceAudioSubjects } = useSelector(
    (state) => state.OtherScience
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsOtherScienceAudioLoading(true));
    getOtherScienceBySubjectId(subjectId, {
      success: (res) => {
        dispatch(setIsOtherScienceAudioLoading(false));
        dispatch(setOtherScienceAudioSubjects(res.data));
        reactotron.log("Get Other Science By Subject Id Res:", res);
      },
      error: (error) => {
        dispatch(setIsOtherScienceAudioLoading(false));
        reactotron.log("Get Other Science By Subject Id Error:", error);
      },
    });
  }, []);

  const { container } = styles;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#000825",
      }}
    >
      <View style={container}>
        <StatusBar
          barStyle="light-content"
          animated
          backgroundColor="#000825"
        />
        <ScreenHeader
          hasBackButton
          replaceMenu
          onBackPress={() => props.navigation.goBack()}
        />
        {isOtherScienceAudioLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <ActivityIndicator size={52} color="#011132" />
          </View>
        ) : (
          <ImageBackground
            source={require("../../assets/images/app-background.png")}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "center",
              // alignItems: 'center',
              alignSelf: "stretch",
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                // justifyContent: 'flex-end',
                marginHorizontal: scale(16),
                marginTop: scale(10),
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#011132",
                }}
              >
                {subjectName}
              </Text>
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                العلوم الاخرى:{" "}
              </Text>
            </View>
            {/* <View
					style={{
						height: 35,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'stretch',
						marginVertical: 8,
						paddingHorizontal: 16,
						backgroundColor: Colors.SeaGreen,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'stretch',
							// borderRadius: 8,
							borderTopLeftRadius: 8,
							borderBottomLeftRadius: 8,
							borderWidth: 1,
							borderColor: '#011132',
							backgroundColor: '#c79546',
							// backgroundColor: Colors.PaleTurquoise,
						}}
					>
						<TouchableOpacity
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'stretch',
							}}
							/* onPress={() =>
								setIsVideoSubjectsSelected(
									!isVideoSubjectsSelected,
								)
							} **
						>
							<Text
								style={{
									color: '#011132',
								}}
							>
								المواضيع المرئية
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'stretch',
							// borderRadius: 8,
							borderTopRightRadius: 8,
							borderBottomRightRadius: 8,
							borderWidth: 1,
							borderColor: '#011132',
							backgroundColor: '#c79546',
						}}
					>
						<TouchableOpacity
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'stretch',
							}}
							/* onPress={() =>
								setIsVideoSubjectsSelected(
									!isVideoSubjectsSelected,
								)
							} **
						>
							<Text
								style={{
									color: '#011132',
								}}
							>
								المواضيع الصوتية
							</Text>
						</TouchableOpacity>
					</View>
				</View> */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignSelf: "stretch",
                paddingHorizontal: scale(16),
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <OtherScienceAudioItemsList
                data={otherScienceAudioSubjects}
                navigation={props.navigation}
              />
            </View>
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OtherScienceAudioScreen;
