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

import F18 from '../../data/F.json';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	onGoPressed () {
		// console.log(F18.courses[this.state.query]);
		if(F18.courses[this.state.query]) {
			this.props.navigation.navigate('Details',
				{number: this.state.query, ...F18.courses[this.state.query]})
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
					icon={
						<Icon
							name='arrow-right'
							size={15}
							color='white'
						/>
					}
					title='Go'
					onPress={() => this.onGoPressed()}
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
	}
})