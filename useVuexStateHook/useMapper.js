import { computed } from "@vue/reactivity"
export function useMapper(mapper,handleFn){
    const storeStateFns = handleFn(mapper)
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  return  storeState
}