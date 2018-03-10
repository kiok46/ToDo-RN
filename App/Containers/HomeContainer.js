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

import ToDoListItem from '../Components/ToDoListItem';


class HomeContainer extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} >
          <ToDoListItem
            contentText={"Need to buy biscuits"}
          />
          <ToDoListItem/>
          <ToDoListItem/>
        </ScrollView>

      </View>
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