import { createStackNavigator, createAppContainer, DrawerItems, SafeAreaView, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import React, { Component } from 'react';
import AuthCheck from '../AuthCheckScreen/view'
import LoginScreen from '../LoginScreen/view'
import CategoriesScreen from '../CategoriesScreen/view'
import ForgotPasswordScreen from '../ForgotPasswordScreen/view'
import RegisterScreen from '../RegisterScreen/view'
import ProductListingScreen from '../ProductListingScreen/view'
import ProductDetailScreen from '../ProductDetailScreen/view';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../../resources/colors'
import AddProducts from '../AddProducts/view'

const Categories = createStackNavigator({
    CategoriesScreen: { screen: CategoriesScreen },
    AddProducts: { screen : AddProducts}
})

const ProductScreens = createStackNavigator({
    ProductListingScreen: { screen: ProductListingScreen },
    ProductDetailScreen: { screen: ProductDetailScreen }
})

const iconSize = 24;

const AppStack = createBottomTabNavigator({
    CategoriesScreen: {
        screen: Categories,
        navigationOptions: {
            tabBarLabel: 'Orders',
            tabBarIcon: ({ tintColor }) => (
                <Entypo
                    reverse
                    name='archive'
                    type='font-awesome'
                    color={tintColor}
                    size={iconSize}
                />
            )
        }
    },
    ProductScreens: {
        screen: ProductScreens,
        navigationOptions: {
            tabBarLabel: 'Receipts',
            tabBarIcon: ({ tintColor }) => (
                <Entypo
                    reverse
                    name='print'
                    type='font-awesome'
                    color={tintColor}
                    size={iconSize}
                />
            )
        }
    },
    ProductScreenss: {
        screen: ProductScreens,
        navigationOptions: {
            tabBarLabel: 'Reports',
            tabBarIcon: ({ tintColor }) => (
                <Entypo
                    reverse
                    name='documents'
                    type='font-awesome'
                    color={tintColor}
                    size={iconSize}
                />
            )
        }
    }
}, {
        initialRouteName: 'CategoriesScreen',
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            style: {
                backgroundColor: color.foreground,
            },
            activeTintColor: color.background,
        }
    })

const LoginStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    ForgotPasswordScreen: { screen: ForgotPasswordScreen },
    RegisterScreen: { screen: RegisterScreen }
}, {
        initialRouteName: 'LoginScreen'
    })

const MainNavigator = createSwitchNavigator({
    AuthCheck: { screen: AuthCheck },
    LoginStack: { screen: LoginStack },
    AppStack: { screen: AppStack },
},
    {
        initialRouteName: 'AuthCheck',
    });

const App = createAppContainer(MainNavigator);


export default App;