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
import { connect } from 'react-redux';
import { setToDoListData, getToDoListData } from '../Actions';

import ToDoListItem from '../Components/ToDoListItem';
import FloatingButton from '../Components/FloatingButton';


class HomeContainer extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.getToDoListData()
  }

  componentWillReceiveProps(newProps){
    if (newProps !== this.props) {
      this.setState({ todo_data: newProps.todo_data })
    }
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
          {this.props.todo_data.map((itemContent, idx) => {
            return (
              <ToDoListItem
                key={idx}
                contentText={itemContent.content}
                endAt={itemContent.ends_at}
                onEditDone={this.saveEditedToDo}
                onAttachMedia={this.onAttachMedia}
                onComplete={this.onToDoTaskComplete}
              />
            )
          })}
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


const mapStateToProps = (state) => {
  return {
    todo_data: state.ToDoListData.todo_data
  }
}

export default connect(mapStateToProps, { setToDoListData, getToDoListData })(HomeContainer);