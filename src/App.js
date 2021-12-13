import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <h1>Registration Form</h1>
        <div className="ui divider">
          <div className="ui form">
               <div className="field">
                 <label>Username</label>
                 <input type="text" name="username" placeholder="Username" />
               </div>  
               <div className="field">
                 <label>Username</label>
                 <input type="email" name="email" placeholder="Email" />
               </div>  
               <div className="field">
                 <label>Password</label>
                 <input type="password" name="password" placeholder="Password" />
               </div>  
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
