import React from 'react';
import Dice from '../assets/images/icon-dice.svg'

const CardContent = ({ onSubmit }) => {
    const handleClick = (event) => {
        event.preventDefault();
        onSubmit()
    }
    return (
        <div className=' flex items-end'>
            <button onClick={handleClick} className=' bg-Neon-Green rounded-full h-14 w-14 shadow-lg hover:shadow-Neon-Green mx-auto '><img src={Dice} alt='Dice' className=' mx-auto'/></button>
        </div>
    );
};

export default CardContent;