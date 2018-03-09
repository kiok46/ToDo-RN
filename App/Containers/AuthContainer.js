import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { googleLogin } from '../Actions';

import GoogleAuthButton from '../Components/GoogleAuthButton';


class AuthContainer extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props)
        this.state = {
            showActivity: false
        }
    }

    handleAuthSuccess = (accessToken) => {
        this.props.navigation.navigate('Main')
    }

    handleAuthCanceled = () => {
        this.setState({ showActivity: false })
    }

    handleAuthFailed = () => {
        this.setState({ showActivity: false })
    }

    googleLogin = () => {
        this.props.googleLogin()
    }

  render() {
    return (
      <View style={styles.container}>
        <GoogleAuthButton
            onPress={this.googleLogin}
            showActivity={this.props.failed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
    return {
        failed: state.GoogleAuth.failed,
        cancelled: state.GoogleAuth.cancelled
    }
}


export default connect(mapStateToProps, {googleLogin})(AuthContainer);