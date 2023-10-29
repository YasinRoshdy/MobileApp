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
import { convertNumberToArabic } from "../../utils/converters";
import { styles } from "./style";

const AboutSheikhScreen = (props) => {
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
                نبذة عن الشيخ
              </Text>
            </View>
            <View
              style={{
                marginBottom: scale(10),
              }}
            >
              <Image
                source={require("../../assets/images/about-sheikh-heading.png")}
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
                وُلد فضيلة الشيخ / ياسين محمد رشدي بمحافظة القاهرة بمصر في الأول
                من يناير من عام 1932م. وحصل على بكالوريوس العلوم البحرية سنة
                1952م. وشهادة ربان لأعالي البحار عام 1967 م. وقد تدرج سيادته
                بالوظائف المدنية حتى درجة وكيل وزارة ثمَّ استقال منها عام
                1983م.، وذلك للتفرغ لأمور الدعوة والأعمال الخيرية.
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
                - لازم فضيلته وتلقى العلم عن شيخه فضيلة الشيخ / محمد الأمير عبد
                المنعم.
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
                - لعمل في مجال الدعوة إلى الله منذ عام 1962م. حتى وفاته، بعد أن
                أذن له شيخُه بذلك.
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
                - كان منهج الشيخ في الدعوة تعليم الناس كتاب الله وسنة رسوله صلى
                الله عليه وسلم، فكان يخطب الجمعة بمسجد المواساة بالإسكندرية، ومن
                خلال الخطبة يقوم ببيان معاني القرآن بأسلوب ميسر يستفيد منه
                المثقفون والعوام على سواء، حتى أتمَّ التفسير كاملاً بفضل الله
                وتوفيقه على مدار ستة عشر عاماً، كما كان يقوم فضيلته بشرح الحديث
                من صحيح البخاري يوم الثلاثاء من كل أسبوع بداية من عام 1977 م.،
                حتى أتمَّ الشرح كاملاً، وكلُّ ذلك حسبة لوجه الله تعالى، وبدون أي
                مقابل مادي.
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
                - قام فضيلته بتنظيم حلقات العلم في المسجد؛ كتحفيظ القرآن الكريم
                للرجال والنساء والأطفال، والتجويد، ودراسة الفقه على المذاهب
                الأربعة، كما قام بشرح بعض علوم الدين الأخرى ومنها؛ علوم القرآن،
                ومناقب بالصحابة، وأخلاقيات الإسلام.
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
                - تميَّز منهج الشيخ بالوسطية، وعدم الانتماء أو التحيز لأي جماعة
                من الجماعات الإسلامية أو فرقة من الفرق.
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
                - قام سيادته بتوسعة المسجد ثلاث مرات: الأولى عام 1979 م.،
                والثانية عام 1989 م.، والثالثة والأخيرة عام 1994 م. لتصل مساحة
                المسجد إلى ما يزيد على سبعة أضعاف مساحة المسجد الأول.
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
                - حصل الشيخ رحمه الله على نوط الامتياز من الطبقة الأولى من السيد
                / رئيس الجمهورية في يوم تكريم الدعاة بتاريخ (24 رجب 1411 هـ.)
                الموافق 9 فبراير 1991 م.
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
                - ترأس فضيلته مجلس إدارة جمعية المواساة بالإسكندرية منذ عام 1991
                م. حتى وفاته، كما تم اختياره عضواً بمجلس إدارة مستشفى المواساة
                (التابعة لجامعة الإسكندرية) بقرار المحافظ رقم 265 لسنة 1996 م.
                وذلك حتى وفاته.
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
                - ترأس فضيلته مجلس إدارة جمعية المواساة بالإسكندرية منذ عام
                ترشَّح سيادته من قِبل كلية الآداب جامعة القاهرة لنيل جائزة الملك
                فيصل العالمية لخدمة الإسلام بتاريخ 9-7-1992 م.
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
                - حصل على عضوية اتحاد الكُتَاب (عضوية عاملة).
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
                - قام فضيلته بإنشاء مركز المواساة الإسلامي الدولي عام 1984 م.،
                وهذا المركز يقوم بالاتصال بما يزيد عن ألف مركز على مستوى العالم
                الإسلامي، ويتم تزويد تلك المراكز بالكتب والنشرات الدينية مجانا
                دون مقابل مادي، باللغة العربية والإنجليزية والفرنسية بالتعاون مع
                كل من الأزهر الشريف والمجلس الأعلى للشئون الإسلامية.
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
                - لفضيلته العديد من البرامج في تليفزيون جمهورية مصر العربية،
                وإذاعة وتليفزيون الإسكندرية، واذاعة القرآن الكريم، فضلاً عن
                المقالات المنشورة لسيادته بالصحف، كما أن بعض مقالاته تُرجِمت
                لمجلة الأزهر، وكل ذلك أيضاً حسبة لوجه الله تعالى وبدون مقابل
                مادي.
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
                - أنشأ لجنة الزكاة والقرض الحسن بالجمعية، والتي تقوم بالصرف على
                ما يزيد عن 3500 أسرة بمدينة الإسكندرية، بخلاف الصرف على الحالات
                التي تحتاج لإعانة عاجلة؛ كالكوارث - والعمليات الجراحية وما إلى
                ذلك.
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
                - أنشأ سيادته لجنة كفالة المريض لعلاج المرضى الفقراء مجاناً،
                ويشمل العلاج: الكشف والتحاليل، والأشعة، وإجراء العمليات
                الجراحية، وصرف الدواء.
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
                - أنشأ مركز المواساة الطبي بمنطقة القباري بالإسكندرية بأعلى
                مستوى طبي وخدمي، وقد تم تجهيزه بأحدث الأجهزة الطبية لخدمة أبناء
                الحي الفقراء بأسعار رمزية.
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
                - أنشأ فضيلته مشروع كفالة التعليم، وتم من خلاله الصرف على أربعة
                آلاف تلميذ وتلميذة، بمراحل التعليم المختلفة على مستوى محافظة
                الإسكندرية.
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
                - أتم إصلاح وتشجير وإضاءة المنطقة المحيطة بالمسجد بما في ذلك
                السلم المؤدي إلى منطقة الحضرة والذي عن طريقه يتم الوصول إلى كافة
                المستشفيات المحيطة بالمسجد.
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
                - أشرف على مكاتب توجيه الأسرة.
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
                - أنشأ فضيلته لجنة كفالة اليتيم، وهي ترعى 2160 أسرة، وعدد من
                الأيتام بلغ 3745 يتيماً.
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
                - أنشأ داراً للمسنين (منتجع المواساة) بجوار المسجد مباشرة.
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
                - أنشأ حضانة للأطفال.
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
                - توفي فضيلته يوم الأربعاء، السادس عشر من شعبان، لسنة 1431هـ.،
                الموافق 28-7-2010 م.
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
                - صدر لسيادته خمسة عشر مؤلفاً، سُميت "سلسلة الطريق إلى الـله"،
                وهي:
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
                1: هو الـله
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
                2: الإسلام وأركانه
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
                3: الأحاديث القدسية
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
                4: المحظورات
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
                5: من أخلاقيات الإسلام
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
                6: من مجامع الكلم
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
                7: التربية في الإسلام
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
                8: في رحاب الأصحاب
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
                9: نساء مؤمنات
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
                10: التصوف ماله وما عليه
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
                11: من أحكام الإسلام
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
                12: تأملات في آيات من القرآن الكريم
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
                13: من علوم القرآن وبلاغته
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
                14: مناجاة
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
                15: في رحاب المصطفي المختار صلى الله عليه وسلم
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
                - وجميع هذه المؤلفات تمت مراجعتها والموافقة عليها من مجمع البحوث
                الإسلامية بالأزهر الشريف، كما تُرجمت بعضها الى الإنجليزية
                والفرنسية، ويتم حالياً ترجمة باقي الكتب.
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
                - والجدير بالذكر أنَّ كل هذه الكتب تُهدى ولا تُباع، وجميعها يمكن
                تحميله من الموقع الإلكتروني، أو من خلال التطبيقات الخاصة بأجهزة
                التليفونات الذكية.
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
                - جميع إصدارات فضيلته متوفرة على قرص صلب Hard Disk.
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
                - مع ملاحظة أنّه يوجد نسخة من جميع مجالس فضيلته على الموقع
                الإلكتروني للجمعية: https://yassinroushdy.com وكذلك من خلال التطبيقات
                الخاصة بأجهزة التليفون الذكية (Apple - Android).
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default AboutSheikhScreen;
