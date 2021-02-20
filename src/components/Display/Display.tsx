import React from 'react';
import css from './Display.module.css'

type DisplayType = {
    count: number
    maxValue: number
    displayText: number | 'Incorrect value!' | 'Enter a value!' | 'Enter a value and press "set"'
}

const Display = (props: DisplayType) => {

    return (
        <div className={css.main}>
            <p className={ props.count === props.maxValue ? css.isMax : '' } >
                {props.displayText}
            </p>
        </div>
    );
}

export default Display;