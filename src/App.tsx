import React, {useEffect, useState} from 'react';
import Counter from './Counter';

export type CountType = number;

function App() {
// functions for main counter
    const [count, setCount] = useState<CountType>(0);
    useEffect(() => {
        const countLocalValue = localStorage.getItem('count')
        if (countLocalValue) {
            setCount(JSON.parse(countLocalValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])
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
    useEffect(() => {
        const maxLocalValue = localStorage.getItem('maxValue')
        if (maxLocalValue) {
            setMaxValue(JSON.parse(maxLocalValue));
            setMaxValueBeforeСonfirming(JSON.parse(maxLocalValue))
        }
        let startLocalValue = localStorage.getItem('startValue')
        if (startLocalValue) {
            setStartValue(JSON.parse(startLocalValue));
            setStartValueBeforeСonfirming(JSON.parse(startLocalValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [maxValue, startValue])
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
