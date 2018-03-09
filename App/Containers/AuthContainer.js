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
            showActivity: false
        }
    }

    storeAccessToken = (accessToken) => {

    }

    handleAuthCanceled = () => {
        this.setState({ showActivity: false })
    }

    handleAuthError = () => {
        this.setState({ showActivity: false })
    }

    signInWithGoogleAsync = async () => {
        try {
            this.setState({ showActivity: true })
            const result = await Expo.Google.logInAsync(GoogleAuthCredentials);
            
            if (result.type === 'success') {
                this.props.navigation.navigate('Main')
                this.storeAccessToken(result.accessToken)
            } else {
                this.handleAuthCanceled()
            }
        } catch(e) {
            this.handleAuthError()
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <GoogleAuthButton
            onPress={this.signInWithGoogleAsync}
            showActivity={this.state.showActivity}
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


export default AuthContainer;