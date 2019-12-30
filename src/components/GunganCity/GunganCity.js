import './GunganCity.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Student from '../Livestudents/Livestudents';
import studentShape from '../../helpers/propz/studentShape';


class GunganCity extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }


  render() {
    const { students } = this.props;
    const studentCards = students.map((student) => <Student key={student.id} student={student}/>);

    return (
      <div id='gunganCity' className='container'>
        <h2 className='cityTitle'>Gungan City</h2>
        <button className="btn btn-danger killBtn">USE THE FORCE</button>
        <div className='livingStudents row'>
        {studentCards}
        </div>
      </div>
    );
  }
}

export default GunganCity;
