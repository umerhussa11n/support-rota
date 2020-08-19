import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Foxtons - IT Support Emails Rota </p>
        <table>       
            <tr>
              <td>Day</td>
              <td>Candidate</td>
            </tr>
            <tr><td>Monday</td><td>Robert Smith</td></tr>
            <tr><td>Tuesday</td><td>Ali Zia</td></tr>
            <tr><td>Wednesday</td><td>Ye Le</td></tr>
            <tr><td>Thursday</td><td>Tomaz Dopiaza</td></tr>
            <tr><td>Friday</td><td>Umer Hussain</td></tr>
          </table>
      </header>
    </div>
  );
}

export default App;
