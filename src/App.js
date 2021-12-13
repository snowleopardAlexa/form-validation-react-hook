import { useState, useEffect } from "react";
import "./App.css";
import HideShow from './HideShow';

function App() {
  const initialValues = { 
    username: "", 
    email: "", 
    password: "", 
    petName: "",
    owner: "",
    date: "",
    time: "",
    phone: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.petName) {
      errors.petName = "Pet Name is required"
    }

    if (!values.owner) {
      errors.owner = "Owner is required"
    }

    if (!values.date) {
      errors.date = "Date is required"
    }

    if (!values.time) {
      errors.time= "Time is required"
    }

    if (!values.phone) {
      errors.phone = "Phone is required"
    }

    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
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
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
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
          <p className="para">{formErrors.password}</p>
          <div className="field">
            <label>Pet Name</label>
            <input
              type="text"
              name="pet name"
              value={formValues.petName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.petName}</p>
          <div className="field">
            <label>Owner</label>
            <input
              type="text"
              name="owner"
              value={formValues.owner}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.date}</p>
          <div className="field">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formValues.petName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.time}</p>
          <div className="field">
            <label>time</label>
            <input
              type="time"
              name="time"
              value={formValues.petName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.time}</p>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phone}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
      <HideShow />
    </div>
  );
}

export default App;