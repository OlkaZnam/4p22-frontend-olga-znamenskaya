import React, { useRef, useEffect, useState } from "react";
import './ListComponent.css'

const ListComponent = (props) => {
    let rand = Math.floor(10 + Math.random() * (21));
    const [num, setNum] = useState(rand)

    let intervalRef = useRef()

    const decreaseNum = () => {
        setNum((prev) => prev - 1)
    }

    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);
        return () => clearInterval(intervalRef.current);
    }, [])

    const isTimerOff = num > 0

    return (
        <div>
            {isTimerOff ? (
                <div className='list-component'>
                    {props.text} №{props.index} Timer:{num}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default ListComponent