import React, { useEffect, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Dimensions, StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";
import Orientation from "react-native-orientation";
import { HeaderBackButton } from '@react-navigation/stack';

const YtPlayerFullScreen = () => {
    const { videoId } = useRoute().params;
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
    const [orientation, setOrientation] = useState(null);

    useEffect(() => {
        const determineAndSetOrientation = () => {
            const { width, height } = Dimensions.get('window');
            setScreenWidth(width);
            setScreenHeight(height);

            if (width < height) {
                setOrientation('PORTRAIT');
            } else {
                setOrientation('LANDSCAPE');
            }

        };

        // Hide the status bar
        StatusBar.setHidden(true);

        // Get the initial orientation of the device
        determineAndSetOrientation();
        Dimensions.addEventListener('change', determineAndSetOrientation);

        // Unlock the screen orientation and show the status bar when the component unmounts
        return () => {
            StatusBar.setHidden(false);
            Orientation.unlockAllOrientations();
        };
    }, []); // Empty dependency array ensures the effect runs only once (on mount)

    return (
        <View style={{ flex: 1 }}>
            <YoutubePlayer
                height={screenHeight}
                width={screenWidth}
                play={true}
                videoId={videoId}
                webViewProps={{
                    injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            element.style.paddingBottom = 'unset';
            true;
          `,
                }}
            />
        </View>
    );
};

YtPlayerFullScreen.navigationOptions = ({ navigation }) => ({
    headerLeft: () => {
        if (Platform.OS === 'ios') {
            return <HeaderBackButton onPress={() => navigation.goBack()} tintColor="white" />;
        }
        return null;
    },
    // ... (other navigation options)
});
export default YtPlayerFullScreen;
