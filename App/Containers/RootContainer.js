import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from '../Navigation/RootNavigation';

import { setLocalNotification, clearLocalNotification } from "../Utils/Notification";


class RootContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: false
    }
  }

  componentDidMount() {
    setLocalNotification();
  }

  componentWillUnmount() {
    clearLocalNotification();
  }

  render() {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation isAuthenticated={this.state.isAuthenticated}/>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default RootContainer;
