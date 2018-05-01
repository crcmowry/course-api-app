import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.horizContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {this.props.navigation.navigate('DrawerOpen')}}>
						<Icon name='bars' size={24}/>
					</TouchableOpacity>
					<Text style={styles.title}>
						{this.props.title}
					</Text>
					<Icon name='search' size={24}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		marginLeft: 8,
		marginRight: 8,
		borderColor: 'black',
		borderBottomWidth: 1,
		backgroundColor: 'white'
	},
	horizContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		// color: 'white',
		fontSize: 24
	},
	button: {

	}
})