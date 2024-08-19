import React, { useState, useEffect } from 'react';

function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = () => {
            const savedHistory = localStorage.getItem('history');
            console.log('Saved history:', savedHistory);

            if (savedHistory) {
                const parsedHistory = JSON.parse(savedHistory);
                if (Array.isArray(parsedHistory)) {
                    setHistory(parsedHistory);
                } else {
                    setHistory([]);
                }
            } else {
                setHistory([]);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div>
            <h2>History</h2>
            {history.length > 0 ? (
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No history available</p>
            )}
        </div>
    );
}

export default History;
