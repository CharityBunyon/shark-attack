import './Blackhole.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

import DeadStudent from '../Deadstudents/Deadstudents';

class Blackhole extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;
    const deadStudentCards = deadStudents.map((deadStudent) => <DeadStudent key={deadStudent.id} deadStudent={deadStudent}/>);
    return (
      <div id='blackhole' className=" text-center col-6">
        <div>
          <h2 className='BHTitle'>The Fallen</h2>
        </div>
        <div className='deadStudents d-flex flex-wrap'>
        {deadStudentCards}
        </div>
      </div>
    );
  }
}

export default Blackhole;
