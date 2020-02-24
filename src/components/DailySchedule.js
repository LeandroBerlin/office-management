import React from 'react'
import PropTypes from 'prop-types';

export default function Day(props) {

    const pair = (array) => {
        // return array.reduce((result, value, index, array) => {
        //     if (index % 2 === 0)
        //         result.push(array.slice(index, index + 2));
        //     return result;
        // }, [])
        
        const teams = []
        for (let i = 0; i < array.length; i += 2) {
            teams.push(array.slice(i, i + 2))
        }
        return teams
    }

    const pairedList = pair(props.employee)[props.dayId]


    return (
        <div className="list-group mb-4">
            <h4>{props.day}</h4>
            {pairedList &&

                pairedList.map((employe, id) =>
                    <div
                        className="list-group-item"
                        key={id}>

                        <i className={"pt-2 mr-4 fas " + (id === 0 ? "fa-sign-in-alt" : "fa-sign-out-alt")}></i>

                        <div className={(!employe.available ? "strike" : "employe")}>{employe.name}
                        </div>
                        <div className="">
                            <span
                                className={"badge badge-pill " + (employe.available ? "" : "badge-danger")}>{employe.available ? "" : "!"}</span>
                            <span
                                className="badge badge-pill ml-1 badge-info">{employe.department}</span>

                            <span
                                onClick={() => props.onDelete(employe.id)}
                                className="close ml-2 mt-1">
                                &times;
                            </span>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

Day.propTypes = {
    day: PropTypes.string.isRequired,
    dayId: PropTypes.number.isRequired,
    employee: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};