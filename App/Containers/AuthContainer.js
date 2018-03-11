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

    googleLogin = () => {
        this.setState({showActivity: true})
        this.props.googleLogin()
    }

  render() {
    return (
      <View style={styles.container}>
        <GoogleAuthButton
            onPress={this.googleLogin}
            showActivity={false}
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
        loggedIn: state.GoogleAuth.loggedIn,
    }
}


export default connect(mapStateToProps, { googleLogin })(AuthContainer);