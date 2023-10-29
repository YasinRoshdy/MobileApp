import React, { useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getBooksList } from "../../api/books";
import { setBooks, setIsBooksLoading } from "../../redux/actions/booksActions";
import { baseUrl } from "../../../app.json";
import { styles } from "./style";
import { scale } from "react-native-utils-scale";

const BooksList = (props) => {
  const { isBooksLoading, books } = useSelector((state) => state.Books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsBooksLoading(true));
    getBooksList({
      success: (res) => {
        dispatch(setIsBooksLoading(false));
        dispatch(setBooks(res.data));
      },
      error: (error) => {
        dispatch(setIsBooksLoading(false));
        console.log("Get Books List Error:", error);
      },
    });
  }, []);

  const RenderBooks = ({ book }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: scale(14),
          marginVertical: scale(12),
          borderRadius: scale(5),
          overflow: "hidden",
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
            props.navigation.navigate("BookDetails", {
              book,
            })
          }
        >
          <Image
            source={{
              uri: `${book.cover.startsWith("/") ? book.cover.slice(1) : book.cover}`,
            }}
            resizeMode="cover"
            style={{
              width: Dimensions.get("screen").width / 2.3,
              height: Dimensions.get("screen").height / 3.5,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const { container } = styles;

  return isBooksLoading ? (
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
    <FlatList
      keyExtractor={(book, index) => `${index}-${book}`}
      data={books}
      numColumns={2}
      renderItem={({ item }) => <RenderBooks book={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default BooksList;
