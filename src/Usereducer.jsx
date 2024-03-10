import React, { useEffect ,useReducer} from "react";


function Countnum(state, data) {
  console.log("state:" + state, "data:" + data);
  return data+state
}

const Usereducer = () => {
  let [count,dispatch]= useReducer(Countnum,0);
 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(-1)
      }}>-</button>
      <button onClick={()=>{
        dispatch(+1)
      }}>+</button>
    </div>
  );
};

export default Usereducer;
