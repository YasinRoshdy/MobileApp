import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StatusBar,
  ScrollView,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ArticleBrief from "../../components/ArticleBrief";
import BottomNavigationButton from "../../components/BottomNavigationButton";
import DayInfoButton from "../../components/DayInfoButton";
import DayInfoCard from "../../components/DayInfoCard";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import DayAyaIcon from "../../components/svg/DayAyaIcon";
import DayBookIcon from "../../components/svg/DayBookIcon";
import DayFatwaIcon from "../../components/svg/DayFatwaIcon";
import DayHadithIcon from "../../components/svg/DayHadithIcon";
import { getDailyPublish } from "../../api/dailyPublish";
import {
  getAyatTafsirAudioList,
  getAyatTafsirVideoList,
  getSura,
  getSuraList,
} from "../../api/quran";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import { postCallUs } from "../../api/callUs";
import { getFatwas } from "../../api/fatwas";
import { getOtherScienceSubject } from "../../api/otherScience";
import { convertNumberToArabic } from "../../utils/converters";
import { Linking } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";

const HomeScreen = (props) => {
  // const { onGoBack } = props.route.params;
  const favoritesState = useSelector((state) => state.Favorites);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { navigate, getParent } = useNavigation();

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
          onBackPress={() => {
            // onGoBack();
            getParent().getParent().goBack();
          }}
          onMenuPress={() =>
            props.navigation.getParent().openDrawer
              ? props.navigation.getParent().openDrawer()
              : {}
          }
          // onMenuPress={() => navigate("HomeDrawer")}
        />
        <ScrollView>
          <ImageBackground
            source={require("../../assets/images/app-background.png")}
            resizeMode="cover"
            style={{
              flex: 1,
              // justifyContent: 'center',
              // alignItems: 'center',
              alignSelf: "stretch",
            }}
          >
            <View
              style={{
                paddingHorizontal: scale(16),
                // backgroundColor: Colors.SeaGreen,
              }}
            >
              <ArticleBrief
                title="نبذة عن الشيخ"
                body={`وُلد فضيلته بمصر في الأول من يناير من عام ${convertNumberToArabic(
                  1932
                )}م. حصل على بكالوريوس العلوم البحرية سنة ${convertNumberToArabic(
                  1952
                )}م. وشهادة ربان لأعالى البحار عام ${convertNumberToArabic(
                  1967
                )} م.`}
                buttonTitle="اقرأ المزيد"
                onButtonPress={() => props.navigation.navigate("AboutSheikh")}
                buttonStyle={{ alignSelf: "flex-end" }}
              />
              {/* <ArticleBrief
                title="نبذة عن الجمعية"
                body={`تأسست جمعية المواساة الإسلامية بالإسكندرية عام ${convertNumberToArabic(
                  1910
                )}  . ترأس الجمعية فضيلة الشيخ ياسين محمد رشدى سنة ${convertNumberToArabic(
                  1991
                )} ميلادية.`}
                buttonTitle="اقرأ المزيد"
                onButtonPress={() => props.navigation.navigate("AboutJamiah")}
                buttonStyle={{ alignSelf: "flex-end" }}
              /> */}
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  paddingVertical: scale(8),
                }}
              >
                <DayInfoButton
                  title="فقرة اليوم"
                  icon={
                    <DayBookIcon
                      color={selectedIndex === 3 ? "#c79546" : "#011132"}
                    />
                  }
                  onPress={() => setSelectedIndex(3)}
                  selected={selectedIndex === 3}
                />
                <DayInfoButton
                  title="فتوى اليوم"
                  icon={
                    <DayFatwaIcon
                      color={selectedIndex === 2 ? "#c79546" : "#011132"}
                    />
                  }
                  onPress={() => setSelectedIndex(2)}
                  selected={selectedIndex === 2}
                />
                <DayInfoButton
                  title="حديث اليوم"
                  icon={
                    <DayHadithIcon
                      // width={scale(32)}
                      // height={scale(32)}
                      // scale={0.65}
                      color={selectedIndex === 1 ? "#c79546" : "#011132"}
                    />
                  }
                  onPress={() => setSelectedIndex(1)}
                  selected={selectedIndex === 1}
                />
                <DayInfoButton
                  title="آية اليوم"
                  icon={
                    <DayAyaIcon
                      color={selectedIndex === 0 ? "#c79546" : "#011132"}
                    />
                  }
                  onPress={() => setSelectedIndex(0)}
                  selected={selectedIndex === 0}
                />
              </View>
              <View
                style={{
                  marginHorizontal: scale(16),
                }}
              >
                <DayInfoCard
                  content={
                    selectedIndex === 0
                      ? "إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ"
                      : selectedIndex === 1
                      ? "إنما الأعمال بالنيّات ، وإنما لكل امريء ما نوى ، فمن كانت هجرته إلى الله ورسوله ، فهجرته إلى الله ورسوله ، ومن كانت هجرته لدنيا يصيبها ، أو امرأة ينكحها ، فهجرته إلى ما هاجر إليه"
                      : selectedIndex === 2
                      ? "فتوى اليوم"
                      : selectedIndex === 3
                      ? "فقرة اليوم"
                      : null
                  }
                />
              </View>
            </View>
            {/* Browse Quran Container */}
            <View
              style={{
                alignSelf: "stretch",
                alignItems: "center",
                marginVertical: scale(3),
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Bold",
                  color: "#000000",
                }}
              >
                المصحف الإلكترونى
              </Text>
            </View>
            <ImageBackground
              source={require("../../assets/images/browse-quran-card-background.png")}
              resizeMode="cover"
              style={{
                height: scale(120),
                justifyContent: "center",
                marginHorizontal: scale(16),
                borderRadius: scale(16),
                overflow: "hidden",
              }}
            >
              <StyledButton
                buttonTitle="تصفح المصحف"
                inactiveColor="#011132"
                activeColor="#c79546"
                style={{
                  width: scale(170),
                  position: "absolute",
                  // left: 0,
                  left: scale(10),
                  // backgroundColor: '#011132',
                }}
                onPress={
                  () => Linking.openURL("https://yassinroushdy.com/read_quran")
                  // props.navigation.getParent().navigate("QuranStack")
                }
              />
            </ImageBackground>
          </ImageBackground>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
