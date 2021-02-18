import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

export type CountType = number;

function App() {

  const [count, setCount] = useState<CountType> (0);
  
  const addNumber = () => {
      setCount( count + 1 )
  }

  const resetNumber = () => {
    setCount( 0 );
  }

  return (
    <div className="App">
      <Counter 
        count={count} 
        addNumber={addNumber}
        resetNumber={resetNumber}
      />
    </div>
  );
}

export default App;
