import React, { useState } from 'react';
import './App.css';

function App() {

  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  }

  return (
    <div className="container">
      <form className="form"> 
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
          <div className="ui form">
               <div className="field">
                 <label>Username</label>
                 <input 
                   type="text" 
                   name="username" 
                   placeholder="Username" 
                   value={formValues.username} 
                   onChange={handleChange}
                />
               </div>  
               <div className="field">
                 <label>Email</label>
                 <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formValues.email} 
                  onChange={handleChange}
                />
               </div>  
               <div className="field">
                 <label>Password</label>
                 <input 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formValues.password} 
                  onChange={handleChange}
                />
               </div>  
               <button className="fluid ui button blue">Submit</button>
          </div>
      </form>
    </div>
  );
}

export default App;
