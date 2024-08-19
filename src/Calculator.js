import React, { useState, useMemo } from 'react';
import { evaluate } from 'mathjs';
import './style.css';
import Result from './Result';
import ErrMessage from './ErrMessage';

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const computedResult = useMemo(() => {
        if (input === "") return null;
        try {
            return evaluate(input);
        } catch {
            return "Lỗi cú pháp";
        }
    }, [input]);

    const handleClick = (value) => {
        if (value === "C") {
            setInput("");
            setResult(null);
            setError("");
        } else if (value === "=") {
            const result = computedResult;
            setResult(result);
            setError(result === "Lỗi cú pháp" ? "Lỗi cú pháp" : "");

            const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
            savedHistory.push(`${input} = ${result}`);
            localStorage.setItem('history', JSON.stringify(savedHistory));
        } else if (["+", "-", "*", "/"].includes(value)) {
            setInput((prev) => prev + " " + value + " ");
        } else {
            setInput((prev) => {
                if (prev === "" || prev.endsWith(" ")) {
                    return prev + value;
                } else {
                    const parts = prev.split(" ");
                    const lastPart = parts.pop();
                    return parts.join(" ") + " " + value;
                }
            });
        }
    };

    return (
        <div className="phone-calculator">
            <div className="display">
                <div className="input">{input}</div>
                <ErrMessage message={error} />
                <Result result={result} />
            </div>
            <div className="keyboard">
                {["1", "2", "3", "/", "4", "5", "6", "*", "7", "8", "9", "+", "0", "=", "C", "-"].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;
