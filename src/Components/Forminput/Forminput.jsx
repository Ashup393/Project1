import React from 'react';
import './Forminput.scss';

const Forminput = (props) => {

   

    const {errorMessage, onChange , id , ...inputprops} = props;
  return (
    
    <div className='forminputs'>
    
    <input {...inputprops}  onChange={onChange }/>
    <span className='errorMessage'>{errorMessage}</span>
      {/* <input placeholder={props.placeholder}></input> */}
    </div>
  )
    
   
}

export default Forminput;
