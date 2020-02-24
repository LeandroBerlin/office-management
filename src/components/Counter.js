import React from 'react'

const Counter = (props) => {

    return (
        <div>
            Employee available <p className={"badge " + (props.employee.some(e => e.available === false) ? "badge-warning" : "badge-success")}>
                {props.employee
                    .filter(employee => employee.available === true)
                    .length}</p> from < p className="badge badge-success" > {props.employee.length}</p >
        </div >
    )
}

export default Counter
