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
    contentText: "",
    date: "never",
  };


  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked = (date) => {
    this.setState({ date: date.toString() })
    this._hideDateTimePicker();
  };

  changeContentText = (contentText) => {
    this.setState({ contentText })
}

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
            value={this.state.contentText}
            onChangeText={this.changeContentText}
            multiline
            autoFocus
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '300' }}>
              Time selected: {this.state.date}
            </Text>
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