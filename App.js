import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Text,
    Image,
    View
} from 'react-native';
import {
    StackNavigator,
    DrawerNavigator,
    SafeAreaView,
    DrawerItems
} from 'react-navigation';
import {
    Button
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import BrowseScreen from './app/screens/Browse';
import SearchScreen from './app/screens/Search';
import SettingsScreen from './app/screens/Settings';
import LoginScreen from './app/screens/Login';
import DetailsScreen from './app/screens/Details';

import GLOBALS from './app/config/globals';

export default class App extends Component {
    render() {
        return (<AppDrawerNavigator/>);
    }
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('./images/cmu_logo_transparent.png')}
                    style={styles.logo}
                />
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

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
                </TouchableOpacity>,
            headerStyle: styles.header
        })
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.number,
            headerStyle: styles.header
        })
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Search',
            headerStyle: styles.header
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
}, {
    drawerBackgroundColor: GLOBALS.COLORS.LIGHT_GRAY,
    contentOptions: {
        activeTintColor: GLOBALS.COLORS.PINK
    },
    contentComponent: CustomDrawerContentComponent
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        // height: 50,
        // width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        margin: 8
    },
    header: {
        backgroundColor: GLOBALS.COLORS.RED
    },
    logo: {
        // flex: 1,
        // resizeMode: 'contain'
        height: 200,
        width: 200
    }
})