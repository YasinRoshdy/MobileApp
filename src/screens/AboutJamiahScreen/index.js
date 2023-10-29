import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import ScreenHeader from "../../components/ScreenHeader";
import Colors from "../../constants/Colors";
import { styles } from "./style";

const AboutJamiahScreen = (props) => {
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
          hasBackButton
          replaceMenu
          onBackPress={() => props.navigation.goBack()}
        />
        <ImageBackground
          source={require("../../assets/images/app-background.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <ScrollView
            style={{
              flex: 1,
              alignSelf: "stretch",
              marginHorizontal: scale(16),
              marginBottom: scale(4),
            }}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                marginVertical: scale(16),
                justifyContent: "flex-end",
                width: "100%",
                paddingRight: 15,
              }}
            >
              <Text
                style={{
                  fontSize: fontScale(16),
                  fontFamily: "NotoKufiArabic-Regular",
                  color: "#c79546",
                  textAlign: "right",
                }}
              >
                نبذة عن الجمعية
              </Text>
            </View>
            <View
              style={{
                marginBottom: scale(10),
              }}
            >
              <Image
                source={require("../../assets/images/about-jamiah-heading.png")}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تأسست جمعية المواساة الإسلامية بالإسكندرية عام 1910 م.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - ترأس إدارة الجمعية فضيلة الشيخ / ياسين رشدي منذ سنة 1991 م.
                حتى وفاته في يوليو 2010 م.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - شغل الأستاذ / محمد سيد أحمد، منصب رئيس مجلس الإدارة بعد وفاة
                الشيخ بأربعة أشهر، حتى نوفمبر 2020.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - يشغل حالياً المهندس / أسامة عزب، وهو أحد تلاميذ الشيخ، منصب
                رئيس مجلس إدارة الجمعية.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                أهداف الجمعية:
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - نشر الثقافة الإسلامية في ربوع الأرض، عن طريق مراسلة المراكز
                الإسلامية في مختلف بلاد العالم، ومدها بالكتب والنشرات والمصاحف
                التي تساعد في نشر الدعوة الإسلامية في تلك البلاد، والرد على
                الأسئلة الدينية.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - جمع أموال الزكاة لصرفها على الأسر المستحقة من الفقراء،
                والمحتاجين.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - المساعدة بالأموال اللازمة في حالات الكوارث التي تصيب الأسر.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - المساهمة في إعانة المرضى المصابين بأمراض مستعصية، مثل:
                السرطان، وأمراض الكلية، وأمراض القلب.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - إعانة المحتاجين في حالات الطوارئ؛ مثل العمليات الجراحية
                والأطراف الصناعية، والمساهمة في التعويض عن الأضرار الناتجة من
                الحريق، والمساهمة في تأسيس المنازل لبعض المؤلفة قلوبهم حديثاً.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - المشاركة في تقديم العون والمساعدة للمجتمع المصري من خلال أنشطة
                اجتماعية وخيرية؛ مثل إنشاء دور للحضانة، ومراكز رياضية للشباب،
                ومراكز طبية للعلاج، وكفالة التعليم، فضلاً عن كفالة اليتيم.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                لجان الجمعية:
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - هناك أكثر من لجنة بالجمعية، يقوم كل منها بأنشطة وخدمات مختلفة
                تحقق أهداف الجمعية، منها لجنة نشر الثقافة، ولجنة الزكاة.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                لجنــة نشـــر الثقـــافــة:
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تقوم اللجنة بمراسلة أكثر من 1500 مركز إسلامي حول العالم؛ مثل
                الولايات المتحدة الأمريكية، وألمانيا، وجمهورية غانا، وجمهورية
                توجو، وجمهورية ساحل العاج، والمملكة العربية السعودية، والفلبين،
                وجمهورية نيجيريا، واستراليا، والجدير بالذكر أن العدد الأكبر من
                تلك المراسلات لجمهورية غانا؛ لمواجهة تيارات التبشير.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تقوم اللجنة بمكاتبة هذه المراكز لعرض خدمات مختلفة منها: تلقي
                الأسئلة الدينية المختلفة، والرد عليها.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تزود اللجنة المراكز الإسلامية بالكتب، باللغات المختلفة:
                (إنجليزي - فرنسي - ألماني - عربي).
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تزود اللجنة المراكز الإسلامية بالمصاحف المكتوبة باللغة
                العربية، وترجمة معانى القرآن باللغات الإنجليزية والفرنسية
                والألمانية.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تقوم اللجنة بتزويد المراكز بتفسير آيات القرآن لفضيلة الشيخ /
                ياسين رشدي – رحمه الله.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تعمل اللجنة على نشر العلوم الدينية التي تم تدريسها بالمسجد
                لفضيلة الشيخ / ياسين رشدي – رحمه الله.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - قامت اللجنة بترجمة الكتب العربية لفضيلة الشيخ / ياسين رشدي –
                رحمه الله، من العربية إلى الفرنسية والإنجليزية مثل: "هو
                الـلَّه"، "الإسلام وأركانه"، "المحظورات"، "أخلاقيات الإسلام".
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تشرف اللجنة على إدارة الموقع الرسمي لجمعية المواساة، وتطبيقاته
                على الهواتف الذكية، وهو https://yassinroushdy.com
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                لجنة الزكاة:
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تشكلت لجنة الزكاة بالجمعية بقرار رقم 30 بتاريخ 7 / 8 / 1981،
                وتم استيفاء الإجراءات القانونية لتشكيلها بوزارة الشئون
                الاجتماعية، وبنك ناصر.
              </Text>
              <Text
                style={{
                  fontSize: fontScale(14),
                  fontFamily: "NotoKufiArabic-Regular",
                  textAlign: "right",
                  lineHeight: scale(25),
                  color: "#011132",
                }}
              >
                - تتمثل أنشطة اللجنة في تقديم المعونات للأسر، وأصحاب الأمراض
                المزمنة، ومعونات الدفعة الواحدة، وزكاة الفطر، ومعونة الحج،
                ومصروفات المدارس، وكذا السائلين. وقد بلغ عدد الأسر المستفيدة من
                أموال الزكاة حوالي 3450 أسرة، ينفق عليها مما تم تحصيله من رواد
                المسجد من تبرعات للصرف على الأسر وأغراض الزكاة المختلفة.
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default AboutJamiahScreen;
