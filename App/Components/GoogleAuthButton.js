import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  
} from 'react-native';

import Colors from '../Utils/Colors';


class GoogleAuthButton extends Component {

  render() {
      if (this.props.showActivity) {
          return (
            <ActivityIndicator size="large"/>
          )
      } else {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <View style={[styles.authButtonStyle, {backgroundColor: Colors.googleAuthColor}]}>
                    <Text style={{ color: Colors.white }}> Login with Google </Text>
                </View>
            </TouchableOpacity>
        );
      }
  }
}

const styles = StyleSheet.create({
  authButtonStyle: {
      backgroundColor: 'tomato',
      borderRadius: 5,
      padding: 10
  }
});


export default GoogleAuthButton;