import React from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../../components/DrawerContent";
import HomeStackNavigator from "../stacks/HomeStackNavigator";
import QuranStackNavigator from "../stacks/QuranStackNavigator";
import HadithStackNavigator from "../stacks/HadithStackNavigator";
import OtherScienceStackNavigator from "../stacks/OtherScienceStackNavigator";
import BooksAndArticlesStackNavigator from "../stacks/BooksAndArticlesStackNavigator";
import FatwasScreen from "../../screens/FatwasScreen";
import SessionsStackNavigator from "../stacks/SessionsStackNavigator";
import FavoritesStackNavigator from "../stacks/FavoritesStackNavigator";
import ContactsUsScreen from "../../screens/ContactsUsScreen";
import MainBottomTabsNav from "../tabNav/MainBottomTabsNav";
import HomeOutlineIcon from "../../components/svg/HomeOutlineIcon";
import QuranOutlineIcon from "../../components/svg/QuranOutlineIcon";
import MosqueOutlineIcon from "../../components/svg/MosqueOutlineIcon";
import OtherScienceOutlineIcon from "../../components/svg/OtherScienceOutlineIcon";
import BooksOutlineIcon from "../../components/svg/BooksOutlineIcon";
import SessionsOutlineIcon from "../../components/svg/SessionsOutlineIcon";
import ContactUsOutlineIcon from "../../components/svg/ContactUsOutlineIcon";
import FavoriteOutlineIcon from "../../components/svg/FavoriteOutlineIcon";
import { scale, fontScale } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import DayFatwaIcon from "../../components/svg/DayFatwaIcon";
import DayAyaIcon from "../../components/svg/DayAyaIcon";
import DayHadithIcon from "../../components/svg/DayHadithIcon";
import DayBookIcon from "../../components/svg/DayBookIcon";

const HomeDrawer = createDrawerNavigator();

const HomeDrawerNavigator = (props) => {
  // const { onGoBack } = props.route.params;
  const { tabIndex } = props.route.params;

  return (
    <HomeDrawer.Navigator
      // initialRouteName="MainBottomTabs"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        drawerActiveTintColor: Colors.White,
        drawerActiveBackgroundColor: "#0000",
        drawerInactiveTintColor: Colors.White,
        headerShown: false,
        drawerStyle: {
          width: scale(300),
        },
        drawerItemStyle: {
          flexDirection: "row-reverse",
        },
      }}
    >
      <HomeDrawer.Screen
        name="MainBottomTabs"
        component={MainBottomTabsNav}
        initialParams={{
          tabIndex: tabIndex,
        }}
        options={{
          drawerItemStyle: {
            height: 0,
          },
        }}
      />
      <HomeDrawer.Screen
        name="Stack"
        /* initialParams={{
					onGoBack: () => onGoBack(),
				}} */
        options={{
          drawerLabel: () => (
            <HomeOutlineIcon
              color={Colors.White}
              width={scale(25)}
              height={scale(32)}
              scale={0.75}
              style={{ marginBottom: -20 }}
            />
          ),
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -10,
              }}
            >
              الصفحة الرئيسية
            </Text>
          ),
        }}
        component={HomeStackNavigator}
      />
      <HomeDrawer.Screen
        name="QuranStack"
        options={{
          drawerLabel: () => (
            <DayAyaIcon
              color={Colors.White}
              width={scale(25)}
              height={scale(35)}
              scale={0.7}
              style={{ marginBottom: -20 }}
            />
            // <QuranOutlineIcon color={Colors.White} />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              القرآن الكريم
            </Text>
          ),
        }}
        component={QuranStackNavigator}
      />
      <HomeDrawer.Screen
        name="HadithStack"
        options={{
          drawerLabel: () => (
            <DayHadithIcon
              color={Colors.White}
              width={scale(25)}
              height={scale(35)}
              scale={0.6}
              style={{ marginBottom: -20 }}
            />
            // <MosqueOutlineIcon color={Colors.White} />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              الحديث الشريف
            </Text>
          ),
        }}
        component={HadithStackNavigator}
      />
      <HomeDrawer.Screen
        name="OtherScienceStack"
        options={{
          drawerLabel: () => (
            <DayBookIcon
              color={Colors.White}
              width={scale(25)}
              height={scale(35)}
              scale={0.5}
              style={{ marginBottom: -20 }}
            />
            // <OtherScienceOutlineIcon color={Colors.White} />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              العلوم الأخرى
            </Text>
          ),
        }}
        component={OtherScienceStackNavigator}
      />
      <HomeDrawer.Screen
        name="BooksAndArticlesStack"
        options={{
          drawerLabel: () => (
            <BooksOutlineIcon
              color={Colors.White}
              width={scale(25)}
              height={scale(32)}
              scale={1}
              style={{ marginBottom: -20 }}
            />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              الكتب والمقالات
            </Text>
          ),
        }}
        component={BooksAndArticlesStackNavigator}
      />
      <HomeDrawer.Screen
        name="Fatwas"
        options={{
          drawerLabel: () => (
            <DayFatwaIcon
              color={Colors.White}
              width={scale(22)}
              height={scale(37)}
              scale={0.65}
              style={{ marginBottom: -20 }}
            />
            // <MosqueOutlineIcon color={Colors.White} />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              الفتاوى
            </Text>
          ),
        }}
        component={FatwasScreen}
      />
      <HomeDrawer.Screen
        name="SessionsStack"
        options={{
          drawerLabel: () => (
            <SessionsOutlineIcon
              color={Colors.White}
              width={scale(22)}
              height={scale(37)}
              scale={0.65}
              style={{ marginBottom: -20 }}
            />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              المجالس
            </Text>
          ),
        }}
        component={SessionsStackNavigator}
      />
      <HomeDrawer.Screen
        name="ContactsUs"
        options={{
          drawerLabel: () => (
            <ContactUsOutlineIcon
              color={Colors.White}
              width={scale(25)}
              height={scale(37)}
              scale={0.65}
              style={{ marginBottom: -20 }}
            />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              اتصل بنا
            </Text>
          ),
        }}
        component={ContactsUsScreen}
      />
      <HomeDrawer.Screen
        name="FavoritesStack"
        options={{
          drawerLabel: () => (
            <FavoriteOutlineIcon
              color={Colors.White}
              width={scale(22)}
              height={scale(37)}
              scale={0.65}
              style={{ marginBottom: -20 }}
            />
          ),
          drawerLabelStyle: {
            fontFamily: "NotoKufiArabic-Regular",
          },
          drawerIcon: () => (
            <Text
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                color: Colors.White,
                marginBottom: -20,
              }}
            >
              المفضله
            </Text>
          ),
        }}
        component={FavoritesStackNavigator}
      />
    </HomeDrawer.Navigator>
  );
};

export default HomeDrawerNavigator;
