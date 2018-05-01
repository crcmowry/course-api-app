import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';
import {
    Button
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import BrowseScreen from './app/screens/Browse';
import SearchScreen from './app/screens/Search';
import SettingsScreen from './app/screens/Settings';
import LoginScreen from './app/screens/Login';
import DetailsScreen from './app/screens/Details'

export default class App extends Component {
    render() {
        return (<AppDrawerNavigator/>);
    }
}
const BrowseStack = StackNavigator({
    Browse: {
        screen: BrowseScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Browse',
            headerLeft:
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('DrawerOpen')}>
                    <Icon name='bars' size={20}/>
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Search')}>
                    <Icon name='search' size={20}/>
                </TouchableOpacity>
        })
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.number
        })
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Search'
        })
    }
});

const AppDrawerNavigator = DrawerNavigator({
    Browse: {
        screen: BrowseStack
    },
    // Search: {
    //     screen: SearchScreen
    // },
    Settings: {
        screen: SettingsScreen
    },
    Login: {
        screen: LoginScreen
    }
});

const styles = StyleSheet.create({
    icon: {
        margin: 8
    }
})