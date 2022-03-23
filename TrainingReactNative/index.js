/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/controllers/App';
import {name as appName} from './app.json';
import StackNav from './src/navigation/StackNavigation';
import TabNav from './src/navigation/TabNavigation';

AppRegistry.registerComponent(appName, () => TabNav);
