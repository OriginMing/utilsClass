# const store = redux.createStore(reducer)  createStore传入reducer
reducer为处理函数，第一个参数为 初始的 state，第二个参数为store.dispath({type:'xxx'})传递过来的对象，通过不同的Type做不同的逻辑处理,将返回值作为新的state保存