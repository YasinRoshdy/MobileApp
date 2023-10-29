import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import {
  quranSessions,
  hadithSessions,
  otherScienceSessions,
} from "../../data/sessions";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import SessionsList from "../../components/SessionsList";
import { getSessionsCategoriesByType } from "../../api/sessions";
import {
  setIsSessionsLoading,
  setSessions,
} from "../../redux/actions/sessionsActions";
import { fontScale, scale } from "react-native-utils-scale";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import Data from "../../data/datamanager";
import { SafeAreaView } from "react-native";

const categories = [
  {
    index: 0,
    name: "quran",
  },
  {
    index: 1,
    name: "hadith",
  },
  {
    index: 2,
    name: "OtherScience",
  },
];

const SessionsScreen = (props) => {
  const { isSessionsLoading, sessions } = useSelector(
    (state) => state.Sessions
  );
  const [selectionIndex, setSelectionIndex] = useState(0);

  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const focus = useIsFocused(); // useIsFocused as shown

  useEffect(() => {
    fetchSessionsByCategory("quran");
  }, []);

  useEffect(() => {
    if (focus == true) {
      setSelectionIndex(Data.state.selectionIndex);
    }
    if (selectionIndex === 0) {
      fetchSessionsByCategory("quran");
      setSelectionIndex(0);
    } else if (selectionIndex === 1) {
      fetchSessionsByCategory("hadith");
      setSelectionIndex(1);
    } else if (selectionIndex === 2) {
      fetchSessionsByCategory("OtherScience");
      setSelectionIndex(2);
    } else if (selectionIndex === 3) {
      fetchSessionsByCategory("pillars");
      setSelectionIndex(3);
    }
  }, [selectionIndex, focus]);

  const fetchSessionsByCategory = (category) => {
    dispatch(setIsSessionsLoading(true));
    getSessionsCategoriesByType(category, {
      success: (res) => {
        dispatch(setIsSessionsLoading(false));
        dispatch(setSessions(res.data));
      },
      error: (error) => {
        dispatch(setIsSessionsLoading(false));
        console.log("Get Sessions By Type Error:", error);
      },
    });
  };

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
          // onMenuPress={() => props.navigation.openDrawer()}
          hasBackButton
          flipBackButton
          onBackPress={() => props.navigation.pop()}
          onMenuPress={() =>
            props.navigation.openDrawer ? props.navigation.openDrawer() : {}
          }
        />
        {isSessionsLoading ? (
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
              alignItems: "center",
              alignSelf: "stretch",
              paddingHorizontal: scale(16),
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            <View
              style={{
                alignItems: "center",
                marginTop: scale(10),
                marginBottom: scale(10),
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                المجالس
              </Text>
            </View>
            <View
              style={{
                // display: "none",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                // backgroundColor: Colors.MediumBlue,
              }}
            >
              {/*  */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  // backgroundColor: Colors.SeaGreen,
                }}
              >
                <StyledButton
                  buttonTitle="الحديث الشريف"
                  activeColor={selectionIndex === 1 ? "#c79546" : "#011132"}
                  buttonTitleColor={
                    selectionIndex === 1 ? "#c79546" : "#011132"
                  }
                  onPress={() => setSelectionIndex(1)}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: scale(15),
                    /* backgroundColor:
										selectionIndex === 1
											? '#011132'
											: '#c79546', */
                  }}
                />
                <StyledButton
                  buttonTitle="القرآن"
                  activeColor={selectionIndex === 0 ? "#c79546" : "#011132"}
                  buttonTitleColor={
                    selectionIndex === 0 ? "#c79546" : "#011132"
                  }
                  onPress={() => setSelectionIndex(0)}
                  style={{
                    flex: 1,
                    marginRight: scale(24),
                    marginLeft: scale(12),
                    // marginHorizontal: 24,
                    /* backgroundColor:
										selectionIndex === 0
											? '#011132'
											: '#c79546', */
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  // backgroundColor: Colors.SeaGreen,
                }}
              >
                <StyledButton
                  buttonTitle="الإسلا م و اركانه"
                  activeColor={selectionIndex === 3 ? "#c79546" : "#011132"}
                  buttonTitleColor={
                    selectionIndex === 3 ? "#c79546" : "#011132"
                  }
                  onPress={() => setSelectionIndex(3)}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: scale(15),
                    /* backgroundColor:
									selectionIndex === 2
										? '#011132'
										: '#c79546', */
                  }}
                />
                <StyledButton
                  buttonTitle="العلوم الأخرى"
                  activeColor={selectionIndex === 2 ? "#c79546" : "#011132"}
                  buttonTitleColor={
                    selectionIndex === 2 ? "#c79546" : "#011132"
                  }
                  onPress={() => setSelectionIndex(2)}
                  style={{
                    flex: 1,
                    marginRight: scale(24),
                    marginLeft: scale(12),
                    /* backgroundColor:
									selectionIndex === 2
										? '#011132'
										: '#c79546', */
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignSelf: "stretch",
              }}
            >
              <SessionsList
                data={sessions}
                /* category={
								selectionIndex === 0
									? 'Quran'
									: selectionIndex === 1
									? 'Hadith'
									: selectionIndex === 2
									? 'Other'
									: ''
							} */
                navigation={props.navigation}
              />
            </View>
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SessionsScreen;
