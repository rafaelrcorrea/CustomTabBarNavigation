import { 
  createStackNavigator,
  StackNavigator,
  createBottomTabNavigator,
  createAppContainer 
} from 'react-navigation';

import React from 'react';
import { Image } from 'react-native';

import Left from './pages/Left';
import Right from './pages/Right';
import CustomTabBar from './components/CustomTabBar';

const TabBarMain = createBottomTabNavigator({
  Left: {
    screen: Left,
    navigationOptions: {
      tabBarLabel: 'LEFT',
    }
  },
  Center: {
    screen: () => (<View></View>),
    navigationOptions: {
      tabBarLabel: 'CENTER',
      tabBarIcon: ({ focused, tintColor }) =>
        <Image source={require('./assets/page.png')}
          style={{ width: 24, height: 24 }} />,
    }
  },
  Right: {
    screen: Right,
    navigationOptions: {
      tabBarLabel: 'RIGHT',
    }
  },
},
  {
    tabBarComponent: CustomTabBar,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: '#4286f4',
      inactiveTintColor: '#B9B9B9',
      labelStyle: {
        fontSize: 8,
      },
      style: {
        backgroundColor: '#FFFFFF',
        borderTopColor: '#000',
        fontSize: 13,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
      },
    },
  });

  const Routes = createAppContainer(createStackNavigator({
    Main: { screen: TabBarMain },
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      headerMode: 'none',
      showIcon: true,
      showLabel: false,
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#FFFFFF',
        borderTopColor: 'transparent',
      },
    },
  }));

  export default Routes;