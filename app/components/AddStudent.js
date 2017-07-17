/* import React, { Component } from 'react';
import axios from 'axios';
import AllCampuses from './AllCampuses';

export default class AddStudent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      students: [],
      newStudent: {},
      campuses: [],
      campus: 1,
      name: "",
      email: "",
      error: false
      
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
        axios.get('api/campuses')
        .then(res => res.data)
        .then(campuses => {
            this.setState({ campuses })
        });


  }

   fetchCampus(CampusId) {
        const campusPath = `/api/campuses/${CampusId}`
        axios.get(campusPath)
        .then(res => res.data)
        .then(campus => {
          console.log(campus, "campus inside of fetch campus")
            this.setState({ campus })
        });
   }
  handleChange (evt) {
        const value = evt.target.value;
        const name = evt.target.name;
        console.log(name, "name");
        console.log(name === "campus", "equal to campus?")
        if(name === "campus"){
          console.log("Hello!")
          this.fetchCampus(value)
          console.log(this.state.campus.name, "this.state.campus")
        } 
        
   this.setState({
      
       
       [name]: value,
       error: false
   })
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log("inside handle submit", this.state.name, this.state.email, this.state.campus);
   axios.post('/api/students', {name: this.state.name, email: this.state.email, campus: this.state.campus })

  }

  render () {

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

*/