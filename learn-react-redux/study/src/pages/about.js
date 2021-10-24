import React, { Component } from 'react'
import store from './store'
import { 
    subAction
  } from "./store/createAction";
export default class about extends Component {
    constructor(props){
      super(props);
      this.state = {
          counter:store.getState().counter
      }
    };
    componentDidMount(){
      this.unsubscribue = store.subscribe(()=>{
              this.setState({
                counter:store.getState().counter
            })
        })
    };
    componentWillUnmount(){
       this.unsubscribue()
    };
    render() {
        return (
            <div>
                  <hr/>
        <h1>About</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
            </div>
        )
    }

    decrement() {
        store.dispatch(subAction(1));
      }
    
      subNumber(num) {
        store.dispatch(subAction(num));
      }
}
