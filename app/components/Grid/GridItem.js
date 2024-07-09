import React from 'react';

const GridItem = ({ children, className }) => {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    );
};

export default GridItem;
