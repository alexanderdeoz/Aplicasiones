import React, { Component, PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Button from '../button/index'
import  ActionButtons from '../actionButtons/index'

class Contador extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }


        this.handleUp = this.handleUp.bind(this)
        this.handleDown = this.handleDown.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handlePlus5= this.handlePlus5.bind(this)
    }


    shouldComponentUpdate(nextProps, nextState) {
        const { counter } = this.state
        if (nextState.counter === counter) return false;
        return true;
    }


    handleUp() {
        const { counter: ct } = this.state;
        this.setState({ counter: ct + 1 })
        return ct;
    }

    handleDown() {
        const { counter: ct } = this.state;
        this.setState({ counter: ct - 1 }, () => {
            if (ct === 0) {
                this.setState({ counter: 0 });
            }
        })
    }
    handleReset() {
        this.setState({ counter: 0 });
    }
    handlePlus5() {
        const { counter:ct} = this.state;

        this.setState({ counter: ct+5});
    }
    render() {

        const { counter } = this.state;
        console.log('render');
        return (
            <View style={styles.container}>
                <View style={styles.subcontainer}>

                    <Button Label="-" Action={this.handleDown} />
                    <View style={styles.countercontainer}>

                        <Text style={styles.counter} >{counter}</Text>

                    </View>
                    <Button Label="+" Action={this.handleUp} />
                </View>
                <View style={styles.subcontainerReset}>
                   <ActionButtons reset={this.handleReset} plus={this.handlePlus5}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center'

    },

    subcontainer: {
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row'

    },

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
    },

    countercontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    counter: {
        color: '#FFF',
        fontSize: 45,

        fontWeight: 'bold'
    },

    subcontainerReset: {
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30

    },
    TextReset: {
        fontSize: 25,
        color: '#7f8c8d',
        fontWeight: 'bold'
    },
    btnReset: {
        height: 50,
        width: '80%',
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Contador;