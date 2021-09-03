import React from "react";

import Form from "../sharedui/Form";
import { useDispatch } from "react-redux";
import { actions } from "../Reducer/ActionConstants";
import uuid from "react-uuid";

const InputForm = (props) => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    let result = {
      id: uuid(),
      title: e.target[0].value,
      description: e.target[1].value,
      status:"not started"
    };
    dispatch({ type: actions.ADD, value: result });
    e.target[0].value=''
    e.target[1].value=''
  };
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Form su={submitHandler} />
    </div>
  );
};

export default InputForm;
