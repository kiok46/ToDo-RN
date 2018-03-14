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
import { connect } from 'react-redux';

import uuid from 'uuid';

import { addToDoItem } from '../Actions';

import Button from '../Components/Button';
import Colors from '../Utils/Colors';

import { setLocalNotification } from '../Utils/Notification';


class NewToDoContainer extends Component {
  static navigationOptions = {
      title: 'New ToDo',
    };
  state = {
    isDateTimePickerVisible: false,
    contentText: "",
    date: "Never",
  };


  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked = (date) => {
    this.setState({ date })
    this._hideDateTimePicker();
  };

  changeContentText = (contentText) => {
    this.setState({ contentText })
  }

  createToDoTask = () =>{
    const uniqueId = uuid(this.state.contentText)
    const taskEndTime = this.state.date

    let todoData = {
      id: uniqueId,
      content: this.state.contentText,
      media_attached_uri: null,
      ends_at: taskEndTime.toString(),
    }

    this.props.setLocalNotification(taskEndTime, uniqueId)
    this.props.navigation.navigate('Home')
    this.setState({ contentText: "", date: "Never" })
    this.props.addToDoItem(todoData)
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
              Time selected: {this.state.date.toString()}
            </Text>
        </View>
        <Button
            onPress={this._showDateTimePicker}
            text={"Select ending time"}
        />
        <Button
            onPress={this.createToDoTask}
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

const mapStateToProps = (state) => {
  return {

  }
}


export default connect( mapStateToProps, { addToDoItem })(NewToDoContainer);