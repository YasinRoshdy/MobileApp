import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { scale } from "react-native-utils-scale";
import { useDispatch, useSelector } from "react-redux";
import { getAyatTelawaList } from "../../api/quran";
import Colors from "../../constants/Colors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import {
  setIsSuraTelawaLoading,
  setSuraAudioList,
} from "../../redux/actions/quranActions";
import { arrayIncludes, arrayItemIndex } from "../../utils/arrayOperations";
import { convertNumberToArabic } from "../../utils/converters";
import { quranSuraTelawaFavoriteObject } from "../../utils/mappers";
import QuranSuraAudioListItem from "../QuranSuraAudioListItem";
import { styles } from "./style";

const QuranSuraAudioList = (props) => {
  const { isSuraTelawaLoading, suraAudioList, sura } = useSelector(
    (state) => state.Quran
  );
  const {
    favorites,
    // quranAudioTelawaFavorites
  } = useSelector((state) => state.Favorites);

  const [activeIndex, setActiveIndex] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsSuraTelawaLoading(true));
    getAyatTelawaList(sura?.id, {
      success: (res) => {
        dispatch(setIsSuraTelawaLoading(false));
        dispatch(setSuraAudioList(res.data));
      },
      error: (error) => {
        dispatch(setIsSuraTelawaLoading(false));
        console.log("Sura Audio Error:", error);
      },
    });
  }, []);

  const RenderAudioAyas = ({ audioAya, index }) => {
    const favObject = {
      title: `تلاوة سورة ${sura.name} من الآية ${convertNumberToArabic(
        audioAya.aya_start_count
      )} إلى ${convertNumberToArabic(audioAya.aya_end_count)}`,
      ...audioAya,
    };
    return (
      <QuranSuraAudioListItem
        navigation={props.navigation}
        index={index}
        id={index}
        audioAya={audioAya}
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
                        quranSuraTelawaFavoriteObject(favObject)
                      )
                    ]
                  )
                );
              }
            : () => {
                dispatch(
                  addToFavorites(quranSuraTelawaFavoriteObject(favObject))
                );
              }
        }
        onExpand={() => {
          setActiveIndex(index);
        }}
        onCollapse={() => {
          setActiveIndex(-1);
        }}
        isFavorite={arrayIncludes(favorites, favObject)}
        onPlay={setPlayingId}
        playingId={playingId}
      />
    );
  };

  const { container } = styles;

  return isSuraTelawaLoading ? (
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
        justifyContent: "center",
        alignSelf: "stretch",
        paddingHorizontal: scale(16),
      }}
    >
      <FlatList
        keyExtractor={(audioAya, index) => `${index}-${audioAya}`}
        data={suraAudioList}
        renderItem={({ item, index }) => (
          <RenderAudioAyas audioAya={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default QuranSuraAudioList;
