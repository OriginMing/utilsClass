import {mapGetters,createNamespacedHelpers} from 'vuex'
import  useMapper  from './useMapper'
export default function useGetter(moduleName,mapper){
   let handleFn = mapGetters;
   if(moduleName=='string'&&  moduleName.length > 0){
     handleFn =  createNamespacedHelpers(moduleName).mapGetters
   }else{
    mapper =     moduleName;
   }

    return useMapper(mapper,handleFn)
}