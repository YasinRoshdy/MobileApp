import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import Sound from "react-native-sound";
import PlayIcon from "../svg/PlayIcon";
import StopIcon from "../svg/StopIcon";
import { scale } from "react-native-utils-scale";

const PlayAudioButton = ({ url, onPlay })=> {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayer = () => {
    const newSound = new Sound(url, "", (error) => {
      if (error) {
        console.log("Error loading sound", error);
      } else {
        console.log("Audio Started");
        setSound(newSound);
        newSound.play(() => {
          newSound.release();
          setIsPlaying(false);
          console.log("Audio stopped");
        });
      }
    });
  };

  const onPlayButtonPress = () => {
    if (!isPlaying) {
      startPlayer();
      setIsPlaying(true);
      onPlay(true);
    }
  };

  const onStopButtonPress = () => {
    if (sound) {
      sound.stop();
      sound.release();
      setIsPlaying(false);
      onPlay(false);
    }
  };

  return (
      <View
          style={{
            justifyContent: "center",
            paddingHorizontal: scale(4),
          }}
      >
        {isPlaying ? (
            <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  zIndex: 3,
                }}
                onPress={onStopButtonPress}
            >
              <StopIcon color="#c79546" />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  zIndex: 3,
                }}
                onPress={onPlayButtonPress}
            >
              <PlayIcon color="#011132" />
            </TouchableOpacity>
        )}
      </View>
  );
};

export default PlayAudioButton;
