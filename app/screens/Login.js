import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput
} from 'react-native';
import {
	Button
} from 'react-native-elements';

import GLOBALS from '../config/globals';

export default class Login extends Component {
	constructor (props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	render () {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder={'Enter username...'}
					value={this.state.username}
					onChangeText={username => this.setState({ username })}
				/>
				<TextInput
					style={styles.input}
					placeholder={'Enter password...'}
					secureTextEntry
					autoCorrect={false}
					autoCapitalize={'none'}
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
				/>
				<View style={styles.buttonContainer}>
					<Button
						buttonStyle={styles.button}
						title={'Login'}
						onPress={() => alert('Login not set up.')}
					/>
					<Button
						buttonStyle={styles.button}
						title={'Logout'}
						onPress={() => alert('Logout not set up.')}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: GLOBALS.COLORS.WHITE
	},
	input: {
		width: 200,
		height: 50
	},
	button: {
		backgroundColor: GLOBALS.COLORS.ORANGE,
		width: 150,
		height: 50,
		borderRadius: 7
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
})