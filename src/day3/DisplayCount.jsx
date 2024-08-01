import React from 'react';

function DisplayCount(props) {
    const {count} = props;
    return (
        <div>
            count: {count}
        </div>
    );
}

export default DisplayCount;