import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Card from './Card';
import Colors from '../Utils/Colors';
import PropTypes from 'prop-types';


class ToDoListItem extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            contentText: this.props.contentText
        }
    }
    
    onPressEdit = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            if (!this.state.isOpen) {
                this.props.onEditDone()
            }
        })
    }

    changeContentText = (contentText) => {
        this.setState({ contentText })
    }

    renderContentText = () => {

        if (this.state.isOpen){
            return (
                <TextInput
                    style={[styles.contentTextInputStyle]}
                    value={this.state.contentText}
                    onChangeText={this.changeContentText}
                    underlineColorAndroid={'transparent'}
                    multiline
                    maxHeight={100}
                    numberOfLine={4}
                />
            )
        }
        return (
          <Text style={styles.contentTextStyle}>
            {this.state.contentText}
          </Text>
        )
    }

	render (){
		return (
          <Card>
            <View style={[styles.cardContainerStyle, {backgroundColor: Colors.getRandomColor()}]}>
              <View style={styles.contentContainerStyle}>
                {this.renderContentText()}
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <Entypo name="edit" size={32} color={Colors.white} onPress={this.onPressEdit}/>
                <TouchableOpacity>
                    <View style={styles.attachMediaStyle}>
                    <Text style={styles.mediaTextStyle}>Attach media</Text>
                    </View>
                </TouchableOpacity>
                <Entypo name="check" size={32} color={Colors.white} onPress={this.props.onComplete}/>
              </View>
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
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 150
    },
    contentTextInputStyle: {
        fontWeight: '500',
        fontSize: 24,
        color: Colors.white,
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    contentTextStyle: {
        fontWeight: '500',
        fontSize: 24,
        color: Colors.white
    },
    mediaTextStyle: {
        fontWeight: '500',
        fontSize: 18,
        color: Colors.white
    },
    attachMediaStyle: {
        borderRadius: 5,
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.white
    }
});


ToDoListItem.defaultProps = {
    contentText: "",
    onEditDone: () => {},
    onComplete: () => {}
}

ToDoListItem.propTypes = {
    contentText: PropTypes.string,
    onEditDone: PropTypes.func,
    onComplete: PropTypes.func
}

export default ToDoListItem;