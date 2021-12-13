import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {

const { register, handleSubmit, errors } = useForm();
const [userInfo, setUserInfo] = useState();

const onSubmit = (data) => {
  setUserInfo(data);
  console.log(data);
}

  return (
    <div className="container">
      <prev>{JSON.stringify(userInfo, undefined,2)}</prev>
      <form onSubmit={handleSubmit(onSubmit)} className="form"> 
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
          <div className="ui form">
               <div className="field">
                 <label>Username</label>
                 <input type="text" name="username" placeholder="Username" ref={register} />
               </div>  
               <div className="field">
                 <label>Email</label>
                 <input type="email" name="email" placeholder="Email" ref={register} />
               </div>  
               <div className="field">
                 <label>Password</label>
                 <input type="password" name="password" placeholder="Password" ref={register} />
               </div>  
               <button className="fluid ui button blue">Submit</button>
          </div>
      </form>
    </div>
  );
}

export default App;
