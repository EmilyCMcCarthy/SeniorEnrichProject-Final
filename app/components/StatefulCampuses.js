/* import React, { Component } from 'react';
import axios from 'axios';
import AllCampuses from './AllCampuses';

export default class StatefulCampuses extends Component {

  constructor () {
    super();
    this.state = {
      campuses: []
    };
  }

  componentDidMount () {
    
      axios.get('/api/campuses/')
        .then(res => res.data)
        .then(campuses => {
            this.setState({ campuses })
        });
  }

  render () {

    const campuses = this.state.campuses;
    console.log(campuses, "inside StatefulCampus render");

    return (
        <div>
        <AllCampuses campuses={campuses} />
        
        </div>
    );
  }

}


*/