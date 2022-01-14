import './App.css';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import {useState} from "react";
import {useForm} from "react-hook-form";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const {handleSubmit, register, reset} = useForm();

    let onSubmit = (data) => {
        console.log(data);
        reset();
    };

  return (
    <>
      <div className="card-parent">
          <form onSubmit={handleSubmit(onSubmit)}>
              <Cards
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focus}
              />
              <div className="input-container">
                  <label htmlFor="">Card Numbers</label>
                  <input
                      {...register("number", {required:true})}
                      maxLength="16"
                      type="tel"
                      name="number"
                      placeholder="Card Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      onFocus={(e) => setFocus(e.target.name)}
                  />
                  <label htmlFor="">Card Holder</label>
                  <input
                      {...register("name", {required:true})}
                      maxLength="18"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={(e) => setFocus(e.target.name)}
                  />
              </div>
              <div className="footer-container">
                  <div>
                      <p>Expiration Date</p>
                      <input
                          {...register("expiry", {required:true})}
                          maxLength="5"
                          type="text"
                          name="expiry"
                          placeholder="MM/YY Expiry"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          onFocus={(e) => setFocus(e.target.name)}
                      />
                  </div>
                  <div>
                      <p>Cvv</p>
                      <input
                          {...register("cvc", {required:true})}
                          maxLength="3"
                          type="tel"
                          name="cvc"
                          placeholder="CVC"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          onFocus={(e) => setFocus(e.target.name)}
                      />
                  </div>
              </div>
              <button type="submit" className="btn-submit" value="send">Submit</button>
          </form>
      </div>
    </>
  );
};

export default App;