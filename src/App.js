import './App.css';
import React, { useState } from "react";
function App() {
  
  let newCandidate = {name:"", age:20, country:"Usa", votes:0};

  let [text, setText] = useState("");
  let [candidates, setCandidates] = useState([]);
  let handleClick = () => {
    const check = candidates.find(el => el.name === text);
    if(!check){
      newCandidate.name = text;
      newCandidate.votes++;
      setCandidates([...candidates, newCandidate])
    }else{
      check.votes++;
      setCandidates([...candidates]);
    }
  };
  return (
    <React.Fragment>
      <h1>Elections</h1>
      <div className='form-container'>
          <div >
            <label>Candidate Name</label>
            <input 
            type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
          </div>
          <div>
            <button onClick={ ( ) => {
              handleClick()
              setText("")
             } }>Vote</button>
          </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
            {
              candidates.map((el,index) => {
                return ( 
                  <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.country}</td>
                    <td>{el.votes}</td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </React.Fragment>

  );
}

export default App;
