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

    signInWithGoogleAsync = async () => {

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