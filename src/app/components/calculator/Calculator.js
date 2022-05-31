import { useState } from 'react';
import './calculator.scss';

const Calculator = () => {
    const [calculate, setCalculate] = useState("");
    const [result, setResult] = useState("");

    let ops = ['+', '*', '/', '-', '%', '.']

    const createButtons = () => {
        let btn = [];

        for (let i = 1; i < 10; i++) {
            btn.push(
                <button className='btn' key={i} onClick={() => updateCalculation(i)} >{i}</button>
            )
        }
        return btn;
    }

    const updateCalculation = (value) => {
        if (ops.includes(value) && calculate === '' ||
            ops.includes(value) && ops.includes(calculate.slice(-1))) {
                return;
        }
        setResult(calculate + value);
        setCalculate(calculate + value);
    }
    /* The total func */
    function total(){
        setCalculate(eval(calculate.toString()));
    }

    function clear() {
        setCalculate('');
        setResult('');
    }

    function deleteCalc() {
        //calculate.pop();
        setCalculate(calculate.slice(0, -1));
    }

    const handleTotal = () => {

    }

    return (
        <div className='calculator-container'>
            <div className='calculator'>
            {/* Display */}
                <div className='display'>
                    <span className='result'>{calculate || "0"}</span>
                    <span className='calculate'>{result ? result : "0"}</span>
                </div>
            {/* Buttons */}
                <div className='all-buttons'>
                    <button className='ops' onClick={clear}>CLEAR</button>
                    <button className='ops' onClick={deleteCalc}>Del</button>
                    <button className='ops' onClick={() => updateCalculation('%')}>%</button>
                    <button className='ops' onClick={() => updateCalculation('.')}>.</button>
                    {createButtons()}
                    <button className='btn' onClick={() => updateCalculation('0')}>0</button>
                    <button className='ops' onClick={() => updateCalculation('-')}>-</button>
                    <button className='ops' onClick={() => updateCalculation('*')}>*</button>
                    <button className='ops' onClick={() => updateCalculation('/')}>/</button>
                    <button className='ops' onClick={() => updateCalculation('+')}>+</button>
                    <button className='ops total' onClick={total}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;