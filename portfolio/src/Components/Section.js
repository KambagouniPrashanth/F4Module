import React from 'react';

const Section=(props)=>{
    
    let{title,description}=props;
    console.log(title,description)
    return(
        <div className='section'>
            <hr/>
            <h2>{title}</h2>
            <p>{description}</p>

        </div>
    )
}
export default Section;