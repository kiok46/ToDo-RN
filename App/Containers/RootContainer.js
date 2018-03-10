import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from '../Navigation/RootNavigation';

import { connect } from 'react-redux';
import { isLoggedIn } from '../Actions';


import { setLocalNotification, clearLocalNotification } from "../Utils/Notification";


class RootContainer extends Component {

  componentWillMount() {
    this.props.isLoggedIn()
  }

  componentDidMount() {
    setLocalNotification();
  }

  componentWillUnmount() {
    clearLocalNotification();
  }

  render() {
      if (this.props.loggedIn !== null) {
        return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            <RootNavigation isAuthenticated={this.props.loggedIn ? true : false}/>
          </View>
        );
      } else {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large'/>
          </View>
        )
      }
      
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

const mapStatetoProps = (state) => {
  return {
    loggedIn: state.GoogleAuth.loggedIn,
  } 
}


export default connect(mapStatetoProps, {isLoggedIn})(RootContainer);
