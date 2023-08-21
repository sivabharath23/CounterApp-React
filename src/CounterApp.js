import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [inpValue, setInpValue] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {

    setCount(count - 1);
  };

  const CustomNumberAdd = () => {
    if (!inpValue) {
      setCount(count);
      setErrorMsg("Enter Input Value");
    } else if (inpValue < 0) {
      setErrorMsg("Enter Postive Value");
    } else if (inpValue >= 0) {
      setErrorMsg("");
      const act = parseInt(inpValue);
      setCount(count + act);
    }
  };

  const CustomNumberSub = () => {
    if (!inpValue) {
      setErrorMsg("Enter Input Value");
    } else if (inpValue < 0) {
      setErrorMsg("*Enter Postitive Value");
    } else if (inpValue >= 0) {
      setErrorMsg("");
      const act = parseInt(inpValue);
      setCount(count - act);
    }
  };

  const Reset = () => {
    setCount(0);
    setInpValue("");
    setErrorMsg("Reseting App");

    setTimeout(() => {
      setErrorMsg("");
    }, 1000);
  };

  const InpChange = (n) => {
    setInpValue(n.target.value);
  };

  return (
    <div className="body">
      <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10 col-12">
        <div className="box p-3">
          <h1 className="pb-3">Counter App</h1>
          <p className="h1">{count}</p>
          <button className="btn btn-danger m-4 p-3" onClick={Decrement}>
            Decrement
          </button>

          <button className="btn btn-success m-4 p-3" onClick={Increment}>
            Increment
          </button>

          <input
            className="form-control p-3"
            type="Number"
            placeholder="Custom input"
            value={inpValue}
            onChange={InpChange}
          />

          <button className="btn btn-primary m-4 p-3" onClick={CustomNumberAdd}>
            Add Count
          </button>
          <button className="btn btn-primary m-4 p-3" onClick={CustomNumberSub}>
            Sub Count
          </button>
          <button className="btn btn-dark m-4 p-3" onClick={Reset}>
            Reset
          </button>
          <span id="hide">{errormsg}</span>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
