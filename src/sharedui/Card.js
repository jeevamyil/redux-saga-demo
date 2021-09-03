import React from 'react';
import Button from './Button';
import{useDispatch} from 'react-redux';
import { actions } from '../Reducer/ActionConstants';

const Card=(props)=>{
    const dispatch=useDispatch();
   //const data= useSelector(state=>state.todo.todos);

   const markCompleteHandler=(e)=>{
        dispatch({type:actions.COMPLETE, value:props.id})
        //console.log('completed')

   }
   const deleteHandler=(e)=>{
       dispatch({type:actions.REMOVE,value:props.id})
     
    }
    return(
        <div className='row flex justify-content-center mt-3 mb-5 mx-2'>
        <div className=" card text-center px-0" style={{width:"30rem"}}>
                <h1 className="card-header bg-danger text-white ">
                    {props.title}
                </h1>
        <div className="card-body">
            <h2 className='fw-normal'>
                {props.description}
            </h2>
            <h5 className='fw-light'>
                {props.status}
            </h5>
            </div>
            <div className='card-footer'>
                <Button name="Complete" className=" btn btn-outline-primary m-2" customEvent={markCompleteHandler} />
                <Button name="Delete"  className=" btn btn-outline-danger m-2" customEvent={deleteHandler}/>
            </div>
        </div>
        </div>
    )
}
export default Card;