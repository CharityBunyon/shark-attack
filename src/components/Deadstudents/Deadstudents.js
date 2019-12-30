import './Deadstudents.scss';
import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Deadstudents extends React.Component {
  static propTypes = {
    deadStudent: studentShape.studentShape,
  }

  render() {
    const { deadStudent } = this.props;
    return (
    <div className="liveStudentCard col-3 text-center">
        <img src={deadStudent.imgUrl} className="card-img-top studentImg" alt={deadStudent.firstName}/>
        <div className='card-body'>
          <p className='card-title'>{deadStudent.firstName}</p>
          <p className='card-title'>{deadStudent.lastName}</p>
        </div>
      </div>
    );
  }
}

export default Deadstudents;
