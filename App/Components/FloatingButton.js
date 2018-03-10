import React, { Component } from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import Colors from '../Utils/Colors';


class FloatingButton extends Component {

	render (){
		return (
            <View style={[styles.floatingStyle]}>
                <Entypo name="plus" size={32} color={Colors.white} onPress={this.props.onPress}/>
            </View>
		);
	}
};

const styles = StyleSheet.create({
    floatingStyle: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        height: 60,
        width: 60,
        backgroundColor: Colors.tintColor,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


FloatingButton.defultProps = {
    onPress: () => {}
}

FloatingButton.propTypes = {
    onPress: PropTypes.func
}

export default FloatingButton;