import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SaveIcon from "../svg/SaveIcon";
import Icon from "react-native-vector-icons/Ionicons";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import PlayAudioButton from "../PlayAudioButton";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import { scale } from "react-native-utils-scale";
import { saveFatwaAudio } from "../../utils/savers";
import {
  addToFatwaFavorites,
  addToFavorites,
  removeFromFatwaFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import { fatwaFavoriteObject } from "../../utils/mappers";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";

const FatwasList = (props) => {
  const { playingId, setPlayingId } = props;

  const { fatwasList } = useSelector((state) => state.Fatwas);
  const {
    favorites,
    // fatwaFavorites
  } = useSelector((state) => state.Favorites);

  const dispatch = useDispatch();

  const RenderFatwas = ({ fatwa }) => {
    return (
      <View>
        <View
          style={{
            flex: 1,
            height: scale(40),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            marginVertical: scale(8),
            paddingHorizontal: scale(8),
            borderRadius: scale(5),
            borderWidth: scale(1),
            borderColor: "#000825",
          }}
        >
          <View
            style={{
              alignSelf: "stretch",
              flexDirection: "row",
              paddingHorizontal: scale(8),
              // backgroundColor: Colors.SeaGreen,
            }}
          >
            {/*<View*/}
            {/*  style={{*/}
            {/*    justifyContent: "center",*/}
            {/*    paddingHorizontal: scale(4),*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <TouchableOpacity*/}
            {/*    style={{*/}
            {/*      flex: 1,*/}
            {/*      justifyContent: "center",*/}
            {/*      alignItems: "center",*/}
            {/*      alignSelf: "stretch",*/}
            {/*    }}*/}
            {/*    onPress={() =>*/}
            {/*      saveFatwaAudio(*/}
            {/*        fatwa.file,*/}
            {/*        `/Sounds/Fatwas`,*/}
            {/*        `fatwa_${fatwa.id}`*/}
            {/*      )*/}
            {/*    }*/}
            {/*  >*/}
            {/*    <SaveIcon color="#011132" />*/}
            {/*  </TouchableOpacity>*/}
            {/*</View>*/}
            {/*<View*/}
            {/*  style={{*/}
            {/*    width: scale(1.5),*/}
            {/*    marginHorizontal: scale(6),*/}
            {/*    marginVertical: scale(4),*/}
            {/*    backgroundColor: "#000825",*/}
            {/*  }}*/}
            {/*/>*/}
            <PlayAudioButton
              url={fatwa.file}
              navigation={props.navigation}
              setPlayingId={setPlayingId}
              playingId={playingId}
            />
            <View
              style={{
                width: scale(1.5),
                marginHorizontal: scale(6),
                marginVertical: scale(4),
                backgroundColor: "#000825",
              }}
            />
            <View
              style={{
                justifyContent: "center",
                paddingHorizontal: scale(4),
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
                onPress={
                  arrayIncludes(favorites, fatwa)
                    ? () =>
                        dispatch(
                          removeFromFavorites(
                            favorites[
                              arrayItemIndex(
                                favorites,
                                fatwaFavoriteObject(fatwa)
                              )
                            ]
                          )
                        )
                    : () => dispatch(addToFavorites(fatwaFavoriteObject(fatwa)))
                }
              >
                {/* <FavoriteOutlineIcon
									color={
										arrayIncludes(favorites, fatwa)
											? '#c79546'
											: '#011132'
									}
								/> */}
                <Icon
                  name={
                    arrayIncludes(favorites, fatwa) ? "star" : "star-outline"
                  }
                  size={18}
                  style={{
                    marginTop: -3,
                    color: arrayIncludes(favorites, fatwa)
                      ? "#c79546"
                      : "#011132",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: scale(1.5),
                marginHorizontal: scale(6),
                marginVertical: scale(4),
                backgroundColor: "#000825",
              }}
            />
            <View
              style={{
                justifyContent: "center",
                paddingHorizontal: scale(4),
              }}
            >
              <ShareIcon color="#011132" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "NotoKufiArabic-Regular",
                alignSelf: "stretch",
                textAlign: "right",
                color: "#000825",
              }}
            >
              {fatwa.title}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const { container } = styles;

  return (
    <FlatList
      keyExtractor={(fatwa, index) => `${index}-${fatwa}`}
      data={fatwasList}
      renderItem={({ item }) => <RenderFatwas fatwa={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: scale(16),
      }}
    />
  );
};

export default FatwasList;
