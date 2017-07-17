import React, { Component } from 'react';
import store, { postStudent, writeStudent } from '../store';
import axios from 'axios';

export default class PracticeAddStudent extends Component {

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

  handleSubmit (evt) {
    evt.preventDefault();

    store.dispatch(postStudent(this.state.student));
    store.dispatch(writeStudent({}));
   
  }

   
   
  handleChange (evt) {
        var value = evt.target.value;
        const name = evt.target.name;
        console.log(name, "name");
        console.log(name === "campus", "equal to campus?")
        if(name === "campus"){
          console.log("Hello!")
          const campusPath = `/api/campuses/${value}`
        axios.get(campusPath)
        .then(res => res.data)
        .then(campus => {
          console.log(campus, "campus inside of promise")
            value = campus;
              store.dispatch(writeStudent({
            [name]: value,
        }))})
        
        }
         
    
        else{
     store.dispatch(writeStudent({
       [name]: value,
     }
   ))}
  }

  render () {
   //const students = this.state.students;
    const campuses = this.state.campuses;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div className="well">
        <form className="form-horizontal" noValidate name="studentSubmit" onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Name:
            <input type="text" name="name" required onChange={handleChange} />
            </label>
            <label>
            Email Address
             <input type="text" name="email" required onChange={handleChange} />
             </label>
             <label>
          Select A Campus
          <select type="text" name="campus" required onChange={handleChange}>
            {
                campuses &&  campuses.map(campus => (
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                ))
            }
          </select>
          </label>
          </div>
          <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Add Student</button>
              </div>
          </div>
        </form>
      </div>
    );
  }
}
