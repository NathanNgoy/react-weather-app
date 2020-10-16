import React from 'react'

export default function display(props) {
    return (
        <div className = "main-display">
            <h1>{props.tempData}</h1>
            <h1>{props.description}</h1>
            <h1>{props.cityName}</h1>
            <h1>{props.unit}</h1>
        </div>
    )
}
