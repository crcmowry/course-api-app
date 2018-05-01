import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Header from '../components/header';
import CustomList from '../components/list';

import F18 from '../../data/F.json';

export default class Browse extends Component {
	details (item) {
		// console.log(item);
		this.props.navigation.navigate('Details', { ...item })
	}

	render() {
		return(
			<View style={styles.container}>
				{<ScrollView>
					<CustomList
						data={F18}
						details={(item) => this.details(item)}/>
				</ScrollView>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})