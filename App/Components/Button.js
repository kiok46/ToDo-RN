import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../Utils/Colors';


class Button extends Component {

	render (){
		return (
		  <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.containerStyle}>
              <Text style={styles.textStyle}>
                    { this.props.text }
              </Text>
            </View>
          </TouchableOpacity>
		);
	}
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.tintColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
      },
    textStyle: {
        fontSize: 18,
        color: Colors.white,
    }
});


Button.defaultProps = {
    text: "",
    onPress: () => {}
}

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
}

export default Button;