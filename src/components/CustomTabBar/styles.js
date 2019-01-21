import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabbar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#000',
    backgroundColor: 'transparent',
    marginTop: -20,
  },
  tab: {
    height: 50,
    alignSelf: 'flex-end',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    color: '#4286f4',
    fontSize: 12,
  },
  centerTab: {
    height: 70,
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ec0f7',
    borderRadius: 70,
  },
  centerTabText: {
    color: '#000000',
    fontSize: 10,
  },
});

export default styles;