import React from 'react';
import Button from './components/Button'
import Display from './components/Display';
import {CountType, addType, resetType} from './App'

type CounterType = {
  count : CountType 
  addIsDisabled: addType
  resetIsDisabled: resetType 
  addNumber: () => void
  resetNumber: () => void
}

const Counter = (props: CounterType) => {

  return (
    <div>
      <Display count={props.count} />
      <Button title='inc' func={props.addNumber} isDisabled={props.addIsDisabled} />
      <Button title='reset' func={props.resetNumber} isDisabled={props.resetIsDisabled} />
    </div>
  );
}

export default Counter;