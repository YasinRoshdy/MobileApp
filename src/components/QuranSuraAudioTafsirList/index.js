import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayAudioButton from "../PlayAudioButton";
import SaveIcon from "../svg/SaveIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import ArrowDownIcon from "../svg/ArrowDownIcon";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import QuranSuraAudioTafsirItem from "../QuranSuraAudioTafsirItem";
import { scale } from "react-native-utils-scale";
import {
  setIsSuraAudioTafsirLoading,
  setSuraAudioTafsirList,
} from "../../redux/actions/quranActions";
import { getAyatTafsirAudioList } from "../../api/quran";
import { quranSuraAudioTafsirFavoriteObject } from "../../utils/mappers";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import { convertNumberToArabic } from "../../utils/converters";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";

const QuranSuraAudioTafsirList = (props) => {
  //   console.log(props.navigation);
  const { isSuraAudioTafsirLoading, suraAudioTafsirList, sura } = useSelector(
    (state) => state.Quran
  );
  const {
    favorites,
    // quranAudioTafsirFavorites
  } = useSelector((state) => state.Favorites);

  const [activeIndex, setActiveIndex] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsSuraAudioTafsirLoading(true));
    getAyatTafsirAudioList(sura.id, {
      success: (res) => {
        dispatch(setIsSuraAudioTafsirLoading(false));
        dispatch(setSuraAudioTafsirList(res.data));
      },
      error: (error) => {
        dispatch(setIsSuraAudioTafsirLoading(false));
        console.log("Sura Audio Tafsir Error:", error);
      },
    });
  }, []);

  const RenderAudioTafsirs = ({ tafsir, index }) => {
    const favObject = {
      title: `تفسير سورة ${sura.name} من الآية ${convertNumberToArabic(
        tafsir.aya_start_count
      )} إلى ${convertNumberToArabic(tafsir.aya_end_count)}`,
      ...tafsir,
    };
    return (
      <QuranSuraAudioTafsirItem
        navigation={props.navigation}
        tafsir={tafsir}
        sura={sura}
        shouldCollapse={activeIndex !== index}
        onItemPress={
          arrayIncludes(favorites, favObject)
            ? () => {
                dispatch(
                  removeFromFavorites(
                    favorites[
                      arrayItemIndex(
                        favorites,
                        quranSuraAudioTafsirFavoriteObject(favObject)
                      )
                    ]
                  )
                );
              }
            : () => {
                dispatch(
                  addToFavorites(quranSuraAudioTafsirFavoriteObject(favObject))
                );
              }
        }
        onExpand={() => {
          setActiveIndex(index);
        }}
        onCollapse={() => {
          setActiveIndex(-1);
        }}
        onPlay={setPlayingId}
        playingId={playingId}
        isFavorite={arrayIncludes(favorites, favObject)}
      />
    );
  };

  const { container } = styles;

  return isSuraAudioTafsirLoading ? (
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
    <View
      style={{
        flex: 1,
        // height: 150,
        justifyContent: "center",
        // alignItems: 'center',
        alignSelf: "stretch",
        paddingHorizontal: scale(16),
      }}
    >
      <FlatList
        keyExtractor={(audioTafsir, index) => `${index}-${audioTafsir}`}
        data={suraAudioTafsirList}
        renderItem={({ item, index }) => (
          <RenderAudioTafsirs tafsir={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          // paddingHorizontal: 16,
          // backgroundColor: Colors.MediumTurquoise,
        }}
      />
    </View>
  );
};

export default QuranSuraAudioTafsirList;
