import React from 'react';
//import  connect  from '../utils/connect';
import { connect } from 'react-redux';
import { 
  decAction,
  subAction
} from "./store/createAction";

function About3(props) {
    //自定义的connect 函数
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
    </div>
  )
}

const mapStateToProps = state=>{
    return{
        counter : state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
      decrement: function() {
        dispatch(decAction());
      },
      subNumber: function(num) {
        dispatch(subAction(num))
      }
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(About3);
