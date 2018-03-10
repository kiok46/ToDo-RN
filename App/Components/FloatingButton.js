import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';

class FloatingButton extends Component {
	constructor(props) {
		super(props);
	}
	render (){
		return (
         <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.floatingStyle}>
                <Entypo name="plus" size={32} color="white" />
            </View>
         </TouchableOpacity>
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
        backgroundColor: 'tomato',
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