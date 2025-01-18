import React, { useState } from 'react';
import './App.css';
function App() {
    const [display, setDisplay] = useState('0');
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const handleButtonClick = (value) => {
        if (value === 'AC') {
            clearDisplay();
        } else if (
            value === '+' ||
            value === '-' ||
            value === '*' ||
            value === '/'
        ) {
            handleOperator(value);
        } else if (value === '=') {
            calculateResult();
        } else {
            updateDisplay(value);
        }
    };
    const clearDisplay = () => {
        setDisplay('0');
        setCurrentValue('0');
        setPreviousValue('');
        setOperator('');
        setWaitingForOperand(false);
    };
    const handleOperator = (value) => {
        if (operator && waitingForOperand) {
            setOperator(value);
            return;
        }
        if (previousValue === '') {
            setPreviousValue(currentValue);
        } else if (!waitingForOperand) {
            const result = calculate(
                parseFloat(previousValue),
                parseFloat(currentValue),
                operator
            );
            setPreviousValue(result);
            setCurrentValue(result.toString());
            setDisplay(result.toString());
        }
        setOperator(value);
        setWaitingForOperand(true);
    };
    const calculateResult = () => {
        if (!operator || waitingForOperand) return;
        const result = calculate(
            parseFloat(previousValue),
            parseFloat(currentValue),
            operator
        );
        setDisplay(result.toString());
        setCurrentValue(result.toString());
        setPreviousValue('');
        setOperator('');
        setWaitingForOperand(false);
    };
    const calculate = (prev, current, operator) => {
        switch (operator) {
            case '+':
                return prev + current;
            case '-':
                return prev - current;
            case '*':
                return prev * current;
            case '/':
                return prev / current;
            default:
                return current;
        }
    };
    const updateDisplay = (value) => {
        if (value === '.' && currentValue.includes('.')) return;
        if (waitingForOperand) {
            setDisplay(value);
            setCurrentValue(value);
            setWaitingForOperand(false);
        } else {
            const newValue = currentValue === '0' ? value : currentValue + value;
            setDisplay(newValue);
            setCurrentValue(newValue);
        }
    };
    const Button = ({ label, orange, wide }) => {
        const className = ['button', orange ? 'orange' : '', wide ? 'wide' : '']
            .join(' ')
            .trim();
        return (
            <button
                className={className}
                onClick={() => handleButtonClick(label)}
            >
                {label}
            </button>
        );
    };
    return (
        <div className="App">
            <h1>Simple Calculator</h1>
            <div className="calculator">
                <div className="display">{display}</div>
                <div className="buttons">
                    <Button label="AC" />
                    <Button label="+/-" />
                    <Button label="%" />
                    <Button label="/" orange />
                    <Button label="7" />
                    <Button label="8" />
                    <Button label="9" />
                    <Button label="*" orange />
                    <Button label="4" />
                    <Button label="5" />
                    <Button label="6" />
                    <Button label="-" orange />
                    <Button label="1" />
                    <Button label="2" />
                    <Button label="3" />
                    <Button label="+" orange />
                    <Button label="0" wide />
                    <Button label="." />
                    <Button label="=" orange />
                </div>
            </div>
        </div>
    );
}
export default App;

