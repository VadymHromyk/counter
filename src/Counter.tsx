import React from 'react';
import Button from './components/Button'
import Display from './components/Display';
import {CountType} from './App'

type CounterType = {
  count : CountType
  addNumber: () => void
  resetNumber: () => void
}

const Counter = (props: CounterType) => {

  return (
    <div>
      <Display count={props.count} />
      <Button title='inc' func={props.addNumber} isDisabled={props.count === 5} />
      <Button title='reset' func={props.resetNumber} isDisabled={props.count === 0} />
    </div>
  );
}

export default Counter;