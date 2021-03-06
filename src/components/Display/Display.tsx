import React from 'react';
import css from './Display.module.css'

type DisplayType = {
    count: number
    maxValue: number
    displayText: number | 'Incorrect value!' | 'Enter a value!' | 'Please, press "set"'
}

const Display = (props: DisplayType) => {

    return (
        <div className={css.main}>
            <p className={
                props.displayText !== 'Please, press "set"' ?
                    props.count === props.maxValue ? css.is_max : '' :
                    ''
            }>
                {props.displayText}
            </p>
        </div>
    );
}

export default Display;