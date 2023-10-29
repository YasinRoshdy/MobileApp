import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { useDispatch, useSelector } from "react-redux";
import { getOtherScienceBySubjectId } from "../../api/otherScience";
import OtherScienceVideoItemsList from "../../components/OtherScienceVideoItemsList";
import ScreenHeader from "../../components/ScreenHeader";
import Colors from "../../constants/Colors";
import reactotron from "../../ReactotronConfig";
import {
  setIsOtherScienceVideoLoading,
  setOtherScienceVideoSubjects,
} from "../../redux/actions/otherScienceActions";
import { styles } from "./style";

const OtherScienceVideoScreen = (props) => {
  const { subjectId, subjectName } = props.route.params;

  const { isOtherScienceVideoLoading, otherScienceVideoSubjects } = useSelector(
    (state) => state.OtherScience
  );
  const [sectionIndex, setSectionIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsOtherScienceVideoLoading(true));
    getOtherScienceBySubjectId(subjectId, {
      success: (res) => {
        dispatch(setIsOtherScienceVideoLoading(false));
        dispatch(setOtherScienceVideoSubjects(res.data));
      },
      error: (error) => {
        dispatch(setIsOtherScienceVideoLoading(false));
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
        {isOtherScienceVideoLoading ? (
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
                numberOfLines={1}
                style={{
                  alignSelf: "stretch",
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
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignSelf: "stretch",
                paddingHorizontal: scale(16),
              }}
            >
              <OtherScienceVideoItemsList
                data={otherScienceVideoSubjects}
                onItemPress={(item) =>
                  props.navigation.navigate("OtherScienceVideoLecture", {
                    videoItem: item,
                  })
                }
              />
            </View>
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OtherScienceVideoScreen;
