import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from '../Navigation/RootNavigation';

import { connect } from 'react-redux';
import { isLoggedIn } from '../Actions';


import { setLocalNotification, clearLocalNotification } from "../Utils/Notification";


class RootContainer extends Component {

  componentWillMount() {
    this.props.isLoggedIn()
    console.log(this.props.accessToken)
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
          <RootNavigation isAuthenticated={this.props.accessToken ? true : false}/>
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

const mapStatetoProps = (state) => {
  return {
    accessToken: state.GoogleAuth.accessToken
  } 
}


export default connect(mapStatetoProps, {isLoggedIn})(RootContainer);
