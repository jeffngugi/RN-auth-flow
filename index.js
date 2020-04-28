/**
 * @format
 */
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './redux/store';


const AppNew = ()=>
    <Provider store={store}>
        <App />
    </Provider>
    

AppRegistry.registerComponent(appName, () => AppNew);
