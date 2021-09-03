import React from "react";
import Button from "./Button";

const Form = (props) => {
  const resetHandler = (e) => {
    e.preventDefault();
    e.target.form.reset();
  };
  return (
    <div className="mt-5 mb-2" style={{ width: "40rem" }}>
      <form onSubmit={props.su}>
        <div>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            minLength="3"
            id="title"
            className="form-control mt-2 mb-3"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            minLength="5"
            id="description"
            className="form-control mt-2 mb-3"
            required
          ></input>
        </div>
        <div className="text-center">
          <Button name="Submit" className="btn btn-outline-info m-3" />
          <Button
            name="Reset"
            className="btn btn-outline-danger m-3"
            customEvent={resetHandler}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
