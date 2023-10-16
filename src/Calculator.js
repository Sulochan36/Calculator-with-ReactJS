import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleUndo = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <div className="input-box">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <div className="column">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button className='bottonbtn1' onClick={() => handleClick('0')}>0</button>
        </div>
        <div className="column">
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('.')}>.</button>
        </div>
        <div className="column">
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={handleCalculate}>=</button>
        </div>
        <div className="column">
          <button onClick={handleUndo}>⟦x⟧</button>
          <button onClick={() => handleClick('/')}>÷</button>
          <button onClick={() => handleClick('*')}>×</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button className='bottonbtn2' onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
