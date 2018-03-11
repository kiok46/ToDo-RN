import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import Button from '../Components/Button';
import Colors from '../Utils/Colors';


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
    this._hideDateTimePicker();
  };

  render() {
    return (
      <ScrollView style={styles.container} behavior={'padding'}>

        <View style={styles.headingContainerStyle}>
          <Text style={styles.headingTextStyle}>Task Details</Text>
        </View>

        <View style={{ flex: 1, margin: 10 }}>
          <TextInput
            style={{ backgroundColor: '#eee', height: 200 }}
            placeholder={"Enter your task details"}
            multiline
            autoFocus
          />
        </View>
        <Button
            onPress={this._showDateTimePicker}
            text={"Select ending time"}
        />
        <Button
            onPress={() => {}}
            text={"Create task"}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          datePickerModeAndroid={'spinner'}
          minimumDate={new Date()}
          onCancel={this._hideDateTimePicker}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .6,
    backgroundColor: '#fff',
  },
  headingContainerStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  headingTextStyle: {
    fontSize: 18,
    color: Colors.tintColor,
  },
});


export default NewToDoContainer;