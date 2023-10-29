import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { scale } from "react-native-utils-scale";
import PlayAudioButton from "../PlayAudioButton";
import SaveIcon from "../svg/SaveIcon";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import { styles } from "./style";
import Colors from "../../constants/Colors";
import { saveOtherScienceAudio } from "../../utils/savers";
import {
  addToFavorites,
  addToOtherScienceAudioFavorites,
  removeFromFavorites,
  removeFromOtherScienceAudioFavorites,
} from "../../redux/actions/favoritesActions";
import { otherScienceAudioFavoriteObject } from "../../utils/mappers";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import Icon from "react-native-vector-icons/Ionicons";
const OtherScienceAudioItemsList = (props) => {
  const { data } = props;
  const {
    favorites,
    // otherScienceAudioFavorites
  } = useSelector((state) => state.Favorites);

  const dispatch = useDispatch();
  const [playingId, setPlayingId] = useState(null);
  const RenderOtherScienceAudioItems = ({ otherScienceAudioItem }) => {
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
                onPress={() =>
                  saveOtherScienceAudio(
                    otherScienceAudioItem.file,
                    `/Sounds/OtherScience/Subject_${otherScienceAudioItem.subject}`,
                    `subject_${otherScienceAudioItem.subject}`
                  )
                }
              >
                <SaveIcon color="#000825" />
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
            <PlayAudioButton
              url={otherScienceAudioItem.file}
              navigation={props.navigation}
              playingId={playingId}
              setPlayingId={setPlayingId}
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
                // backgroundColor: Colors.Blue,
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
                  arrayIncludes(favorites, otherScienceAudioItem)
                    ? () =>
                        dispatch(
                          removeFromFavorites(
                            favorites[
                              arrayItemIndex(
                                favorites,
                                otherScienceAudioFavoriteObject(
                                  otherScienceAudioItem
                                )
                              )
                            ]
                          )
                        )
                    : () =>
                        dispatch(
                          addToFavorites(
                            otherScienceAudioFavoriteObject(
                              otherScienceAudioItem
                            )
                          )
                        )
                }
              >
                {/* <FavoriteOutlineIcon
                  color={
                    arrayIncludes(favorites, otherScienceAudioItem)
                      ? "#c79546"
                      : "#011132"
                  }
                /> */}
                <Icon
                  name={
                    arrayIncludes(favorites, otherScienceAudioItem)
                      ? "star"
                      : "star-outline"
                  }
                  size={18}
                  style={{
                    marginTop: -3,
                    color: arrayIncludes(favorites, otherScienceAudioItem)
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
                // backgroundColor: Colors.Blue,
              }}
            >
              <ShareIcon color="#000825" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                alignSelf: "stretch",
                textAlign: "right",
                fontFamily: "NotoKufiArabic-Regular",
                color: "#000825",
              }}
            >
              {otherScienceAudioItem.title}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const { container } = styles;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        // alignItems: 'center',
        alignSelf: "stretch",
        // backgroundColor: Colors.SeaGreen,
      }}
    >
      <FlatList
        keyExtractor={(otherScienceAudioItem, index) =>
          `${index}-${otherScienceAudioItem}`
        }
        data={data}
        renderItem={({ item }) => (
          <RenderOtherScienceAudioItems otherScienceAudioItem={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default OtherScienceAudioItemsList;
