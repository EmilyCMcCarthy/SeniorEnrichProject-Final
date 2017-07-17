import React, { Component } from 'react';
import SingleStudent from './SingleStudent';
import DeleteStudent from './DeleteStudent';
import { Link } from 'react-router-dom';

const AllStudents = (props) => {
    
    const students = props.students;
    const studentCampuses = props.studentCampuses
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
                        <button><Link to={`/students/${student.id}`}><td>{ student.name }</td></Link></button>
                        <td>{ student.email }</td>
                        <Link to={`/campuses/${student.campusId}`}><td>{ student.campusId }</td></Link>
                        <td><DeleteStudent student={student} /></td>
                        
                        </tr>

                    ))
                    
                    }
                    </tbody>
                </table>

                
            </div>
        </div>
    );
};

export default AllStudents;