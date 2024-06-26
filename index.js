import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './src/features/core/firebase/initialization';

AppRegistry.registerComponent(appName, () => App);
