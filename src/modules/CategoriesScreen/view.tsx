

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, ScrollView, Picker, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './style'
import colors from '../../resources/colors'
import color from '../../resources/colors';
import Button from '../../components/Button'
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from '../../components/Modal'

// create a component
class CategoriesScreen extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title: 'Vehicle Check Form',
    //         headerTitleStyle: {
    //             fontSize: 15
    //         },
    //         headerTintColor: colors.white,
    //         headerStyle: {
    //             backgroundColor: colors.backgroundColor,
    //         },
    //     }
    // };
    static navigationOptions = {
        header: null
    }
    constructor() {
        super();
        this.state = {
            loading: true,
            openModal: false,
            addedProducts: [
                {
                    id: 1,
                    name: 'Panadol',
                    quantity: 10,
                    price: 12
                }, {
                    id: 2,
                    name: 'Avil 25mg',
                    quantity: 10,
                    price: 7
                }, {
                    id: 3,
                    name: 'Amoxil',
                    quantity: 154,
                    price: 587
                }, {
                    id: 4,
                    name: 'Disprine',
                    quantity: 100,
                    price: 165
                }, {
                    id: 5,
                    name: 'Avil 50mg',
                    quantity: 75,
                    price: 1002
                }, {
                    id: 6,
                    name: 'Augmentin',
                    quantity: 16,
                    price: 227
                }, {
                    id: 7,
                    name: 'Panadol',
                    quantity: 10,
                    price: 12
                }, {
                    id: 8,
                    name: 'Avil 25mg',
                    quantity: 10,
                    price: 7
                }, {
                    id: 9,
                    name: 'Amoxil',
                    quantity: 154,
                    price: 587
                }, {
                    id: 10,
                    name: 'Disprine',
                    quantity: 100,
                    price: 165
                }, {
                    id: 11,
                    name: 'Avil 50mg',
                    quantity: 75,
                    price: 1002
                }, {
                    id: 12,
                    name: 'Augmentin',
                    quantity: 16,
                    price: 227
                },
            ],

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

    componentDidMount() {
        this.setState({
            loading: false
        })
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

    onCheckboxChange = (text, key) => {
        // console.warn('this is id: ' + key)
        // console.warn('this is type: ' + this.state.dynamicInputs[key].type)
        // console.warn('this is response: ' + this.state.dynamicInputs[key].response)
        let updateChanging = this.state.dynamicInputs;
        updateChanging[key].response = !this.state.dynamicInputs[key].response;
        this.setState({
            dynamicInputs: updateChanging
        })
    }

    plusQuantity = (id) => {
        const copyState = this.state.addedProducts;
        copyState[id - 1].quantity = copyState[id - 1].quantity + 1
        this.setState({
            addedProducts: copyState
        })
    }

    minusQuantity = (id) => {
        const copyState = this.state.addedProducts;
        copyState[id - 1].quantity = copyState[id - 1].quantity - 1
        this.setState({
            addedProducts: copyState
        })
    }


    render() {
        let { loading } = this.state
        return (


            loading ?
                <View>
                    <ActivityIndicator size="large" color={colors.backgroundColor} />
                </View>
                :
                < ScrollView >

                    <View style={styles.vehicleShortDetailsSection}>

                        {
                            this.state.dynamicInputs.map((it, key) => {
                                return (
                                    it.type === 'picker' ?
                                        <View style={{ width: '100%', marginTop: 10, }} key={key}>
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

                    <View style={{
                        // marginTop: 30,
                        // marginBottom: 30,
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <View style={{ flex: 1, backgroundColor: colors.background }}>
                            <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>ID</Text>
                        </View>
                        <View style={{ flex: 2, backgroundColor: colors.background }}>
                            <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>Name</Text>
                        </View>
                        <View style={{ flex: 2, backgroundColor: colors.background }}>
                            <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>Quantity</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: colors.background }}>
                            <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>Price</Text>
                        </View>
                    </View>

                    {/* resterizeing array */}

                    {
                        this.state.addedProducts.map((product, index) => {
                            return (
                                <View style={{
                                    width: '90%',
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}
                                    key={index}>
                                    <View style={{ flex: 1, backgroundColor: colors.foreground }}>
                                        <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.id}</Text>
                                    </View>
                                    <View style={{ flex: 2, backgroundColor: colors.foreground }}>
                                        <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.name}</Text>
                                    </View>
                                    <View style={{ flex: 2, backgroundColor: colors.foreground, }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <View style={{ alignItems: 'flex-end', marginRight: 5, justifyContent: 'center', flex: 1 }}>
                                                <TouchableOpacity onPress={() => this.plusQuantity(product.id)}>
                                                    <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: color.background, }}>
                                                        <Icon
                                                            name={'plus'}
                                                            size={20}
                                                            color={color.foreground}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                                <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.quantity}</Text>
                                            </View>
                                            <View style={{ alignItems: 'flex-start', marginLeft: 5, justifyContent: 'center', flex: 1 }}>
                                                <TouchableOpacity onPress={() => this.minusQuantity(product.id)}>
                                                    <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: color.background, }}>
                                                        <Icon
                                                            name={'minus'}
                                                            size={20}
                                                            color={color.foreground}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: colors.foreground }}>
                                        <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.price}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                    <View style={{
                        marginTop: 30,
                        marginBottom: 30,
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' ,marginRight:2}}>
                            <Button
                                iconDetails={{ name: 'plus', color: color.foreground }}
                                style={{ backgroundColor: color.background }}
                                textStyle={{ color: color.foreground }}
                                onPress={() => this.props.navigation.navigate('AddProducts')}
                            >
                                Add Product
                    </Button>
                        </View>
                        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' ,marginLeft:2}}>
                            <Button
                                iconDetails={{ name: 'check', color: color.foreground }}
                                style={{ backgroundColor: color.background }}
                                textStyle={{ color: color.foreground }}
                                onPress={() => this.props.navigation.navigate('ConfirmOrder')}
                            >
                                Confirm Order
                    </Button>
                        </View>
                    </View>


                </ScrollView >
        );
    }
}


//make this component available to the app
export default CategoriesScreen;

