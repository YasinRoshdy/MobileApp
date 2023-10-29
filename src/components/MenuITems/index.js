import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { scale } from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import BooksOutlineIcon from "../svg/BooksOutlineIcon";
import ContactUsOutlineIcon from "../svg/ContactUsOutlineIcon";
import DayAyaIcon from "../svg/DayAyaIcon";
import DayBookIcon from "../svg/DayBookIcon";
import DayFatwaIcon from "../svg/DayFatwaIcon";
import DayHadithIcon from "../svg/DayHadithIcon";
import FavoriteOutlineIcon from "../svg/FavoriteOutlineIcon";
import HomeOutlineIcon from "../svg/HomeOutlineIcon";
import SessionsOutlineIcon from "../svg/SessionsOutlineIcon";
import ShareIcon from "../svg/ShareIcon";
import Data from "../../data/datamanager";

function MenuItems(props) {
  const { navigate } = useNavigation();
  const [shouldShow1, setShouldShow1] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("HomeStack")}
        >
          <Text style={styles.title}>الصفحة الرئيسية</Text>
          <HomeOutlineIcon color={Colors.White} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("QuranStack")}
        >
          <Text style={styles.title}>القرآن الكريم</Text>
          <DayAyaIcon
            color={Colors.White}
            width={scale(25)}
            height={scale(32)}
            scale={0.75}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("HadithStack")}
        >
          <Text style={styles.title}>الحديث الشريف</Text>
          <DayHadithIcon
            color={Colors.White}
            width={scale(28)}
            height={scale(28)}
            scale={0.65}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          // onPress={() => navigate("OtherScienceStack")}
          onPress={() => setShouldShow1(!shouldShow1)}
        >
          <Text style={styles.title}>العلوم الأخرى</Text>
          <DayBookIcon
            color={Colors.White}
            width={scale(26)}
            height={scale(22)}
            scale={0.5}
          />
        </TouchableOpacity>
        {/* 1 */}
        {shouldShow1 ? (
          <TouchableOpacity
            style={styles.subItem}
            onPress={() =>
              navigate("OtherScienceStack", Data.setState({ isTab: false }))
            }
          >
            <Text style={styles.subTitle}>المواضيع الصوتية</Text>
          </TouchableOpacity>
        ) : null}
        {shouldShow1 ? (
          <TouchableOpacity
            style={styles.subItem}
            onPress={() =>
              navigate("OtherScienceStack", Data.setState({ isTab: true }))
            }
          >
            <Text style={styles.subTitle}>المواضيع المرئية</Text>
          </TouchableOpacity>
        ) : null}
        {/* end sub 1 */}
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("BooksAndArticlesStack")}
        >
          <Text style={styles.title}>الكتب و المقالات</Text>
          <BooksOutlineIcon color={Colors.White} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("Fatwas")}
        >
          <Text style={styles.title}>الفتاوى</Text>
          <DayFatwaIcon
            color={Colors.White}
            width={scale(22)}
            height={scale(28)}
            scale={0.65}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          // onPress={() => navigate("SessionsStack")}
          onPress={() => setShouldShow2(!shouldShow2)}
        >
          <Text style={styles.title}>المجالس</Text>
          <SessionsOutlineIcon color={Colors.White} />
        </TouchableOpacity>
        {/* Sub menu 2 */}
        {shouldShow2 ? (
          <TouchableOpacity
            style={styles.subItem}
            onPress={() =>
              navigate("SessionsStack", Data.setState({ selectionIndex: 0 }))
            }
          >
            <Text style={styles.subTitle}>القرآن الكريم</Text>
          </TouchableOpacity>
        ) : null}
        {shouldShow2 ? (
          <TouchableOpacity
            style={styles.subItem}
            onPress={() =>
              navigate("SessionsStack", Data.setState({ selectionIndex: 1 }))
            }
          >
            <Text style={styles.subTitle}>الحديث الشريف</Text>
          </TouchableOpacity>
        ) : null}

        {shouldShow2 ? (
          <TouchableOpacity
            style={styles.subItem}
            onPress={() =>
              navigate("SessionsStack", Data.setState({ selectionIndex: 2 }))
            }
          >
            <Text style={styles.subTitle}>العلوم الأخرى</Text>
          </TouchableOpacity>
        ) : null}
        {/* End SUb Menu */}
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("FavoritesStack")}
        >
          <Text style={styles.title}>المفضله</Text>
          <FavoriteOutlineIcon color={Colors.White} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("ContactsUs")}
        >
          <Text style={styles.title}>اتصل بنا</Text>
          <ContactUsOutlineIcon color={Colors.White} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => console.log("Should Share")}
        >
          <Text style={styles.title}>شارك التطبيق</Text>
          <ShareIcon color={Colors.White} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // alignSelf: "center",
    marginRight: 30,
  },
  title: {
    fontFamily: "NotoKufiArabic-Regular",
    color: Colors.White,
    marginRight: scale(15),
    fontStyle: "bold",
  },
  subTitle: {
    fontFamily: "NotoKufiArabic-Regular",
    color: Colors.White,
    fontSize: 12,
    marginRight: scale(1),
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // alignItems: 'center',
    alignItems: "center",
    alignSelf: "stretch",
    marginVertical: scale(15),
  },
  subItem: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // alignItems: 'center',
    alignItems: "center",
    alignSelf: "stretch",
    marginVertical: scale(5),
  },
});
export default MenuItems;
