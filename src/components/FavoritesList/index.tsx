import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fontScale, scale } from "react-native-utils-scale";
import { Item, ItemType } from "../../models/Item";
import AudioFavoritesList from "../AudioFavoritesList";
import VideoFavoritesList from "../VideoFavoritesList";
import PDFFavoritesList from "../PDFFavoritesList";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";
import { styles } from "./style";
import { useState } from "react";

const FavoritesList = (props: any) => {
  const { navigation } = props;

  const { favorites } = useSelector((state) => state.Favorites);
  const [playingId, setPlayingId] = useState(null);
  const dispatch = useDispatch();

  const RenderItems = ({ item }: { item: Item }) => {
    return item.itemType === ItemType.PDF ? (
      <PDFFavoritesList
        item={item}
        onItemPress={() => {
          navigation.navigate(
            item.type === "artical" ? "ArticleDetails" : "BookDetails",
            {
              [item.type === "artical" ? "article" : "book"]: item,
            }
          );
        }}
      />
    ) : item.itemType === ItemType.VIDEO ? (
      <VideoFavoritesList
        item={item}
        onItemPress={() =>
          navigation.navigate("FavoriteVideo", {
            video: item,
          })
        }
        onItemLongPress={() => {
          dispatch(removeFromFavorites(item));
        }}
      />
    ) : item.itemType === ItemType.AUDIO ? (
      <AudioFavoritesList
        item={item}
        navigation={props.navigation}
        setPlayingId={setPlayingId}
        playingId={playingId}
      />
    ) : null;
  };

  const EmptyListComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <Text
          style={{
            fontSize: fontScale(18),
            fontFamily: "NotoKufiArabic-Regular",
            color: "#000825",
          }}
        >
          لا يوجد مفضلات
        </Text>
      </View>
    );
  };

  const { container } = styles;

  return (
    <FlatList
      keyExtractor={(item, index) => `${index}-${item}`}
      data={favorites}
      renderItem={({ item }) => <RenderItems item={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        marginHorizontal: scale(16),
      }}
      ListEmptyComponent={<EmptyListComponent />}
    />
  );
};

export default FavoritesList;
