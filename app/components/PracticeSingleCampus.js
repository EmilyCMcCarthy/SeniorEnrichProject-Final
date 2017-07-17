/* import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Bluebird from 'bluebird';
import axios from 'axios';
import PracticeDeleteCampus from './PracticeDeleteCampus';
import store, {findCampusThunkCr} from '../store';



export default class SingleCampus extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
        this.editChange = this.editChange.bind(this);
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
        const campusId = this.props.match.params.campusId;
        const ThisProps = this.props.match
        console.log(ThisProps, "this.props inside single campus")
        findCampusThunkCr(campusId);
        store.dispatch(getCampus(this.props.id))
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
         const editChange = this.editChange;
         return (
             <div className="campus">
                <img src={campus.image} />
                <h3 contentEditable="true" name="name" handleChange={editChange}>{ campus.name }</h3>
                <p name="campus">{ campus.location }</p>
                
                <div>{
                    students.map(student => {
                       return <div key={student.id}> <Link to={`/students/${student.id}`}>{student.name}</Link></div>
                    })
                }
                </div>
                <p>Delete Campus?</p>
                <PracticeDeleteCampus id={campus.id}/>
             </div>
         )
     }
} 

*/