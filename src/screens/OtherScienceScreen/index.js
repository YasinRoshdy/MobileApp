import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getOtherScienceSubject } from "../../api/otherScience";
import OtherScienceAudioList from "../../components/OtherScienceAudioList";
import OtherScienceVideoList from "../../components/OtherScienceVideoList";
import ScreenHeader from "../../components/ScreenHeader";
import {
  setIsOtherScienceLoading,
  setOtherScienceAudioList,
  setOtherScienceVideoList,
} from "../../redux/actions/otherScienceActions";
import {
  otherScienceAudioExtractor,
  otherScienceVideoExtractor,
} from "../../utils/extractors";
import Colors from "../../constants/Colors";
// import { otherScienceAudio, otherScienceVideo } from '../../data/otherScience';
import { styles } from "./style";
import reactotron from "../../ReactotronConfig";
import { fontScale, scale } from "react-native-utils-scale";
import { useNavigation } from "@react-navigation/native";
import Data from "../../data/datamanager";
import { useIsFocused } from "@react-navigation/native";

const OtherScienceScreen = (props) => {
  const { navigate } = useNavigation();
  const { isOtherScienceLoading } = useSelector((state) => state.OtherScience);
  const [isVideoSubjectsSelected, setIsVideoSubjectsSelected] = useState(false);
  const focus = useIsFocused(); // useIsFocused as shown

  const dispatch = useDispatch();
  componentDidMount = () => {
    this._componentFocused();
  };
  useEffect(() => {
    if (focus == true) {
      setIsVideoSubjectsSelected(Data.state.isTab);
    }
    dispatch(setIsOtherScienceLoading(true));
    getOtherScienceSubject({
      success: (res) => {
        console.log(res)
        dispatch(
          setOtherScienceAudioList(otherScienceAudioExtractor(res.results))
        );
        dispatch(
          setOtherScienceVideoList(otherScienceVideoExtractor(res.results))
        );
        dispatch(setIsOtherScienceLoading(false));
      },
      error: (error) => {
        dispatch(setIsOtherScienceLoading(false));
        console.log("Get Other Science Subject Error:", error);
      },
    });
  }, [focus]);

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
          flipBackButton
          onMenuPress={() =>
            props.navigation.getParent().openDrawer
              ? props.navigation.getParent().openDrawer()
              : {}
          }
          // onMenuPress={() => navigate("HomeDrawer")}
        />
        {isOtherScienceLoading ? (
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
                alignItems: "center",
                marginHorizontal: scale(16),
                marginTop: scale(10),
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                العلوم الاخرى
              </Text>
            </View>
            <View
              style={{
                height: scale(35),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                marginVertical: scale(8),
                paddingHorizontal: scale(16),
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  // borderRadius: 8,
                  borderTopLeftRadius: scale(8),
                  borderBottomLeftRadius: scale(8),
                  borderWidth: scale(1),
                  borderColor: "#011132",
                  backgroundColor: isVideoSubjectsSelected
                    ? "#c79546"
                    : Colors.Transparent,
                  // backgroundColor: Colors.PaleTurquoise,
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                  onPress={() =>
                    setIsVideoSubjectsSelected(!isVideoSubjectsSelected)
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: isVideoSubjectsSelected ? Colors.White : "#011132",
                    }}
                  >
                    المواضيع المرئية
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  // borderRadius: 8,
                  borderTopRightRadius: scale(8),
                  borderBottomRightRadius: scale(8),
                  borderWidth: scale(1),
                  borderColor: "#011132",
                  backgroundColor: isVideoSubjectsSelected
                    ? Colors.Transparent
                    : "#c79546",
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                  onPress={() =>
                    setIsVideoSubjectsSelected(!isVideoSubjectsSelected)
                  }
                >
                  <Text
                    style={{
                      fontFamily: "NotoKufiArabic-Regular",
                      color: isVideoSubjectsSelected ? "#011132" : Colors.White,
                    }}
                  >
                    المواضيع الصوتية
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignSelf: "stretch",
              }}
            >
              {isVideoSubjectsSelected ? (
                <OtherScienceVideoList
                  onItemPress={(id, name) =>
                    props.navigation.navigate("OtherScienceVideo", {
                      subjectId: id,
                      subjectName: name,
                    })
                  }
                />
              ) : (
                <OtherScienceAudioList
                  onItemPress={(id, name) =>
                    props.navigation.navigate("OtherScienceAudio", {
                      subjectId: id,
                      subjectName: name,
                    })
                  }
                />
              )}
            </View>
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OtherScienceScreen;
