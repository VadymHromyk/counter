import React from 'react';
import css from './../../Counter.module.css'

type PropsType = {
    title: string
    value: number
    func: (value: number) => void
    error: boolean
}

const SetCounterValue = (props: PropsType) => {

    return (
        <div>
            <span>{props.title}</span>
            <input type='number'
                   value={props.value}
                   onChange={(e) => {
                       props.func(parseInt(e.currentTarget.value))
                   }}
                   className={props.error ? css.incorect_input : ''}
            />
        </div>
    );
}

export default SetCounterValue;