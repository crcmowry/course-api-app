import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView
} from 'react-native';

import CustomList from '../components/list';

import GLOBALS from '../config/globals';
import F from '../../data/F.json';
// import S from '../../data/S.json';
// import M1 from '../../data/M1.json';
// import M2 from '../../data/M2.json';

export default class Browse extends Component {

	constructor (props) {
		super(props);
		this.state = {
			depts: new Set()
		}
	}

	goToDetails (item) {
		// console.log(item);
		this.props.navigation.navigate('Details', { ...item })
	}

	goToDepartment (dept) {
		let coursesInDept =
			Object.keys(F.courses)
				.filter( key => F.courses[key].department === dept )
				.reduce( (res, key) => (res[key] = F.courses[key], res), {} );
		// console.log(coursesInDept);
		this.props.navigation.navigate('Department', { department: dept, courses: coursesInDept})
	}

	getAllDepts (json) {
		let depts = new Set();
		Object.entries(json).forEach(
		    ([key, value]) =>
		    depts.add(value.department)
		);
		return depts;
	}

	componentWillMount() {
		depts = this.getAllDepts(F.courses);
		this.setState({ depts });
	}

	render() {
		// console.log(this.props.navigation);
		depts = this.getAllDepts(F)
		return(
			<View style={styles.container}>
				{/*<ScrollView>
					<CustomList
						courses={F.courses}
						goToDetails={(item) => this.goToDetails(item)}/>
				</ScrollView>*/
				<ScrollView>
					<CustomList
						depts={this.state.depts}
						goToDepartment={(dept) => this.goToDepartment(dept)}
					/>
				</ScrollView>}
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