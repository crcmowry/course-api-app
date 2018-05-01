import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class CustomList extends Component {
	render () {
		let items = []
		Object.entries(this.props.data.courses).forEach(
		    ([key, value]) =>
		    items.push(<ListItem
				key={key}
				title={key}
				onPress={() => this.props.details({ number: key, ...value })}
			/>)
		);
		return (
			<List containerStyle={styles.container}>
				{
					items.slice(0,20)
				}
			</List>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	}
})