import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { googleLogout } from '../Actions/googleAuth'

class SettingsContainer extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props){
    super(props)
  }

  logout = () => {
    if (this.props.loggedIn){
      this.props.googleLogout()
      this.props.navigation.navigate('Auth')
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.logout}>
        <View>
            <Text>
              logout
            </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.GoogleAuth.loggedIn
  }
}

export default connect(mapStateToProps, {googleLogout})(SettingsContainer);