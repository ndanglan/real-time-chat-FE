import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodoRequest } from "./stores/test-store/actions";
import { AppState } from "./stores/root-reducer";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state:AppState)=>state.test);
  console.log('todos',todos)
  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
     
    </div>
  );
};

export default App;