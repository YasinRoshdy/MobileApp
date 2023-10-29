import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert,
  Linking,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fontScale, scale } from "react-native-utils-scale";
import { getPhoneNumbers, postFeedBack } from "../../api/callUs";
import ScreenHeader from "../../components/ScreenHeader";
import StyledButton from "../../components/StyledButton";
import Colors from "../../constants/Colors";
import { styles } from "./style";
import {
  setCallUsPhoneNumbers,
  setIsCallUsLoading,
} from "../../redux/actions/callUsActions";
import { useNavigation } from "@react-navigation/native";
import { Contacts } from "../../components/Contacts/Contacts";

const ContactsUsScreen = (props) => {
  const { navigate } = useNavigation();
  const { isCallUsLoading, phoneNumbers } = useSelector(
    (state) => state.CallUs
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const handleClick = (url) => {
    Linking.openURL(url);
  };
  useEffect(() => {
    dispatch(setIsCallUsLoading(true));
    getPhoneNumbers({
      success: (res) => {
        dispatch(setIsCallUsLoading(false));
        dispatch(setCallUsPhoneNumbers(res.results));
      },
      error: (error) => {
        dispatch(setIsCallUsLoading(false));
        console.log("The Error:", error);
      },
    });
  }, []);

  const sendFeedback = () => {
    if (name === "") {
      Alert.alert("خطأ", "برجاء ادخال الاسم قبل الأرسال");
    } else if (email === "") {
      Alert.alert("خطأ", "برجاء ادخال البريد الإلكترونى قبل الأرسال");
    } else if (message === "") {
      Alert.alert("خطأ", "برجاء ادخال الرساله قبل الأرسال");
    } else {
      dispatch(setIsCallUsLoading(true));
      postFeedBack(
        {
          name,
          email,
          message,
        },
        {
          success: (res) => {
            dispatch(setIsCallUsLoading(false));
            setName("");
            setEmail("");
            setMessage("");
            Alert.alert("تم", "تم ارسال رسالتك بنجاح");
          },
          error: (error) => {
            dispatch(setIsCallUsLoading(false));
            console.log("The Error:", error);
          },
        }
      );
    }
  };

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
          onMenuPress={() =>
          	props.navigation.openDrawer
          		? props.navigation.openDrawer()
          		: {}
          }
          // onMenuPress={() => navigate("HomeDrawer")}
        />
        {isCallUsLoading ? (
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
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{
              alignSelf: "stretch",
            }}
          >
            <ImageBackground
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                paddingHorizontal: scale(16),
                paddingVertical: scale(8),
              }}
              source={require("../../assets/images/app-background.png")}
              resizeMode="cover"
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginTop: scale(4),
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <Text
                    style={{
                      fontSize: fontScale(18),
                      fontFamily: "NotoKufiArabic-Regular",
                      textAlign: "right",
                      color: "#c79546",
                    }}
                  >
                    اتصل بنا
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    alignSelf: "stretch",
                  }}
                >
                  <View
                    style={{
                      marginVertical: scale(4),
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "NotoKufiArabic-Regular",
                        color: "#011132",
                      }}
                    >
                      الاسم
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "stretch",
                      marginVertical: scale(4),
                    }}
                  >
                    <TextInput
                      placeholder="الاسم"
                      placeholderTextColor={Colors.GrayOpacity}
                      value={name}
                      onChangeText={(newText) => setName(newText)}
                      style={{
                        textAlign: "right",
                        alignSelf: "stretch",
                        paddingHorizontal: scale(8),
                        borderRadius: scale(8),
                        borderWidth: scale(1),
                        borderColor: "#011132",
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    alignSelf: "stretch",
                  }}
                >
                  <View
                    style={{
                      marginVertical: scale(4),
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "NotoKufiArabic-Regular",
                        color: "#011132",
                      }}
                    >
                      البريد الإلكترونى
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "stretch",
                      marginVertical: scale(4),
                    }}
                  >
                    <TextInput
                      placeholder="البريد الإلكترونى"
                      placeholderTextColor={Colors.GrayOpacity}
                      value={email}
                      onChangeText={(newText) => setEmail(newText)}
                      style={{
                        textAlign: "right",
                        alignSelf: "stretch",
                        paddingHorizontal: scale(8),
                        borderRadius: scale(8),
                        borderWidth: scale(1),
                        borderColor: "#011132",
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    alignSelf: "stretch",
                  }}
                >
                  <View
                    style={{
                      marginVertical: scale(4),
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "NotoKufiArabic-Regular",
                        color: "#011132",
                      }}
                    >
                      الرسالة
                    </Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "stretch",
                      marginVertical: scale(4),
                    }}
                  >
                    <TextInput
                      placeholder="الرسالة"
                      placeholderTextColor={Colors.GrayOpacity}
                      multiline
                      numberOfLines={10}
                      value={message}
                      onChangeText={(newText) => setMessage(newText)}
                      style={{
                        textAlign: "right",
                        textAlignVertical: "top",
                        alignSelf: "stretch",
                        paddingHorizontal: scale(8),
                        borderRadius: scale(8),
                        borderWidth: scale(1),
                        borderColor: "#011132",
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginVertical: scale(4),
                }}
              >
                <StyledButton
                  buttonTitle="إرسال"
                  onPress={sendFeedback}
                  activeColor="#011132"
                  inactiveColor="#c79546"
                  style={{
                    width: scale(92),
                    alignSelf: "center",
                  }}
                />
              </View>
              {/* <Image
                source={require("../../assets/images/contact.png")}
                style={{ height: 200, width: "90%", resizeMode: "contain" }}
              /> */}
            </ImageBackground>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ContactsUsScreen;
