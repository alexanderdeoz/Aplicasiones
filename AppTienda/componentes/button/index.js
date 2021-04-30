import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class Button extends Component {
 


    render() {
        const { Label, Action } = this.props;
       
        return (
            <TouchableOpacity style={styles.btn} onPress={Action} >

                <Text style={styles.btnTxt}>{this.props.Label}</Text>
            </TouchableOpacity>
        );
    }
}
Button.defauldProps = {

    Label: 'button',
    Action: () => null

}

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },

    btnTxt: {
        fontSize: 35,
        color: '#7f8c8d',
        fontWeight: 'bold'
    }


});

export default Button;