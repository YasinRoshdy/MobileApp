import { convertNumberToArabic } from "./converters";
import React from "react";
import { Text } from "react-native";
import {fontScale} from "react-native-utils-scale";
import QuranText from "./QuranText";

export const suraTextJoiner = (suraText, start) => {
  return suraText
      ?.map((t, index) => {
        const arabicNumber = convertNumberToArabic(index + start);

        return (
            <QuranText key={index} style={{ fontFamily : "Quran"}}>
              {t?.text}{" "}
                <QuranText style={{ fontSize: fontScale(23), fontWeight: "bold",  fontFamily : "Quran"}}> ﴿{arabicNumber}﴾ </QuranText>{" "}
            </QuranText>
        );
      });
};
export const suraTextJoinerWithBasmala = (suraText) => {
    const temp = suraText ? [...suraText] : [];
    temp.unshift({ text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ" });

    return temp
        .map((t, index) =>
            index === 0 ? (
                <QuranText key={index} style={{ fontFamily : "Quran"}}>
                    {t?.text}
                    {"\n"}
                </QuranText>
            ) : (
                <QuranText key={index} style={{ fontFamily : "Quran"}}>
                    {t?.text}{" "}
                    <QuranText
                        style={{ fontSize: fontScale(23), fontWeight: "bold",  fontFamily : "Quran"}}> ﴿{convertNumberToArabic(index)}﴾ </QuranText>{" "}
                </QuranText>
            )
        );
};

export const elfatehaTextJoiner = (suraText) => {
    return suraText
        ?.map((t, index) => (
            <QuranText key={index} style={{fontFamily : "Quran"}}>
                {index === 0 ? (
                    `${t?.text} `
                ) : (
                    `${t?.text} `
                )}
                <QuranText style={{ fontSize: fontScale(23), fontWeight: "bold",  fontFamily : "Quran"}}> ﴿{convertNumberToArabic(index + 1)}﴾ </QuranText>{" "}
                {index === suraText.length - 1 ? "\n" : ""}
            </QuranText>
        ));
};

export const eltaoubaTextJoiner = (suraText) => {
    return suraText
        ?.map((t, index) => (
            <QuranText key={index} style={{ fontFamily : "Quran"}}>
                {`${t?.text} `}
                <QuranText style={{ fontSize: fontScale(23), fontWeight: "bold",  fontFamily : "Quran"}}> ﴿{convertNumberToArabic(index + 1)}﴾ </QuranText>{" "}
                {index === suraText.length - 1 ? "\n" : " "}
            </QuranText>
        ));
};

export const arrayIncludes = (arr, obj) => {
  const tempItem = arr.filter((item) => item.title === obj.title);
  return tempItem.length === 0 ? false : true;
};

export const arrayItemIndex = (arr, obj) => {
  const tempItem = arr.filter((item) => item.title === obj.title);
  const tempIndex = arr.indexOf(tempItem[0]);

  return tempIndex;
};
