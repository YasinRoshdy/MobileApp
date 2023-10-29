import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback,
    FlatList,
    StatusBar,
    Linking, Image, useWindowDimensions, Dimensions,
} from "react-native";
import {fontScale, scale} from "react-native-utils-scale";
import Colors from "../../constants/Colors";
import {styles} from "./style";
import DeviceInfo from "react-native-device-info";

const names = [
    {name: "القرآن الكريم", index: 1},
    {name: "الصفحة الرئيسية", index: 0},
    {name: "العلوم الأخرى", index: 3},
    {name: "الحديث الشريف", index: 2},
    {name: "الفتاوى", index: 5},
    {name: "الكتب والمقالات", index: 4},
];

const IntroScreen = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const {height, width} = useWindowDimensions();
    const isPortrait = height > width;
    const isTablet = DeviceInfo.isTablet();

    const RenderItems = ({item, index}) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    setActiveIndex(index);
                    props.navigation.navigate("HomeDrawer", {
                        tabIndex: item.index,
                    });
                }}
            >
                <View
                    style={{
                        marginHorizontal: scale(5),
                    }}
                >
                    <ImageBackground
                        source={
                            activeIndex === index
                                ? require("../../assets/images/intro-new-button-2.png")
                                : require("../../assets/images/intro-new-button-2.png")
                        }
                        resizeMode="stretch"
                        style={{
                            width: scale(!isTablet ? 170 : 220),
                            height: scale(!isTablet ? 65 : 90 ),
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                marginTop: scale(-8),
                                fontSize: fontScale(13),
                                fontFamily: "NotoKufiArabic-Bold",
                                color: "#c79546",
                            }}
                        >
                            {item.name}
                        </Text>
                    </ImageBackground>
                </View
                >
            </TouchableWithoutFeedback>
        );
    };

    const {container} = styles;

    return (
        <ImageBackground
            source={require("../../assets/images/intro-bg.png")}
            resizeMode="cover"
            style={container}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                }}
            >
                <StatusBar
                    barStyle="light-content"
                    animated
                    backgroundColor="#000825"
                />
                <View
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            marginTop: scale(-20),
                            fontSize: fontScale(66),
                            fontFamily: "W_esteghlal",
                            color: Colors.White,
                            elevation: 24,
                        }}
                    >
                        فضيلة الشيخ
                    </Text>
                    <Text
                        style={{
                            marginTop: scale(-40),
                            fontSize: fontScale(88),
                            fontFamily: "W_esteghlal",
                            color: Colors.IntroText,
                            elevation: 24,
                        }}
                    >
                        ياسين رشدى
                    </Text>
                    {isPortrait && <Image
                        source={require('../../assets/images/bg-image.png')}
                        style={{
                            marginTop: scale(-20),
                            width: isTablet ? scale(450) : scale(300),
                            height: isTablet ? scale(450) : scale(300),
                        }}
                    />}

                </View>
                <View
                    style={{
                        height: isTablet ? Dimensions.get("screen").height / 2.8 : scale(250) ,
                        justifyContent: "space-evenly",
                        alignSelf: "stretch",
                    }}
                >
                    <FlatList
                        keyExtractor={(item, index) => `${index}-${item}`}
                        data={names}
                        renderItem={({item, index}) => (
                            <RenderItems item={item} index={index}/>
                        )}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    />
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "stretch",
                            marginTop: 16,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: fontScale(14),
                                fontFamily: "NotoKufiArabic-Regular",
                                color: Colors.White,
                                textDecorationLine: "underline",
                            }}
                            onPress={() => Linking.openURL("https://yassinroushdy.com/")}
                        >
                            https://yassinroushdy.com/
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default IntroScreen;
