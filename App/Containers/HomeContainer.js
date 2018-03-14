import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { updateToDoItem, deleteToDoItem, getToDoListData } from '../Actions';

import ToDoListItem from '../Components/ToDoListItem';
import FloatingButton from '../Components/FloatingButton';

import { returnIndex } from '../Utils/Helper';

import { clearLocalNotification } from '../Utils/Notification';


class HomeContainer extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.getToDoListData()
  }

  saveEditedToDo = (uniqueId, text) => {
    const idx = returnIndex(uniqueId, this.props.todoData)
    this.props.updateToDoItem(idx, text)
  }

  onAttachMedia = () => {
    Expo.DocumentPicker.getDocumentAsync({ type: "*/*" })
  }

  onToDoTaskComplete = (uniqueId) => {
    clearLocalNotification(uniqueId)
    const idx = returnIndex(uniqueId, this.props.todoData)
    this.props.deleteToDoItem(idx, this.props.todoData)
  }

  render() {

    const todoData = this.props.todoData
    if (!todoData || todoData === []){
      return (
        <ActivityIndicator/>
      )
    } else {
      return (
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
          <ScrollView style={styles.container} >
            {todoData.map((itemContent, idx) => {
              return (
                <ToDoListItem
                  key={idx}
                  contentText={itemContent.content}
                  endAt={itemContent.ends_at}
                  onEditDone={(text) => this.saveEditedToDo(itemContent.id, text)}
                  onAttachMedia={this.onAttachMedia}
                  onComplete={() => this.onToDoTaskComplete(itemContent.id)}
                />
              )
            })}
          </ScrollView>
          <FloatingButton onPress={() => {this.props.navigation.navigate('NewToDo')}}/>
        </KeyboardAvoidingView>
      ) 
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});


const mapStateToProps = (state) => {
  return {
    todoData: state.ToDoListData.todoData
  }
}

export default connect(mapStateToProps, { updateToDoItem, deleteToDoItem, getToDoListData })(HomeContainer);