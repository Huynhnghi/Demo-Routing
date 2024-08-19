
import React from 'react';

const Result = React.memo(({ result }) => {
    console.log('Render Result');
    return <div className="result">
        {result !== null ? `= ${result}` : ""}
    </div>;
});

export default Result;
