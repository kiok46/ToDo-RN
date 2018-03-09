import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import MainTabNavigator from './MainTabNavigator';
import AuthContainer from '../Containers/AuthContainer';
import RootContainer from '../Containers/RootContainer';


const RootStackNavigator = (isAuthenticated) => {
  return StackNavigator(
      {
        Auth: {
          screen: AuthContainer
        },
        Main: {
          screen: MainTabNavigator
        },
      },
      {
        initialRouteName: isAuthenticated ? "Main" : "Auth"
      }

    );
}


class RootNavigator extends Component {

  render() {
    const Root = RootStackNavigator(this.props.isAuthenticated)
    return (
      <Root />
    )
  }

}


RootNavigator.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}


export default RootNavigator;