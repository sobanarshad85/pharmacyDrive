//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Picker } from 'react-native';
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import colors from '../../resources/colors';
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
            openModal1: false,
            dynamicInputs: [

                {
                    id: 0,
                    type: 'picker',
                    response: null,
                    heading: 'Select Customer',
                    list: [
                        { item: "Select Customer" },
                        { item: "Adil Rafique" },
                        { item: "Soban Arshad" },
                        { item: "Fawad Khalil" },
                        { item: "Rao Mujtaba" },
                        { item: "Syed Ali Bukhari" },
                        { item: "Nasir Sab Assembly" },
                    ]
                },

            ]
        }
    }

    change = (text, key) => {
        // console.warn('this is id: ' + key)
        // console.warn('this is text: ' + text)
        // console.warn('this is type: ' + this.state.dynamicInputs[key].type)
        let updateChanging = this.state.dynamicInputs;
        updateChanging[key].response = text;
        this.setState({
            dynamicInputs: updateChanging
        })
    }

    hideModal = () => {
        this.setState({
            openModal: false,
            openModal1: false,
        })
    }

    render() {
        return (
            <ScrollView>

                <View style={styles.vehicleShortDetailsSection}>

                    {
                        this.state.dynamicInputs.map((it, key) => {
                            return (
                                it.type === 'picker' ?
                                    <View style={{ width: '100%', }} key={key}>
                                        <Text style={{ fontWeight: 'bold', color: colors.background }}>{this.state.dynamicInputs[it.id].heading}</Text>
                                        <Picker
                                            selectedValue={this.state.dynamicInputs[it.id].response}
                                            style={{ backgroundColor: colors.background, color: colors.foreground }}
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.change(itemValue, it.id)
                                            }>
                                            {
                                                this.state.dynamicInputs[it.id].list.map((li, index) => {
                                                    return (
                                                        <Picker.Item label={li.item} value={li.item} key={index} />
                                                    )
                                                })
                                            }
                                        </Picker>
                                    </View>

                                    :

                                    null
                            )
                        })
                    }

                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'flex-end',marginRight:10}}>
                        <Button
                            onPress={() => this.setState({ openModal: true })}
                            style={{ backgroundColor: color.background }} textStyle={{ color: color.foreground, paddingHorizontal: 25, paddingVertical: 10 }}>Pay by Card</Button>
                    </View>
                    <View style={{ marginVertical: 5, flex: 1, justifyContent: 'center', alignItems: 'flex-start' ,marginLeft:10}}>
                        <Button
                            onPress={() => this.setState({ openModal1: true })}
                            style={{ backgroundColor: color.background }} textStyle={{ color: color.foreground, paddingHorizontal: 25, paddingVertical: 10 }}>Pay by Cheque</Button>
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
            </ScrollView>
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
    vehicleShortDetailsSection: {
        marginTop: 30,
        marginBottom: 30,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: colors.borderColor
    },
});

//make this component available to the app
export default ConfirmOrder;
