import React from 'react';

const Form = ({years_experience, inc_years_exp, dec_years_exp, initialise, SVT_accredited, 
               working_towards_acc,toggle_accreditation, toggle_towards_accreditation}) => {
    return (
        <div className="welcome">
            <h3>Please tell us a little about yourself</h3> 
            <p>I have been practicing vascular ultrasound for 
            <button className="btnSmall" onClick={dec_years_exp}> - </button>            
             {years_experience} 
            <button className="btnSmall" onClick={inc_years_exp}> + </button> 
             years</p>
            <label><p>I am accredited by the SVT <input type="checkbox" checked={SVT_accredited} onClick={toggle_accreditation}/></p></label>
            {!SVT_accredited && <label><p>I am working towards SVT accreditation <input type="checkbox" checked={working_towards_acc} onClick={toggle_towards_accreditation}/></p></label>}
            <button className="btn btn-full" onClick={initialise}>Next</button>
        </div>
    );
};

export default Form;