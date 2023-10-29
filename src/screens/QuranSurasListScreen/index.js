import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigationBar from "../../components/BottomNavigationBar";
import ScreenHeader from "../../components/ScreenHeader";
import {
  setIsSurasListLoading,
  setSurasList,
} from "../../redux/actions/quranActions";
import { getSurasList } from "../../api/quran";
import Colors from "../../constants/Colors";
import { quranSuras } from "../../data/quran";
import { styles } from "./style";
import reactotron from "../../ReactotronConfig";
import { convertNumberToArabic } from "../../utils/converters";
import { fontScale, scale } from "react-native-utils-scale";
import QuranSurasListItem from "../../components/QuranSurasListItem";
import { useNavigation } from "@react-navigation/native";

const QuranSurasListScreen = (props) => {
  const { suras, isSurasListLoading } = useSelector((state) => state.Quran);
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsSurasListLoading(true));
    getSurasList({
      success: (res) => {
        dispatch(setIsSurasListLoading(false));
        dispatch(setSurasList(res.results));
      },
      error: (error) => {
        dispatch(setIsSurasListLoading(false));
        console.log("Getting Sura Error:", error);
        Alert.alert("خطأ", "هناك خطأ حدث حاول لاحقا", [
          {
            text: "حسناً",
          },
        ]);
      },
    });
  }, []);

  const RenderQuranSuras = ({ sura }) => {
    return <QuranSurasListItem sura={sura} navigation={props.navigation} />;
    /* return (
			<View
				style={{
					height: scale(40),
					justifyContent: 'center',
					alignItems: 'center',
					marginVertical: scale(4),
					// paddingHorizontal: 16,
					borderRadius: scale(5),
					overflow: 'hidden',
					backgroundColor: '#011132',
				}}
			>
				<TouchableWithoutFeedback
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						alignSelf: 'stretch',
						// backgroundColor: Colors.SeaGreen,
					}}
					onPress={() =>
						props.navigation.navigate('QuranSuraDetails', {
							suraId: sura.id,
						})
					}
				>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							alignSelf: 'stretch',
						}}
					>
						<Text
							style={{
								fontSize: fontScale(14),
								fontFamily: 'NotoKufiArabic-Regular',
								color: Colors.White,
							}}
						>{`${sura.location}`}</Text>
						<Text
							style={{
								fontSize: fontScale(14),
								fontFamily: 'NotoKufiArabic-Regular',
								color: Colors.White,
							}}
						>
							-
						</Text>
						<Text
							style={{
								fontSize: fontScale(14),
								fontFamily: 'NotoKufiArabic-Regular',
								color: Colors.White,
							}}
						>{` عدد الايات ${convertNumberToArabic(
							sura.ayas_count,
						)}`}</Text>
						<Text
							style={{
								fontSize: fontScale(14),
								fontFamily: 'NotoKufiArabic-Regular',
								color: Colors.White,
							}}
						>
							-
						</Text>
						<Text
							style={{
								fontSize: fontScale(14),
								fontFamily: 'NotoKufiArabic-Regular',
								color: Colors.White,
							}}
						>{` ${sura.name}`}</Text>
						<Text
							style={{
								fontSize: fontScale(14),
								fontFamily: 'NotoKufiArabic-Regular',
								color: Colors.White,
							}}
						>
							-
						</Text>
						<Text
							style={{
								fontSize: fontScale(14),
								fontFamily: 'NotoKufiArabic-Regular',
								color: Colors.White,
							}}
						>{`${convertNumberToArabic(sura.number)}`}</Text>
						{/* <Text
					style={{
						fontSize: 16,
						fontFamily: 'NotoKufiArabic-Regular',
						color: Colors.White,
					}}
				>
					{`${sura.number} - ${sura.name} - عدد الايات ${sura.ayas_count} - ${sura.location}`}
				</Text> **}
					</View>
				</TouchableWithoutFeedback>
			</View>
		); */
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
          flipBackButton
          onMenuPress={() =>
            props.navigation.openDrawer ? props.navigation.openDrawer() : {}
          }
          // onMenuPress={() => navigate("HomeDrawer")}
        />
        {isSurasListLoading ? (
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
            }}
          >
            {/* <View
					style={{
						flex: 1,
						justifyContent: 'center',
						// alignItems: 'center',
						alignSelf: 'stretch',
						// backgroundColor: Colors.SeaGreen,
					}}
				> */}
            <View
              style={{
                alignItems: "center",
                marginHorizontal: scale(16),
                marginTop: scale(10),
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                }}
              >
                القرآن الكريم
              </Text>
            </View>
            <FlatList
              keyExtractor={(quranSura, index) => `${index}-${quranSura}`}
              data={suras}
              // data={quranSuras}
              renderItem={({ item }) => <RenderQuranSuras sura={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: scale(16),
                paddingVertical: scale(8),
              }}
            />
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuranSurasListScreen;
