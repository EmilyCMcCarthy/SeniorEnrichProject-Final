/* import React, { Component } from 'react';
import axios from 'axios';
import AllStudents from './AllStudents';
import Bluebird from 'bluebird'

export default class StatefulStudents extends Component {

  constructor () {
    super();
    this.state = {
      students: [],
      studentCampuses: [],
      studentIds: []
    };
  }

  fetchStudents () {
    axios.get('/api/students/')
    .then(res => res.data)
    .then(students => {
      var arrIds = [];
      for(let i = 0; i < students.length; i++){
        arrIds.push(students[i].id);
      }
      console.log(arrIds, "arrayIds");
      this.setState({ students, studentIds: arrIds})
    })
  }

  fetchCampuses (arr) {
    var arrOfPaths = arr.map(elem => {
      return `/api/students/${elem}/campus`
    })

    Bluebird.map(arrOfPaths, path => axios.get(path))
    .map(res => res.data)
    .then(arr => {
      console.log(arr, "inside of fetch campuses");
      this.setState({ studentCampuses: arr})
    })
  }

  componentDidMount () {
    this.fetchStudents();
    var studentIds = this.state.studentIds;
    this.fetchCampuses(studentIds);
  } 

  render () {

    const students = this.state.students;
    const studentCampuses = this.state.studentCampuses;
    console.log(studentCampuses, "studentCampuses in statefulStudents")
    return (
        <div>
        <AllStudents students={students} studentCampuses={studentCampuses} />
        
        </div>
    );
  }

}

*/