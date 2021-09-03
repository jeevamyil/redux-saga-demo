import React from "react";
import Button from "./Button";
import {actions} from '../Reducer/ActionConstants';
import {useDispatch} from 'react-redux';

const Header = () => {

  const dispatch= useDispatch();

    const clearHandler=(e)=>{
      dispatch({type:actions.CLEAR});
        
    }
  return (
    <header className="container-lg">
      <div className="row">
        <div className="col-8">
        <h2 className="display-5 text-start mb-0">TODO APP</h2>
        </div>
        <div className="col d-flex align-content-center justify-content-end flex-wrap">
       
        <Button  className='btn btn-danger'name="Empty🗑" customEvent={clearHandler}></Button>
      
        </div>
      </div>
    </header>
  );
};

export default Header;
