import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import GunganCity from '../components/GunganCity/GunganCity';
import Blackhole from '../components/Blackhole/Blackhole';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  followLight = () => {
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    const studentPosition = Math.floor(Math.random() * students.length);
    const studentId = students[studentPosition].id;
    studentData.followTheLight(studentId);
    this.setState({ students, deadStudents });
  }

  render() {
    return (
    <div className="App">
      <div>
        <h1 className="appTitle">Join Me or Die!</h1>
      </div>
      <div className=" d-flex">
        <GunganCity students={this.state.students} followLight={this.followLight}/>
        <Blackhole deadStudents={this.state.deadStudents}/>
      </div>
    </div>
    );
  }
}

export default App;
