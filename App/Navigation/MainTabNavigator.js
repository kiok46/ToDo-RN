import React from 'react';
import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../Utils/Colors';

import HomeContainer from '../Containers/HomeContainer';
import SettingsContainer from '../Containers/SettingsContainer';


export default TabNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Settings: {
      screen: SettingsContainer,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = "format-list-bulleted"
            break;
          case 'Settings':
            iconName = "settings";
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={28}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarOptions: {
      showLabel: false
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
