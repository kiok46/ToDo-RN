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

import GoogleAuthButton from '../Components/GoogleAuthButton';
import GoogleAuthCredentials from '../Config/googleAuth';

class AuthContainer extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props)
        this.state = {
            isLoading: false
        }
    }

    storeAccessToken = (accessToken) => {

    }

    handleCanceledAuth = () => {

    }

    handleAuthError = () => {

    }

    signInWithGoogleAsync = async () => {
        try {
            this.setState({ isLoading: true })
            const result = await Expo.Google.logInAsync(GoogleAuthCredentials);
            
            if (result.type === 'success') {
                this.props.navigation.navigate('Main')
                this.storeAccessToken(result.accessToken)
            } else {
                this.handleCanceledAuth()
            }
        } catch(e) {
            this.handleAuthError()
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <GoogleAuthButton onPress={this.signInWithGoogleAsync} showActivity={this.state.isLoading}/>
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


export default AuthContainer;