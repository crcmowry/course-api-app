import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Picker,
	View
} from 'react-native';

import F from '../../data/F.json';
import S from '../../data/S.json';
import M1 from '../../data/M1.json';
import M2 from '../../data/M2.json';
import GLOBALS from '../config/globals';

export default class Settings extends Component {
	constructor (props) {
		super(props);
		this.state = {
			semester: 'F'
		}
	}
	render () {
		console.log(this.props.navigation);
		return (
			<View style={styles.container}>
				<Picker
					selectedValue={this.state.semester}
					style={{ height: 50, width: 200 }}
					onValueChange={(itemValue, itemIndex) => this.setState({semester: itemValue})}>
					<Picker.Item label={F.semester} value="F" />
					<Picker.Item label={S.semester} value="S" />
					<Picker.Item label={M1.semester} value="M1" />
					<Picker.Item label={M2.semester} value="M2" />
				</Picker>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: GLOBALS.COLORS.WHITE
	}
})