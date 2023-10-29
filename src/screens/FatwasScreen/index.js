import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ScreenHeader from "../../components/ScreenHeader";
import { getFatwas } from "../../api/fatwas";
import {
  setIsFatwasListLoading,
  setFatwasList,
} from "../../redux/actions/fatwasActions";
import { styles } from "./style";
import FatwasList from "../../components/FatwasList";
import { fontScale, scale } from "react-native-utils-scale";

const FatwasScreen = (props) => {
  const { isFatwasListLoading } = useSelector((state) => state.Fatwas);

  const dispatch = useDispatch();
  const [playingId, setPlayingId] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    dispatch(setIsFatwasListLoading(true));
    getFatwas({
      success: (res) => {
        dispatch(setIsFatwasListLoading(false));
        dispatch(setFatwasList(res.data));
      },
      error: (error) => {
        dispatch(setIsFatwasListLoading(false));
        console.log("Fatwas Error:", error);
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
          flipBackButton
          onMenuPress={() =>
            props.navigation.openDrawer ? props.navigation.openDrawer() : {}
          }
        />
        {isFatwasListLoading ? (
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
                  color: "#c79546",
                }}
              >
                الفتاوى
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignSelf: "stretch",
              }}
            >
              <FatwasList
                navigation={props.navigation}
                setPlayingId={setPlayingId}
                playingId={playingId}
              />
            </View>
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FatwasScreen;
