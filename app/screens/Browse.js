import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Header from '../components/header';
import CustomList from '../components/list';

import GLOBALS from '../config/globals';
import F from '../../data/F.json';
import S from '../../data/S.json';
import M1 from '../../data/M1.json';
import M2 from '../../data/M2.json';

export default class Browse extends Component {
	details (item) {
		// console.log(item);
		this.props.navigation.navigate('Details', { ...item })
	}

	render() {
		return(
			<View style={styles.container}>
				{/*<ScrollView>
					<CustomList
						data={F}
						details={(item) => this.details(item)}/>
				</ScrollView>*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GLOBALS.COLORS.BLUSH
	}
})