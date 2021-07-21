// import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import App from './App';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('JUUIN', () => App);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'JUUIN',
            },
          },
        ],
      },
    },
  });
});

// AppRegistry.registerComponent(appName, () => App);
