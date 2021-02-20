import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';

export type CountType = number;

function App() {
// functions for main counter
    const [count, setCount] = useState<CountType>(0);

    const addNumber = () => {
        setCount(count + 1)
    }
    const resetNumber = () => {
        setCount(startValue);
    }

// functions for set inputs values
    const [maxValueBeforeСonfirming, setMaxValueBeforeСonfirming] = useState<CountType>(0);
    const [maxValue, setMaxValue] = useState<CountType>(0);
    const [startValueBeforeСonfirming, setStartValueBeforeСonfirming] = useState<CountType>(0);
    const [startValue, setStartValue] = useState<CountType>(0);
    const addValues = () => {
        setCount(startValueBeforeСonfirming);
        setStartValue(startValueBeforeСonfirming)
        setMaxValue(maxValueBeforeСonfirming);
    }

// function for reset all settings
    const resetSettings = () => {
        setCount(0)
        setMaxValue(0)
        setStartValue(0)
        setMaxValueBeforeСonfirming(0)
        setStartValueBeforeСonfirming(0)
    }

    return (
        <div className="App">
            <Counter
                count={count}
                addNumber={addNumber}
                resetNumber={resetNumber}
                maxValueBeforeСonfirming={maxValueBeforeСonfirming}
                startValueBeforeСonfirming={startValueBeforeСonfirming}
                setMaxValueBeforeСonfirming={setMaxValueBeforeСonfirming}
                setStartValueBeforeСonfirming={setStartValueBeforeСonfirming}
                addValues={addValues}
                resetSettings={resetSettings}
                maxValue={maxValue}
                startValue={startValue}
            />
        </div>
    );
}

export default App;
