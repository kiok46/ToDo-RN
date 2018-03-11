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

import DateTimePicker from 'react-native-modal-datetime-picker';



class NewToDoContainer extends Component {
  static navigationOptions = {
      title: 'New ToDo',
    };
  state = {
    isDateTimePickerVisible: false,
  };


  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked = (date) => {
    const today = new Date()
    this._hideDateTimePicker();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
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