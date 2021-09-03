import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../Reducer/ActionConstants";

import Footer from "../sharedui/Footer";
import Header from "../sharedui/Header";
import InputForm from "./InputForm";
import Results from "./Results";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todos);

  console.log(data,'data from state');
  useEffect(() => {}, [data]);
  useEffect(() => {
    dispatch({ type: actions.FETCH});
  }, [dispatch]);
  return (
    <div className='container-lg justify-content-center align-items-center py-3 bg-light'>
      <Header />
      <InputForm />
      <Results data={data} />
      <Footer />
    </div>
  );
};
export default HomePage;
//
