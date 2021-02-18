import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

export type CountType = number;
export type addType = boolean;
export type resetType = boolean;

function App() {

  const [count, setCount] = useState<CountType> (0);

  const [addIsDisabled, setaddIsDisabled] = useState<addType>(false); //false === включена
  const [resetIsDisabled, setresetIsDisabled] = useState<resetType>(true); //true === вимкнена
 

  
  const addNumber = () => {
    if (count === 5) {
      setaddIsDisabled(true)
      setresetIsDisabled(false)
    } else if (count < 5) {
      setCount( count + 1 );
      setresetIsDisabled(false)
    }
  }

  const resetNumber = () => {
    setCount( 0 );
    setaddIsDisabled(false)
    setresetIsDisabled(true)
  }

  return (
    <div className="App">
      <Counter 
        count={count} 
        addNumber={addNumber}
        resetNumber={resetNumber}
        addIsDisabled={addIsDisabled}
        resetIsDisabled={resetIsDisabled}
      />
    </div>
  );
}

export default App;
