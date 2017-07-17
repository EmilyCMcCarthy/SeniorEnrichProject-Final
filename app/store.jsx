import { createStore, applyMiddleware, combineReducers } from 'redux';
//import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios';
 // For when I do react-redux:
//export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

// Initial State

const initialState = {
    campuses : [],
    students : [],
    campus: {},
    student: {}
};

// Action Types - Campuses

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const FIND_CAMPUS = 'FIND_CAMPUS';
const GET_CAMPUS = 'GET_CAMPUS';
const WRITE_CAMPUS = 'WRITE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

// Action Types - Students
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const WRITE_STUDENT = 'WRITE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

// Action Creators - CAMPUSES

export function getAllCampuses (campuses) {
    const action = { type: GET_ALL_CAMPUSES, campuses};
    return action;
}

export function findCampus (id) {
    const action = { type: FIND_CAMPUS, id};
    return action;
}

export function getCampus (campus) {
    const action = { type: GET_CAMPUS, campus};
    return action;
}

export function writeCampus (campus){
    const action = { type: WRITE_CAMPUS, campus};
    return action;
}
export function removeCampus (campus) {
    const action = { type: REMOVE_CAMPUS, campus};
    return action;
}

// Action Creators - STUDENTS

export function getAllStudents (students) {
    const action = { type: GET_ALL_STUDENTS, students};
    return action;
}

export function getStudent (student) {
    const action = { type: GET_STUDENT, student};
    return action;
}

export function writeStudent (student) {
    const action = { type: WRITE_STUDENT, student};
    return action;
}

export function removeStudent (id) {
    const action = { type: REMOVE_STUDENT, id};
    return action;
}
// Thunk creators - CAMPUSES

export function fetchAllCampuses () {
    return function thunk (dispatch) {
        return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            const action = getAllCampuses(campuses);
            dispatch(action);
        });
    }
}

export function findCampusThunkCr (id) {
    return function thunk (dispatch){
        return axios.get(`api/campuses/${id}`)
                .then(res => res.data)
                .then(campus => {
                    const action = findCampus(campus);
                    dispatch(action);
                })
    
    }
}

export function postCampus (campus){
    return function thunk (dispatch) {
        return axios.post('api/campuses', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = getCampus(newCampus);
            dispatch(action);
        });

    }
}
export function thunkRemoveCampus (id){
    return function thunk (dispatch) {
        dispatch(removeCampus(id))
        axios.delete(`api/campuses/${id}`)
        .catch(err => console.error("Removing Campus Unsuccesful",err))
    }
}

// Thunk creators - STUDENTS
export function fetchAllStudents () {
    return function thunk (dispatch) {
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            const action = getAllStudents(students);
            dispatch(action);
        });
    }
}

export function postStudent (student){
    return function thunk (dispatch) {
        return axios.post('api/students', student)
        .then(res => res.data)
        .then(newStudent => {
            const action = getStudent(newStudent);
            dispatch(action);
        })
        .catch(err => console.error("post Student Unsuccessful", err));

    }
}
export function thunkRemoveStudent (id){
    return function thunk (dispatch) {
        dispatch(removeStudent(id))
        axios.delete(`api/students/${id}`)
        .catch(err => console.error("Removing Students Unsuccesful",err))
    }
}
// Reducer

function reducer (state = initialState, action){
    switch (action.type){
        // Campuses
        case GET_ALL_CAMPUSES:
        return Object.assign({}, state, {campuses: action.campuses});
        case FIND_CAMPUS:
        return Object.assign({}, state, {campus: action.campus});
        case GET_CAMPUS:
        return Object.assign({}, state, {campuses:[...state.campuses, action.campus]})
        case WRITE_CAMPUS:
        return Object.assign({}, state, {campus: Object.assign({}, state.campus, action.campus)})
        case REMOVE_CAMPUS:
        return Object.assign({}, {campus: state.campus, students: state.students, student: state.student}, {campuses: state.campuses.filter(campus => campus.id !== action.id)})
        // Students
        case GET_ALL_STUDENTS:
        return Object.assign({}, state, {students: action.students} );
        case GET_STUDENT:
        return Object.assign({}, state, {students:[...state.students, action.student]})
        case WRITE_STUDENT:
        return Object.assign({}, state, {student: Object.assign({}, state.student, action.student)})
        case REMOVE_STUDENT:
        return Object.assign({}, {campus: state.campus, campuses: state.campuses, student: state.student}, {students: state.students.filter(student => student.id !== action.id)})
        
        // Default
        default: return state;
        

    };

}

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);

export default store;