import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomList from '../components/list';

import GLOBALS from '../config/globals';

export default class Browse extends Component {

	goToDetails (item) {
		this.props.navigation.navigate('Details', { ...item })
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView>
					<CustomList
						courses={this.props.navigation.getParam('courses')}
						goToDetails={(item) => this.goToDetails(item)}/>
				</ScrollView>
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