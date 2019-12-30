import './GunganCity.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Student from '../Livestudents/Livestudents';
import studentShape from '../../helpers/propz/studentShape';


class GunganCity extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    followLight: PropTypes.func,
  }

  useForce = (e) => {
    const { followLight } = this.props;
    e.preventDefault();
    followLight();
  }


  render() {
    const { students } = this.props;
    const studentCards = students.map((student) => <Student key={student.id} student={student}/>);

    return (
      <div id='gunganCity' className="col-6 text-center">
        <h2 className='cityTitle'>Gungan City</h2>
        <button className="btn btn-danger killBtn" onClick={this.useForce}>USE THE FORCE</button>
        <div className='livingStudents row d-flex flex-wrap justify-content-between'>
        {studentCards}
        </div>
      </div>
    );
  }
}

export default GunganCity;
