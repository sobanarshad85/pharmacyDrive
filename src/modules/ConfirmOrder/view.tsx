//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import color from '../../resources/colors';

// create a component
class ConfirmOrder extends Component {

    static navigationOptions = ({ navigation }: any) => {
        return {
            title: 'Confirm Order',
            headerTitleStyle: {
                fontSize: 17
            },
            headerTintColor: color.foreground,
            headerStyle: {
                backgroundColor: color.background,
            },

        }
    };

    constructor() {
        super();
        this.state = {
            openModal: false,
            openModal1: false
        }
    }

    hideModal = () => {
        this.setState({
            openModal: false,
            openModal1: false,
        })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{marginVertical:5}}>
                    <Button
                        onPress={() => this.setState({ openModal: true })}
                        style={{ backgroundColor: color.background }} textStyle={{ color: color.foreground }}>Pay by Card</Button>
                </View>
                <View style={{marginVertical:5}}>
                    <Button
                        onPress={() => this.setState({ openModal1: true })}
                        style={{ backgroundColor: color.background }} textStyle={{ color: color.foreground }}>Pay by Cheque</Button>
                </View>
                <Modal
                    visible={this.state.openModal}
                    dismiss={() => this.hideModal()}
                    animationType='fade-in'
                >
                    <View style={{ justifyContent: 'flex-start', backgroundColor: 'white', width: '80%', borderRadius: 20 }}>

                        <View style={{ backgroundColor: color.foreground }}>
                            <View style={{ backgroundColor: color.background, }}>
                                <Text style={{ color: color.foreground, fontSize: 18, fontWeight: 'bold', alignSelf: 'center', paddingVertical: 5 }}>Payment</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: color.gray, fontSize: 16 }}>Total Amount: 5696</Text>
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Button style={{ backgroundColor: color.background }}
                                    onPress={this.hideModal}
                                    textStyle={{ color: color.foreground, paddingVertical: 6, paddingHorizontal: 20 }}>Done</Button>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={this.state.openModal1}
                    dismiss={() => this.hideModal()}
                    animationType='fade-in'
                >
                    <View style={{ justifyContent: 'flex-start', backgroundColor: 'white', width: '80%', borderRadius: 20 }}>

                        <View style={{ backgroundColor: color.foreground }}>
                            <View style={{ backgroundColor: color.background, }}>
                                <Text style={{ color: color.foreground, fontSize: 18, fontWeight: 'bold', alignSelf: 'center', paddingVertical: 5 }}>Payment</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: color.gray, fontSize: 16 }}>Pay by Cheque</Text>
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Button style={{ backgroundColor: color.background }}
                                    onPress={this.hideModal}
                                    textStyle={{ color: color.foreground, paddingVertical: 6, paddingHorizontal: 20 }}>Done</Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ConfirmOrder;
