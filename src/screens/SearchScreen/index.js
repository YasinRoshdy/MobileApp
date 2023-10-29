import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { fontScale } from "react-native-utils-scale";
import ScreenHeader from "../../components/ScreenHeader";
import Colors from "../../constants/Colors";
import HighlightText from "@sanar/react-native-highlight-text";
export default class SeachScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      key: "",
    };
  }

  componentDidMount() {
    const result = this.props.route.params?.result;
    const key = this.props.route.params?.key;
    this.setState({ searchResult: result, key: key });
    console.log(result);
  }
  render() {
    const { searchResult, key } = this.state;
    console.log(searchResult?.book_content_results);
    return (
      <SafeAreaView>
        <ScreenHeader
          hasBackButton
          isSearch={false}
          onBackPress={() => this.props.navigation.pop()}
        />
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{ paddingBottom: 50, backgroundColor: "#fff" }}
        >
          <View
            style={{
              height: "100%",
              width: "95%",
              paddingVertical: 20,
              paddingBottom: 30,
            }}
          >
            <Text style={styles.title}>كلمة البحث</Text>
            <Text
              style={{
                ...styles.title,
                marginHorizontal: 20,
                borderWidth: 1,
                width: "90%",
                padding: 5,
                borderRadius: 5,
                borderColor: Colors.Gray,
                marginTop: 5,
              }}
            >
              {key}
            </Text>
            <Text style={styles.title}>نتائج البحث</Text>
            {searchResult?.quran_results?.length > 0 && (
              <View
                style={{
                  width: "95%",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  alignSelf: "flex-end",
                  padding: 5,
                  backgroundColor: "#c79546",
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    width: "10%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  رابط
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "10%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  اية
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "10%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  سورة
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "70%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  نتائج البحث فى القران الكريم
                </Text>
              </View>
            )}
            {searchResult?.quran_results?.length > 0 && (
              <FlatList
                data={searchResult?.quran_results}
                style={{ marginBottom: 50 }}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: "95%",
                      flexDirection: "row",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderBottomWidth: 0.2,
                      alignSelf: "flex-end",
                      padding: 5,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.text,
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      فيديو تفسير الاية
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      اية:
                      {item?.count}
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      {item?.sura}
                    </Text>
                    <HighlightText
                      highlightStyle={{ backgroundColor: "yellow" }}
                      searchWords={[key]}
                      textToHighlight={item?.text}
                      style={{ ...styles.text, width: "70%" }}
                    />
                    {/* <Text
                      style={{
                        ...styles.text,
                        width: "70%",
                      }}
                    >
                      {item?.text}
                    </Text> */}
                  </View>
                )}
              />
            )}
            {searchResult?.hadith_results?.length > 0 && (
              <View
                style={{
                  width: "95%",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  alignSelf: "flex-end",
                  padding: 5,
                  backgroundColor: "#c79546",
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    width: "10%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  رابط
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "20%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  كتاب
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "70%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  نتائج البحث فى الحديث الشريف
                </Text>
              </View>
            )}
            {searchResult?.hadith_results?.length > 0 && (
              <FlatList
                data={searchResult?.hadith_results}
                style={{ marginBottom: 50 }}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: "95%",
                      flexDirection: "row",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderBottomWidth: 0.2,
                      alignSelf: "flex-end",
                      padding: 5,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.text,
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      فيديو تفسير الحديث
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      {item?.book}
                    </Text>
                    <HighlightText
                      highlightStyle={{ backgroundColor: "yellow" }}
                      searchWords={[key]}
                      textToHighlight={item?.text}
                      style={{ ...styles.text, width: "70%" }}
                    />
                    {/* <Text style={{ ...styles.text, width: "70%" }}>
                      {item?.text}
                    </Text> */}
                  </View>
                )}
              />
            )}
            {searchResult?.book_results?.length > 0 && (
              <View
                style={{
                  width: "95%",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  alignSelf: "flex-end",
                  padding: 5,
                  backgroundColor: "#c79546",
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    width: "10%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  رابط
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "20%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  صفحة
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "70%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  نتائج البحث داخل الكتب
                </Text>
              </View>
            )}
            {searchResult?.book_results?.length > 0 && (
              <FlatList
                data={searchResult?.book_results}
                style={{ marginBottom: 50 }}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: "95%",
                      flexDirection: "row",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderBottomWidth: 0.2,
                      alignSelf: "flex-end",
                      padding: 5,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.text,
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      تصفح
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      {item?.sura}
                    </Text>
                    <HighlightText
                      highlightStyle={{ backgroundColor: "yellow" }}
                      searchWords={[key]}
                      textToHighlight={item?.text}
                      style={{ ...styles.text, width: "70%" }}
                    />
                    {/* <Text style={{ ...styles.text, width: "70%" }}>
                      {item?.text}
                    </Text> */}
                  </View>
                )}
              />
            )}
            {searchResult?.fatwa_results?.length > 0 && (
              <View
                style={{
                  width: "95%",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  alignSelf: "flex-end",
                  padding: 5,
                  backgroundColor: "#c79546",
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    width: "10%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  رابط
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "20%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  صفحة
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "70%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  نتائج البحث داخل الكتب
                </Text>
              </View>
            )}
            {searchResult?.fatwa_results?.length > 0 && (
              <FlatList
                data={searchResult?.fatwa_results}
                style={{ marginBottom: 50 }}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: "95%",
                      flexDirection: "row",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderBottomWidth: 0.2,
                      alignSelf: "flex-end",
                      padding: 5,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.text,
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      {item?.count}
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      {item?.sura}
                    </Text>
                    <HighlightText
                      highlightStyle={{ backgroundColor: "yellow" }}
                      searchWords={[key]}
                      textToHighlight={item?.text}
                      style={{ ...styles.text, width: "70%" }}
                    />
                    {/* <Text style={{ ...styles.text, width: "70%" }}>
                      {item?.text}
                    </Text> */}
                  </View>
                )}
              />
            )}
            {searchResult?.otherscience_results?.length > 0 && (
              <View
                style={{
                  width: "95%",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  alignSelf: "flex-end",
                  padding: 5,
                  backgroundColor: "#c79546",
                }}
              >
                <Text
                  style={{
                    ...styles.title,
                    width: "10%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  رابط
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "20%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  العلم
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    width: "70%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  نتائج البحث فى العلوم الاخرى
                </Text>
              </View>
            )}
            {searchResult?.otherscience_results?.length > 0 && (
              <FlatList
                data={searchResult?.otherscience_results}
                style={{ marginBottom: 50 }}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: "95%",
                      flexDirection: "row",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderBottomWidth: 0.2,
                      alignSelf: "flex-end",
                      padding: 5,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.text,
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      فيديو عن الموضوع
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      {item?.subject}
                    </Text>
                    <HighlightText
                      highlightStyle={{ backgroundColor: "yellow" }}
                      searchWords={[key]}
                      textToHighlight={item?.title}
                      style={{ ...styles.text, width: "70%" }}
                    />
                    {/* <Text style={{ ...styles.text, width: "70%" }}>
                      {item?.title}
                    </Text> */}
                  </View>
                )}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: "NotoKufiArabic-Regular",
    color: Colors.Black,
    marginVertical: 5,
    textAlign: "right",
  },
  text: {
    fontSize: 10,
    fontFamily: "NotoKufiArabic-Regular",
    color: Colors.Black,
    marginVertical: 5,
    textAlign: "right",
  },
});
