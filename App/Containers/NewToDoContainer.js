import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ToDoListItem from '../Components/ToDoListItem';
import FloatingButton from '../Components/FloatingButton';


class NewToDoContainer extends Component {
    static navigationOptions = {
        title: 'New ToDo',
      };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});


export default NewToDoContainer;