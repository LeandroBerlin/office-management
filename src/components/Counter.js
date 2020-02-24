import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div>
    Employee available <p className={`badge ${props.employee.some(e => e.available === false) ? 'badge-warning' : 'badge-success'}`}>
      {props.employee
        .filter(employee => employee.available === true)
        .length}</p> from <p className="badge badge-success" > {props.employee.length}</p >
  </div >
);

Counter.propTypes = {
  employee: PropTypes.array.isRequired
};


export default Counter;
