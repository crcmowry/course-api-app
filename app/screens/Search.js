import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import {
	SearchBar,
	Button
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/header';
import GLOBALS from '../config/globals';

import F from '../../data/F.json';
import S from '../../data/S.json';
import M1 from '../../data/M1.json';
import M2 from '../../data/M2.json';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	onGoPressed () {
		// console.log(F.courses[this.state.query]);
		if(F.courses[this.state.query]) {
			this.props.navigation.navigate('Details',
				{number: this.state.query, ...F.courses[this.state.query]})
		} else {
			alert(`"${this.state.query}" is not a valid course number. Make sure to use hyphens ("-").`);
		}

	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar
					lightTheme
					onChangeText={query => this.setState({ query })}
					placeholder={'Type Here...'}
					containerStyle={styles.searchbar}
				/>
				<Button
					title='Go'
					onPress={() => this.onGoPressed()}
					buttonStyle={styles.button}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	searchbar: {
		// flex: 1,
		// flexDirection: 'row'
	},
	button: {
		backgroundColor: GLOBALS.COLORS.ORANGE,
		width: 100,
		height: 45,
		borderRadius: 5
	}
})