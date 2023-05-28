import React from "react";
import "./Form.scss";
function Form() {
  return (
    <div className='form'>
      <p className='form__tetx'>NewsLetter</p>
      <h3 className='form__title'>Design News to your inbox</h3>
      <form action='#'>
        <input className='form__input-email' type='email' placeholder='Email' />
        <div className='form__button'>
          <button className='button'>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
