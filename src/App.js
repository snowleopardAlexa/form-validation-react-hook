import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  };

 const handleSubmit = (e) => {
    e.preventDefalt();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
 }

useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit {
    console.log(formValues);
  }
}, [formErrors]);


const validate = (values) => {
    const errors = {}
    const regex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
}

  return (
    <div className="container">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit} className="form"> 
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
