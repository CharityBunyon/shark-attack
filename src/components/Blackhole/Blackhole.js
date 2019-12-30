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
      <div id='blackhole' className="col-6 text-center">
        <h2 className='cityTitle'>The Fallen</h2>
        <div className='livingStudents row d-flex flex-wrap justify-content-between'>
        {deadStudentCards}
        </div>
      </div>
    );
  }
}

export default Blackhole;
