import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render () {
        return (
            <sidebar>
            <h1>Margaret Hamilton IAJ</h1>
            <button><Link to="/campuses">Home</Link></button>
            <button><Link to="/students">Students</Link></button>
            </sidebar>
        )
    }
}