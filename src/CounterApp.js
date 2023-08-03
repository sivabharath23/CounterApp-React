import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const [inpValue, setInpValue] = useState("");

  const CustomNumberAdd = () => {
    if (inpValue === "") {
      document.getElementById("hide").style.display = "block";
    }
    if (inpValue < 0) {
      document.getElementById("hidden").style.display = "block";
    }

    if (inpValue >= 0) {
      document.getElementById("hidden").style.display = "none";
      const act = parseInt(inpValue);
      setCount(count + act);
    }
  };

  const CustomNumberSub = () => {
    if (inpValue === "") {
      document.getElementById("hide").style.display = "block";
    }
    if (inpValue < 0) {
      document.getElementById("hidden").style.display = "block";
    }

    if (inpValue >= 0) {
      document.getElementById("hidden").style.display = "none";
      const act = parseInt(inpValue);
      setCount(count - act);
    }
  };

  const Reset = () => {
    setCount(0);
    setInpValue("");
    document.getElementById("hide").style.display = "none";
    document.getElementById("hidden").style.display = "none";
  };

  const InpChange = (n) => {
    setInpValue(n.target.value);
  };

  return (
    <div className="body">
      <div className="col-md-7 col-lg-6 col-sm-8 col-xl-4 col-8">
        <div className="box p-3">
          <h1 className="pb-3">Counter App</h1>
          <p className="h1">{count}</p>
          <button className="btn btn-danger m-4 p-4" onClick={Decrement}>
            Decrement
          </button>

          <button className="btn btn-success m-4 p-4" onClick={Increment}>
            Increment
          </button>

          <input
            className="form-control"
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
          <span style={{ display: "none" }} id="hidden">
            *Enter Positive Value
          </span>
          <span style={{ display: "none" }} id="hide">
            *Enter Value as Input
          </span>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
