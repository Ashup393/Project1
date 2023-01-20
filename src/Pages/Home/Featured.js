import React from 'react';
import lady from './lady.jpg';
import './home.scss';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
  <div>
  {/* just for hint hint because you have to find url */}
  <Link to='/login'>Login </Link><br/> 
  <Link to ='/register'>New Registeration</Link> 
    {/* just for hint hint because you have to find url */}
    <h3>Featured Artikel </h3><div/>
    <div className='maindiv'>
   
      <div className='leftdiv'>
      <img src={lady}></img>

<h2>Halaman Detail artiklepada blog </h2>
<span>To localize the provider's OAuth flow to the user's <br/> 
language without explicitly passing the relevant  <br/>
OAuth parameters, update the language </span>
      </div>
      <div className='rightdiv'>
        <div className='sidediv'>
        <img  src={lady}></img>

<h5>Halaman Detail artiklepada blog </h5>


        </div>
        <div className='sidediv'>
        <img src={lady}></img>

<h5>Halaman Detail artiklepada blog </h5>

        </div>
        <div className='sidediv'>
        <img src={lady}></img>

<h5>Halaman Detail artiklepada blog </h5>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured
