import React from "react";
import { useState } from 'react'
import './Conversor.css';
import arrowButton from '../img/arrow-button.png'

function Conversor() {
    const [binaryNumber, setBinaryNumber] = useState('');
    const [decimalNumber, setDecimalNumber] = useState('');

    const convertBinaryNumber = () => {
        let binaryArray = Array.from(binaryNumber);
        let binaryNumberArray = [];
        let sum = 0;

        for (let i = 0; i < binaryArray.length; i++) {
            binaryNumberArray.push(parseInt(binaryArray[i]));
        }

        for (let j = binaryNumberArray.length - 1; j >= 0; j--) {
            sum += (binaryNumberArray[j] * Math.pow(2, j))
        }

        setDecimalNumber(sum);
    }

    const verifyInputNumber = (value) => {
        const splittedNumbers = value.split('');

        let isValid = true;

        splittedNumbers.forEach(element => {
            if (Number(element) !== 0 && Number(element) !== 1) {
                isValid = false;
            }
        })

        console.log(isValid)
        return isValid
    }

    return (
        <div className="main-container">
            <h1>BIN<span>2</span>DEC</h1>
            <input
                type="text"
                className="binary-number"
                placeholder="BINARY NUMBER"
                maxLength={8}
                onChange={(e) => { verifyInputNumber(e.target.value) && setBinaryNumber(e.target.value) }}
                value={binaryNumber}
            />
            <img src={arrowButton}
                onClick={convertBinaryNumber}
                alt="arrow-button"
                className="arrow-button"
            />
            <input
                type="text"
                className="decimal-number"
                placeholder="DECIMAL NUMBER"
                value={decimalNumber}
            />
        </div>
    );
};

export default Conversor;