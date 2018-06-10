import React from 'react';

const Form = ({years_experience, inc_years_exp, dec_years_exp, initialise}) => {
    return (
        <div className="welcome">
            <h3>Please tell us a little about yourself</h3> 
            <p>I have been practicing vascular ultrasound for 
            <button className="btnSmall" onClick={dec_years_exp}> - </button>            
             {years_experience} 
            <button className="btnSmall" onClick={inc_years_exp}> + </button> 
             years</p>
            <p>I am accredited by the SVT</p>
                
            <p>I am working towards SVT accreditation</p>

            <button className="btn btn-full" onClick={initialise}>Next</button>
        </div>
    );
};

export default Form;