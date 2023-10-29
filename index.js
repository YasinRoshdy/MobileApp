if (__DEV__) {
	import('./src/ReactotronConfig').then(() =>
		console.log('Reactotron Configured'),
	);
}
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));
