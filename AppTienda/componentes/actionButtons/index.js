import React, { Component, Fragment } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class ActionButtons extends Component {
    render() {
        const { reset ,plus} = this.props;
        return (
            <Fragment>
                <TouchableOpacity
                    style={styles.btnReset}
                    onPress={reset}>

                    <Text style={styles.TextReset} >Reset</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.btnReset}
                    onPress={plus}>

                    <Text style={styles.TextReset} >+5</Text>
                </TouchableOpacity>
            </Fragment>

        );
    }
}

const styles = StyleSheet.create({
    TextReset: {
        fontSize: 25,
        color: '#7f8c8d',
        fontWeight: 'bold'
    },
    btnReset: {
        height: 50,
        width: 100,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:5
    }
})

export default ActionButtons;