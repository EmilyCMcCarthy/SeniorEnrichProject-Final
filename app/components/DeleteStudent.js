import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteStudent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      student: this.props.student,
      error: false
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount (props) {
    //console.log(this.state.student, "student inside DeleteStudent")

    //const student = this.state.student;
    // axios.get(`/api/student/${student.id}`)
    //   .then(res => res.data)
    //   .then(student => {
    //     this.setState({ student });
    //   });
  }

  onClick (props) {
      console.log(this.props, "this.props")
      const student = this.props.student;
    console.log("test");
    axios.delete(`api/students/${student.id}`).catch(err => {console.error(err)});
    this.setState({ student: {} })

  }

  render () {

    const student = this.state.student;
    const onClick= this.onClick;
    

    return (

      <div className="deleteStudent">
                <button
                  className="selectDelete"
                  onClick={onClick}>
                 X
                </button>
      </div>
    );
  }
}