import React, { Component } from 'react';
import store from '../store';
import PracticeCampusDisplay from './PracticeCampusDisplay';

export default class PracticeCampuses extends Component {
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
        const { campuses } = this.state;
 
    
        return(
            <div>
            <PracticeCampusDisplay campuses={campuses}/>
            </div>
        )
    }

}