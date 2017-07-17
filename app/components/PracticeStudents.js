import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store, { fetchAllStudents } from '../store';
import PracticeStudentDisplay from './PracticeStudentDisplay';

export default class PracticeStudents extends Component {
    constructor () {
        super();
        this.state = store.getState();
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
     }
    componentWillUnmount () {
        this.unsubscribe();
    }

    render () {
        const { students, campuses } = this.state;
        return(
            <div>
            <PracticeStudentDisplay students={students} />
            </div>
        )
    }

}