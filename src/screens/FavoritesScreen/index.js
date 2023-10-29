import React, { useEffect } from "react";
import {
  View,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import { styles } from "./style";
import { setIsFavoritesLoading } from "../../redux/actions/favoritesActions";
import FavoritesList from "../../components/FavoritesList";
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen = (props) => {
  const { navigate } = useNavigation();
  const { isFavoritesLoading, favorites } = useSelector(
    (state) => state.Favorites
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFavoritesLoading(true));
    setTimeout(() => {
      dispatch(setIsFavoritesLoading(false));
    }, 1000);
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
          onMenuPress={() =>
          	props.navigation.getParent().openDrawer
          		? props.navigation.getParent().openDrawer()
          		: {}
          }
          // onMenuPress={() => navigate("HomeDrawer")}
        />
        {isFavoritesLoading ? (
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
              alignSelf: "stretch",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignSelf: "stretch",
              }}
            >
              <FavoritesList navigation={props.navigation} />
            </View>
          </ImageBackground>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
