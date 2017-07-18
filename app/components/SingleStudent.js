import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Bluebird from 'bluebird';
import axios from 'axios';
import PracticeDeleteStudent from './PracticeDeleteStudent';


export default class SingleStudent extends React.Component {
    
    constructor () {
        super();
        this.state = {
            student : {}
        };
    }

    fetchStudent(studentId) {
        const studentPath = `/api/students/${studentId}`
        const campusPath = `/api/students/${studentId}/campus`
        const paths = [studentPath, campusPath];
        Bluebird.map(paths, path => axios.get(path))
        .map(res => res.data)
        .spread((student, campus) => {
            student.campus = campus.name;
            console.log(student.campus);
             this.setState({ student });
        });
       
    }
     componentDidMount () {
        const studentId = this.props.match.params.studentId;
        this.fetchStudent(studentId);
     }
     componentWillReciveProps (nextProps) {
         const nextStudentId = nextProps.match.params.studentId;
         const currentStudentId = this.props.match.params.studentId;
         if (nextStudentId !== currentStudentId) {
            this.fetchStudent(nextStudentId)
         }
     }

     render () {
         const student = this.state.student;

         return (
             <div className="student">
                <h1>Student Detail:</h1>
                
                <h3 contentEditable="true">{ student.name }</h3>
                <p>email: { student.email }</p>
                <h4>Delete Student?</h4>
                <PracticeDeleteStudent student={student} />
                <h4>Student's Campus: </h4>
                <p><Link to={`/campuses/${student.campusId}`}>{ student.campus }</Link></p>
             </div>
         )
     }
} 