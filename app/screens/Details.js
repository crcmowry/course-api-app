import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Details extends Component {
	render () {
		let props = this.props.navigation.state.params;
		// console.log(props);
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					{props.desc}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		// alignItems: 'center'
	},
	description: {
		fontSize: 12
	}
})