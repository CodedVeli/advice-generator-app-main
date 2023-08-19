import React from 'react';
import PatternDividerD from '../assets/images/pattern-divider-desktop.svg'


const PatternDivider = () => {
    return (
        <div className=' flex flex-row items-center'>
            <div className='border border-Light-Cyan w-full h-0 mx-2'></div>
        <div className=''>
            <img src={PatternDividerD} alt="pattern-divider" />
        </div>
        <div className='border border-Light-Cyan w-full h-0'></div>

        </div>
    );
};

export default PatternDivider;