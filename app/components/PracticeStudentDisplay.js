import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PracticeDeleteStudent from './PracticeDeleteStudent';
import axios from 'axios';
import Bluebird from 'bluebird';
import store from '../store';

export default class PracticeStudentDisplay extends Component {
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

 const {students, campuses} = this.state
 const arrOfCampusIds = students.map(student => {
      return student.campusId
 });
 console.log(arrOfCampusIds, "arrOfCampusIds");
 const arrOfCampForStud = arrOfCampusIds.map(campusId => {
     for(let i = 0; i< campuses.length; i++){
         if(campuses[i].id === campusId){
             return campuses[i];
         }
     }
 })
 

 console.log(arrOfCampForStud, "arrOfCampForStud");
      return (
     <div>
            <h3>Students</h3>
            <div>
                <Link to={`/addStudent`}><button>+</button></Link>
            </div>
            <div>
                <table className="table">
                    <thead className="thead-default">
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Campus</th>
                        <th>Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    students.map(student => (
                        <tr key={student.id}>
                        <th scope="row" >{ students.indexOf(student) + 1 }</th>
                        <td><Link to={`/students/${student.id}`}>{ student.name }</Link></td>
                        
                        <td>{ student.email }</td>
                        <td><Link to={`/campuses/${student.campusId}`}>{ arrOfCampForStud[students.indexOf(student)].name }</Link></td>
                        <td><PracticeDeleteStudent id={student.id} /></td>
                        
                        </tr>

                    ))
                    
                    }
                    </tbody>
                </table>

                
            </div>
        </div>
  );
  }
}
