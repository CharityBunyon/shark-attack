import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import GunganCity from '../components/GunganCity/GunganCity';

console.log(studentData);
class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    console.log(studentData.livingStudents());
    this.setState({ students });
  }


  render() {
    return (
    <div className="App">
      <h1 className="appTitle">Join The Dark Side or Die!</h1>
      <div>
        <GunganCity students={this.state.students} />
      </div>
    </div>
    );
  }
}

export default App;
