import {mapState,createNamespacedHelpers} from 'vuex'
import  useMapper  from './useMapper'
export default function useGetter(moduleName,mapper){
   let handleFn = mapState;
   if(moduleName=='string'&&  moduleName.length > 0){
     handleFn =  createNamespacedHelpers(moduleName).mapState
   }else{
    mapper =     moduleName;
   }

    return useMapper(mapper,handleFn)
}