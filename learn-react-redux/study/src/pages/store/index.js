import { createStore, compose,applyMiddleware } from 'redux';
import reducer from './createredux.js'
import thunkMiddleware from 'redux-thunk';
//thunkMiddleware
// composeEnhancers函数 如果浏览器安装了redux-devtools则window下就会有这个 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
//https://github.com/zalmoxisus/redux-devtools-extension redux-devtools 

//redux-thunk 使用开始 redux-thunk的作用：默认rudux   dispatch（）一个action对象，不能传入函数，我们可以用redux-thunk传入action函数，这样就可以先处理网络请求再
const storeEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer));
//redux-thunk 使用结束
//基础的 使用开始仅有redux
//const store =  createStore(reducer,composeEnhancers())
//基础的 使用结束仅有redux
export default store
