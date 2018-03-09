import { Notifications } from 'expo';
import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthContainer from '../Containers/AuthContainer';
import RootContainer from '../Containers/RootContainer';
import registerForPushNotificationsAsync from '../Utils/Notification';

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


export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    const Root = RootStackNavigator(this.props.isAuthenticated)
    return <Root />;
  }

  _registerForPushNotifications() {
    registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}


RootNavigator.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}
