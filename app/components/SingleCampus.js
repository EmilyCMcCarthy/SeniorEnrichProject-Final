import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Bluebird from 'bluebird';
import axios from 'axios';
import PracticeDeleteCampus from './PracticeDeleteCampus';




export default class SingleCampus extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            campus : {}, 
            students: []
        };
    }

    fetchCampus(CampusId) {
        const campusPath = `/api/campuses/${CampusId}`
        console.log(campusPath)
        axios.get(campusPath)
        .then(res => res.data)
        .then(campus => {
            this.setState({ campus })
        });

       
    }
    fetchStudents(campusId){

        var allStudents = [];
        axios.get(`api/students`)
        .then(res => res.data)
        .then(students => {
            console.log(students, "students Inside of promise");

            students.map(student => {
                console.log(student.name, "studentName")
            })

            var filtered = students.filter(function(student){
            
                if (student.campusId == campusId) {
                    return true}
                else {
                    return false
                }
            })

            console.log("filtered", filtered)
           
            this.setState({ students: filtered })
            console.log(this.state.students, "this.state.students")
        })

        console.log("AllStudents", allStudents);
 
        
    }
     componentDidMount () {
        const campusId = this.props.match.params.campusId;
        const ThisProps = this.props.match
        console.log(ThisProps, "this.props inside single campus")
        this.fetchCampus(campusId);
        console.log("inside component did mount", campusId)
        this.fetchStudents(campusId)
     }
     componentWillReciveProps (nextProps) {
         const nextCampusId = nextProps.match.params.campusId;
         const currentCampusId = this.props.match.params.campusId;
         if (nextCampusId !== currentCampusId) {
            this.fetchCampus(nextCampusId)
         }
     }

     render () {
         const campus = this.state.campus;
         const students = this.state.students;

         return (
             <div className="campus">
                <h1>Campus Detail:</h1>
                <img src={campus.image} />
                <h3 contentEditable="true" name="name">{ campus.name }</h3>
                <p contentEditable="true" name="campus">Location: { campus.location }</p>
                
                <div><p> Students: {
                    students.map(student => {
                       return <div key={student.id} contentEditable="true"> <Link to={`/students/${student.id}`}>{student.name}</Link></div>
                    })
                }
                </p></div>
                <h4>Delete Campus?</h4>
                <PracticeDeleteCampus id={campus.id}/>
             </div>
         )
     }
} 