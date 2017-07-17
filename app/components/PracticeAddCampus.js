import React, { Component } from 'react';
import store, { postCampus, writeCampus } from '../store';

export default class PracticeAddCampus extends Component {

  constructor () {
    super();
    this.state = store.getState();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleChange (evt) {
    
    const value = evt.target.value;
    const name = evt.target.name;        
    store.dispatch(writeCampus({
       [name]: value
    }))
  
}

  handleSubmit (evt) {
    evt.preventDefault();

    
    store.dispatch(postCampus(this.state.campus));
    store.dispatch(writeCampus({}));
    
  }

  render () {
    return (
      <form id="new-campus-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-sm">
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Please Enter the campus name"
          ></input>
          <input
            className="form-control"
            type="text"
            name="location"
            onChange={this.handleChange}
            placeholder="Please Enter the campus location"
          />
           <input
            className="form-control"
            type="text"
            name="image"
            onChange={this.handleChange}
            placeholder="Please Enter the campus image"
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Create New Campus</button>
          </span>
        </div>
      </form>
    );
  }
}
