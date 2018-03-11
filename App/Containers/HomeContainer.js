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


class HomeContainer extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    // const p = this.props.getToDoListData()
  }

  saveEditedToDo = () => {

  }

  onAttachMedia = () => {
    Expo.DocumentPicker.getDocumentAsync({type: "*/*"})
  }

  onToDoTaskComplete = () => {

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <ScrollView style={styles.container} >
          <ToDoListItem
            contentText={"Need to buy biscuits."}
            onEditDone={this.saveEditedToDo}
            onAttachMedia={this.onAttachMedia}
            onComplete={this.onToDoTaskComplete}
          />
          <ToDoListItem
            contentText={"Need to buy Tomato"}
            onEditDone={this.saveEditedToDo}
            onAttachMedia={this.onAttachMedia}
            onComplete={this.onToDoTaskComplete}
          />
        </ScrollView>

        <FloatingButton onPress={() => {this.props.navigation.navigate('NewToDo')}}/>

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


export default HomeContainer;