import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { eraseToDoData, googleLogout } from '../Actions'

import Button from '../Components/Button';


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
      this.props.eraseToDoData()
      this.props.navigation.navigate('Auth')
    }
  }

  render() {
    return (
      <View>
        <Button text={"Notification Settings"} onPress={this.logout}/>
        <Button text={"logout"} onPress={this.logout}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.GoogleAuth.loggedIn
  }
}

export default connect(mapStateToProps, { eraseToDoData, googleLogout })(SettingsContainer);