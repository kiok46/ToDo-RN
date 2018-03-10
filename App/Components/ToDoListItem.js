import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Card from './Card';

import PropTypes from 'prop-types';


class ToDoListItem extends Component {
	constructor(props) {
		super(props);
	}
	render (){
		return (
          <Card>
            <View style={styles.cardContainerStyle}>
              <View style={styles.contentTextContainerStyle}>
                <Text style={styles.contentTextStyle}>
                    {this.props.contentText}
                </Text>
              </View>
              <TouchableOpacity>
                <View>
                  <Text>Attach media</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
		);
	}
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        height: 250,
        width: "100%",
        backgroundColor: 'rgba(230, 230, 230, 1)'
    },
    contentTextContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentTextStyle: {
        fontWeight: '500',
        fontSize: 24
    }
});


ToDoListItem.defaultProps = {
    contentText: "",
}

ToDoListItem.propTypes = {
    contentText: PropTypes.string,
}

export default ToDoListItem;