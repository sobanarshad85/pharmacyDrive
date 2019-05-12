//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, ScrollView, Picker, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from '../CategoriesScreen/style'
import colors from '../../resources/colors'
import color from '../../resources/colors';
import Button from '../../components/Button'
import Icon from 'react-native-vector-icons/Ionicons'
import ProductDetailScreen from '../ProductDetailScreen/view';

// create a component
class AddProducts extends Component {

    static navigationOptions = ({ navigation }: any) => {
        return {
            title: 'Add Products',
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
            addedProducts: [
                {
                    id: 1,
                    name: 'Panadol',
                    quantity: 10,
                    price: 12,
                    added: false,
                }, {
                    id: 2,
                    name: 'Avil 25mg',
                    quantity: 10,
                    price: 7,
                    added: false,
                }, {
                    id: 3,
                    name: 'Amoxil',
                    quantity: 154,
                    price: 587,
                    added: false,
                }, {
                    id: 4,
                    name: 'Disprine',
                    quantity: 100,
                    price: 165,
                    added: false,
                }, {
                    id: 5,
                    name: 'Avil 50mg',
                    quantity: 75,
                    price: 1002,
                    added: false,
                }, {
                    id: 6,
                    name: 'Augmentin',
                    quantity: 16,
                    price: 227,
                    added: false,
                }, {
                    id: 7,
                    name: 'Panadol',
                    quantity: 10,
                    price: 12,
                    added: false,
                }, {
                    id: 8,
                    name: 'Avil 25mg',
                    quantity: 10,
                    price: 7,
                    added: false,
                }, {
                    id: 9,
                    name: 'Amoxil',
                    quantity: 154,
                    price: 587,
                    added: false,
                }, {
                    id: 10,
                    name: 'Disprine',
                    quantity: 100,
                    price: 165,
                    added: false,
                }, {
                    id: 11,
                    name: 'Avil 50mg',
                    quantity: 75,
                    price: 1002,
                    added: false,
                }, {
                    id: 12,
                    name: 'Augmentin',
                    quantity: 16,
                    price: 227,
                    added: false,
                },
            ],

        }
    }

    // plusQuantity = (id) => {
    //     const copyState = this.state.addedProducts;
    //     copyState[id - 1].quantity = copyState[id - 1].quantity + 1
    //     this.setState({
    //         addedProducts: copyState
    //     })
    // }

    // minusQuantity = (id) => {
    //     const copyState = this.state.addedProducts;
    //     copyState[id - 1].quantity = copyState[id - 1].quantity - 1
    //     this.setState({
    //         addedProducts: copyState
    //     })
    // }

    isAdded = (id) => {
        const copyState = this.state.addedProducts;
        copyState[id - 1].added = !copyState[id - 1].added
        this.setState({
            addedProducts: copyState
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={{
                    marginTop: 30,
                    // marginBottom: 30,
                    width: '90%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{ flex: 1, backgroundColor: colors.background, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: color.background }}>.</Text>
                        </View>
                        <View style={{ flex: 1,}}>
                            <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>ID</Text>
                        </View>
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

                {/* resterizeing array  */}

                {
                    this.state.addedProducts.map((product, index) => {
                        return (
                            <TouchableOpacity onPress={() => this.isAdded(product.id)}
                                key={index}
                            >
                                <View style={{
                                    width: '90%',
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                >
                                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: color.foreground }}>

                                        {!product.added ?
                                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon
                                                    name={'md-square-outline'}
                                                    color={color.background}
                                                    size={25}
                                                />
                                            </View>
                                            :
                                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon
                                                    // name={'md-square'}
                                                    name={'ios-checkbox-outline'}
                                                    color={color.background}
                                                    size={25}
                                                />
                                            </View>
                                        }
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.id}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 2, backgroundColor: color.foreground }}>
                                        <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.name}</Text>
                                    </View>
                                    <View style={{ flex: 2, backgroundColor: color.foreground }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            {/* <View style={{ alignItems: 'flex-end', marginRight: 5, justifyContent: 'center', flex: 1 }}>
                                    <TouchableOpacity onPress={() => this.plusQuantity(product.id)}>
                                        <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: color.background, }}>
                                            <Icon
                                                name={'plus'}
                                                size={20}
                                                color={color.foreground}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View> */}
                                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                                <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.quantity}</Text>
                                            </View>
                                            {/* <View style={{ alignItems: 'flex-start', marginLeft: 5, justifyContent: 'center', flex: 1 }}>
                                    <TouchableOpacity onPress={() => this.minusQuantity(product.id)}>
                                        <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: color.background, }}>
                                            <Icon
                                                name={'minus'}
                                                size={20}
                                                color={color.foreground}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View> */}
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: color.foreground }}>
                                        <Text style={{ color: color.background, alignSelf: 'center', justifyContent: 'center', fontSize: 18 }}>{product.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    )}
                <View style={{ marginTop: 30 }}>
                    <Button style={{ backgroundColor: color.background }}
                        textStyle={{ color: color.foreground }}
                        onPress={() => this.props.navigation.navigate('CategoriesScreen')}
                    >Done</Button>
                </View>
            </ScrollView>
        )
    }
}



//make this component available to the app
export default AddProducts;
