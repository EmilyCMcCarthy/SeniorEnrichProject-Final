import React, { Component } from 'react';
import store, { thunkRemoveCampus } from '../store';

export default class PracticeDeleteCampus extends Component {

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
    store.dispatch(thunkRemoveCampus(this.props.id))
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