import React from 'react';

const AdviceShow = ({ advice }) => {
     

    
    
    return (
        <div className=' justify-center'>
            <section >
                <p className=' font-sans-serif text-Neon-Green text-sm flex justify-center'>
                    ADVICE #{advice.id}
                </p>
                <p className=' gap-0 font-Manrope text-Light-Cyan align-middle leading-relaxed text-lg  text-justify  '>"
               {advice.advice}"
               </p> 
            </section>
        </div>
    );
};

export default AdviceShow;