import React from 'react';
import { 
  Alert,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import styles from './styles';

class TabBar extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    console.log(this.props)
    const {
      navigation,
      renderIcon,
      getLabelText,
      activeTintColor,
      inactiveTintColor,
      jumpTo
    } = this.props;

    const {
      routes
    } = navigation.state;

    const callAlert = () => {
      Alert.alert(
        'Another Rafa\'s App',
        'Ow, I suppose a tab should have been opened here, no?',
        [
          { text: 'OK', onPress: () => {} },
        ],
      );
    }

    return (
      <View style={styles.tabbar}>
        {
            routes && routes.map((route, index) => {
            const focused = index === navigation.state.index;
            const tintColor = focused ? activeTintColor : inactiveTintColor;
            return (
              <TouchableWithoutFeedback
                key={route.key}
                onPressIn={() => route.key == "Center" ? callAlert() : jumpTo(route.key)}
                style={styles.tab}
              >
                <View  style={ route.key == "Center" ? styles.centerTab : styles.tab }>
                  {
                    renderIcon({
                    route,
                    index,
                    focused,
                    tintColor
                  })}
                  { route.key != "Center" ? <Text
                    style={ route.key == "Center" ? styles.centerTabText : styles.tabText }
                  >
                    {getLabelText({route: route})}
                  </Text> : null}
                </View>
              </TouchableWithoutFeedback>
            );
          })}

      </View>
    );
  }
};

export default TabBar;
