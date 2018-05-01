import React, { Component } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import {
	List,
	ListItem
} from 'react-native-elements';

import GLOBALS from '../config/globals';

export default class CustomList extends Component {

	render () {
		let items = [];
		if (this.props.courses) {
			Object.entries(this.props.courses).forEach(
			    ([key, value]) =>
			    items.push(
			    	<ListItem
			    		containerStyle={styles.listitem}
						chevronColor={GLOBALS.COLORS.DARK_GRAY}
						key={key}
						title={key}
						onPress={() => this.props.goToDetails({ number: key, ...value })}
					/>
				)
			);
		} else if (this.props.depts) {
			// console.log(`The departments are: ${this.props.depts}`);
			this.props.depts.forEach((dept) =>
				items.push(
					<ListItem
						containerStyle={styles.listitem}
						chevronColor={GLOBALS.COLORS.DARK_GRAY}
						key={dept}
						title={dept}
						onPress={() => this.props.goToDepartment(dept)}
					/>
				)
			);
		}
		// console.log(`The items to be rendered are: ${items}`);
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
		flex: 1,
		borderTopColor: GLOBALS.COLORS.DARK_GRAY,
		borderBottomColor: GLOBALS.COLORS.DARK_GRAY
	},
	listitem: {
		backgroundColor: GLOBALS.COLORS.BLUSH,
		borderBottomColor: GLOBALS.COLORS.DARK_GRAY,
		borderTopColor: GLOBALS.COLORS.DARK_GRAY
	}
})