import React, { Component } from 'react';
//import StatefulCampuses from './StatefulCampuses';
//import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
//import StatefulStudents from './StatefulStudents';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import AddStudent from './AddStudent';
import PracticeCampuses from './PracticeCampuses';
import PracticeStudents from './PracticeStudents';
import PracticeAddCampus from './PracticeAddCampus';
import PracticeAddStudent from './PracticeAddStudent';
import PracticeDeleteCampus from './PracticeDeleteCampus';
//import PracticeStudentDisplay from './PracticeStudentDisplay';
import store, { fetchAllCampuses, fetchAllStudents } from '../store';

export default class Main extends Component {

// constructor () {
//     super();
//     this.state = {};
// }

componentDidMount () {
    const thunk = fetchAllCampuses();
   store.dispatch(thunk);
    const thunk2 = fetchAllStudents();
    store.dispatch(thunk2);
  }

render () {

    return (
       <Router>
            <div id="main" className="container-fluid">
                <div className="col-xs-2">
                 <Sidebar />
                </div>
                <div className="col-xs-10">

                    
                   
                    <Switch>

                   <Route exact path="/" component={PracticeCampuses} />
                   <Route exact path="/campuses" component={PracticeCampuses} />
                   <Route exact path="/students" component={PracticeStudents} />
                   <Route path="/students/:studentId" component={SingleStudent} />
                   <Route path="/campuses/:campusId" component={SingleCampus} />
                   <Route path="/addStudent" component={PracticeAddStudent} />
                    <Route path="/addCampus" component={PracticeAddCampus} />
                    <Route path="/deleteCampus/:campusId" component={PracticeDeleteCampus} />
                    
                    </Switch>
                </div>
            </div>
      </Router>
    )
}
    
}