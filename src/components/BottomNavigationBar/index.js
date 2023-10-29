import React from "react";
import { SafeAreaView, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomNavigationButton from "../BottomNavigationButton";
import HomeIcon from "../svg/HomeIcon";
import QuranIcon from "../svg/QuranIcon";
import MosqueIcon from "../svg/MosqueIcon";
import OtherScienceIcon from "../svg/OtherScienceIcon";
import BooksIcon from "../svg/BooksIcon";
import { styles } from "./style";
import Colors from "../../constants/Colors";
import { scale } from "react-native-utils-scale";
import DayAyaIcon from "../svg/DayAyaIcon";
import DayHadithIcon from "../svg/DayHadithIcon";
import HadithIconFilled from "../svg/HadithIconFilled";
import QuranIconFilled from "../svg/QuranIconFilled";

const BottomNavigationBar = ({ state, descriptors, navigation }) => {
  const { container } = styles;

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <View style={container}>
        {state?.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <BottomNavigationButton
              key={`${index}-${route.name}`}
              title={options.title}
              icon={
                route.name == "HomeStack" ? (
                  // route.name == 'HomeDrawer' ? (
                  <HomeIcon color="#c79546" />
                ) : route.name == "QuranStack" ? (
                  // <QuranIcon color='#c79546' />
                  <QuranIconFilled
                    color="#c79546"
                    width={scale(28)}
                    height={scale(28)}
                    scale={0.65}
                  />
                ) : route.name == "HadithStack" ? (
                  // <MosqueIcon color='#c79546' />
                  <HadithIconFilled
                    color="#c79546"
                    width={scale(30)}
                    height={scale(30)}
                    scale={0.65}
                  />
                ) : route.name == "OtherScienceStack" ? (
                  <OtherScienceIcon color="#c79546" />
                ) : route.name == "BooksAndArticlesStack" ? (
                  <BooksIcon color="#c79546" />
                ) : null
              }
              selected={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomNavigationBar;
