import React,{useEffect} from 'react';
//import  connect  from '../utils/connect';
import { useSelector,useDispatch,shallowEqual } from 'react-redux';
import { 
  decAction,
  incAction,
  getHomeMultidataAction
} from "./store/createAction";
//import { combineReducers } from 'redux-immutable';
function About4(props) {
    //自定义的connect 函数
    const { counter } = useSelector(state => ({
      // topBanners: state.get("recommend").get("topBanners")
      counter: state.counter
    }), shallowEqual);

    const dispatch =  useDispatch()
     useEffect(() => {
      dispatch(getHomeMultidataAction());
    }, [dispatch]);
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => dispatch(incAction())}>-1</button>
      <button onClick={e => dispatch(decAction())}>-5</button>
    </div>
  )
}


  export default About4;
