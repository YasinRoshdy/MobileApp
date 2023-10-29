import React from "react";
import Orientation from "react-native-orientation";
import YoutubePlayer from "react-native-youtube-iframe";

const YtPlayer = (props) => {
    const {videoId, isPlaying, onStateChange} = props;

    return (
        <YoutubePlayer
            height={250}
            play={isPlaying}
            videoId={videoId}
            onChangeState={onStateChange}
            onFullScreenChange={isFullscreen => {
                if (isFullscreen) {
                    Orientation.lockToLandscape();
                } else
                    Orientation.lockToPortrait()
            }
            }
        />
    );
};

export default YtPlayer;
