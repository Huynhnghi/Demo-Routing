import React from 'react';

const ErrMessage = React.memo(({ message }) => {
    console.log('Render ErrorMessage');
    return <div className="error-message">{message}</div>;
});

export default ErrMessage;
