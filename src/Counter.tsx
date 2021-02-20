import React, {useState} from 'react';
import Button from './components/Button/Button'
import Display from './components/Display/Display';
import {CountType} from './App'
import css from './Counter.module.css'
import SetCounterValue from './components/SetCounterValue/SetCounterValue';

type CounterType = {
    count: CountType
    addNumber: () => void
    resetNumber: () => void
    maxValueBeforeСonfirming: number
    startValueBeforeСonfirming: number
    setMaxValueBeforeСonfirming: (value: number) => void
    setStartValueBeforeСonfirming: (value: number) => void
    addValues: () => void
    resetSettings: () => void
    maxValue: number
    startValue: number
}

const Counter = (props: CounterType) => {

    return (
        <div className={css.main}>
            <div className={css.square_block}>
                <SetCounterValue title={'Max value: '}
                                 value={props.maxValueBeforeСonfirming}
                                 func={props.setMaxValueBeforeСonfirming}
                                 error={props.startValueBeforeСonfirming >= props.maxValueBeforeСonfirming ||
                                 props.startValueBeforeСonfirming < 0}
                />
                <SetCounterValue title={'Start value: '}
                                 value={props.startValueBeforeСonfirming}
                                 func={props.setStartValueBeforeСonfirming}
                                 error={props.startValueBeforeСonfirming >= props.maxValueBeforeСonfirming ||
                                 props.startValueBeforeСonfirming < 0}
                />
                <Button isDisabled={props.startValueBeforeСonfirming >= props.maxValueBeforeСonfirming ||
                props.startValueBeforeСonfirming < 0}
                        title={'set'} func={props.addValues}
                />
                <Button isDisabled={false} title={'reset settings'} func={props.resetSettings}/>
            </div>
            <div className={css.square_block}>
                <Display
                    displayText={ // && - логічне і    || - логічне або
                        props.maxValueBeforeСonfirming === 0 &&
                        props.startValueBeforeСonfirming === 0 ? 'Enter a value!'
                            :
                            props.startValueBeforeСonfirming >= props.maxValueBeforeСonfirming ||
                            props.startValueBeforeСonfirming < 0 ? 'Incorrect value!'
                                :
                                props.maxValue === props.maxValueBeforeСonfirming &&
                                props.startValue === props.startValueBeforeСonfirming ? props.count
                                    :
                                    'Enter a value and press "set"'
                    }

                    count={props.count}
                    maxValue={props.maxValue}
                />
                <Button title='inc' func={props.addNumber} isDisabled={props.count === props.maxValue}/>
                <Button title='reset' func={props.resetNumber} isDisabled={props.count === props.startValue}/>
            </div>
        </div>
    );
}

export default Counter;

/*count={props.startValueBeforeСonfirming >= props.maxValueBeforeСonfirming ||
                props.startValueBeforeСonfirming < 0 ? 'Incorrect value!' : props.count}*/