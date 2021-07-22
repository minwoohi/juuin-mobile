import {Navigation} from 'react-native-navigation';
import HomeScreen from './HomeScreen';

export function registerScreens() {
  Navigation.registerComponent('com.juuinmobile.HomeScreen', () => HomeScreen);
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'com.juuinmobile.HomeScreen',
              },
            },
          ],
        },
      },
    });
  });
}
