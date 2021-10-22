#      composition写法 computed会对mapstate返回的对象（里面为一个个函数）处理 处理过程会用到 this.$store,因为setup中没有绑定this所以 通过mapstate取到的对象里的函数需要处理手动绑定this为$store,才能正确处理 
通过useGetter 和 useState 获得 用 createNamespacedHelpers创建对应模块的 mapGetters和mapState处理函数 传递给 useMapper处理
