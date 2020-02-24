
import React, { useState, useEffect } from 'react'
import DailySchedule from './DailySchedule'
import Employee from './Employee'
import { employeeData, daysData } from '../data'


export default function Overview() {

    const [days] = useState(daysData)
    const [employee, setEmployee] = useState(employeeData)
    const [employeePlan, setEmpoyeePlan] = useState(
        [...employee, ...employee,]
    )
    const [deleted, setDeleted] = useState(0)

    const random = () => Math.floor(Math.random() * Math.floor(9999))


    useEffect(() => {

        const updatedArray = employeePlan.map(e => ({ ...e, id: random() }))
        setEmpoyeePlan(updatedArray)
    },
        // eslint-disable-next-line
        [employee]);


    const handleDelete = (id) => {
        const oldList = employeePlan.filter(e => e.id !== id)
        const next = employee[deleted]
        const addToList = { ...next, id: random() }
        console.log(addToList)
        const newList = [...oldList, addToList]
        console.log(newList)
        setEmpoyeePlan(newList)
        setDeleted(prevState => {
            return (prevState === 6 ? 0 : prevState + 1)
        })
    }

    const handleStatus = (name) => {
        const availStatus = employee.map(
            e => {
                if (e.name === name) {
                    e.available = !e.available
                    return e
                } else return e
            }
        )

        const availList = employeePlan.map(
            e => {
                if (e.name === name) {
                    e.available = !e.available
                    return e
                } else return e
            }
        )
        setEmployee(availStatus)
        setEmpoyeePlan(availList)
    }


    return (

        <div className="row">
            {employee &&
                <div className="col-md-6">
                    <Employee
                        employee={employee}
                        onStatus={handleStatus}
                    />
                </div>
            }
            {employeePlan &&
                <div className="col-md-6 ">
                    <h2>Weekly Plan</h2>
                    {
                        days.map((day, id) => {
                            return <DailySchedule
                                key={id}
                                day={day}
                                dayId={id}
                                onDelete={handleDelete}
                                employee={employeePlan}
                            />
                        }
                        )
                    }
                </div>
            }
        </div>
    )
}
