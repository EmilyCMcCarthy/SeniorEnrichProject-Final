import React, { Component } from 'react';
import store, { thunkRemoveStudent } from '../store';

export default class PracticeDeleteStudent extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

   componentWillUnmount () {
        this.unsubscribe();
    }

  onClick () {
      console.log(this.props.id)
    store.dispatch(thunkRemoveStudent(this.props.id))
  
  }


  render () {
      const onClick = this.onClick;
    return (
      <div>
        <button
            className="btn btn-default btn-xs"
            onClick={onClick}>
            X
        </button>
      </div>
    );
  }
}