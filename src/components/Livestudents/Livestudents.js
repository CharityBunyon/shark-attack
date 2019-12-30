import './Livestudents.scss';
import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Student extends React.Component {
  static propTypes = {
    students: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    console.log(student);
    return (
      <div className="card liveStudentCard">
        <img src={student.imgUrl} className="card-img-top studentImg" alt={student.firstName}/>
        <div className='card-body'>
          <h5 className='card-title'>{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Student;
