import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SaveIcon from "../svg/SaveIcon";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import PlayAudioButton from "../PlayAudioButton";
import { scale } from "react-native-utils-scale";
import { styles } from "./style";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
const AudioFavoritesList = (props) => {
  const { item, playingId, setPlayingId } = props;
  // const { data } = props;
  const {
    favorites,
    // hadithAudioTafsirFavorites
  } = useSelector((state) => state.Favorites);

  const dispatch = useDispatch();

  return (
    <View>
      <View
        style={{
          flex: 1,
          minHeight: scale(40),
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
          {/*        alignItems: "center",*/}
          {/*        alignSelf: "stretch",*/}
          {/*    }}*/}
          {/*    onPress={() =>*/}
          {/*        saveFatwaAudio(*/}
          {/*            item.file,*/}
          {/*            `/Sounds/Fatwas`,*/}
          {/*            `fatwa_${item.id}`,*/}
          {/*        )*/}
          {/*    }*/}
          {/*  >*/}
          {/*      <SaveIcon color="#011132"/>*/}
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
            url={item.audio_tafsir}
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
              onPress={() => dispatch(removeFromFavorites(item))}
            >
              {/* <FavoriteOutlineIcon
								color={
									favorites.includes(item)
										? '#c79546'
										: '#011132'
								}
							/> */}
              <Icon
                name={favorites.includes(item) ? "star" : "star-outline"}
                size={18}
                style={{
                  marginTop: -3,
                  color: favorites.includes(item) ? "#c79546" : "#011132",
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
            numberOfLines={null}
            style={{
              fontFamily: "NotoKufiArabic-Regular",
              alignSelf: "stretch",
              textAlign: "right",
              color: "#000825",
            }}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AudioFavoritesList;
