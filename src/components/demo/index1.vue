<template>
  <div>
    <p >{{msg}}</p>
    <p>{{data.counter}}</p>
    <p>{{data.doubleCounter}}</p>
    <p>{{refMsg}}</p>
    <p>{{test}}</p>
    <p>{{hello}}</p>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted, ref, toRefs, watch, computed, onUnmounted } from 'vue'
export default {
  name: '',
  props: {
    msg:String
  },
  components:{
  },
  setup() { 
    let data = reactive({
      counter:1,
      doubleCounter: computed(()=>{
        return data.counter * 2
      })
    })
    let timer

    onMounted(()=>{
      timer = setInterval(()=>{
        data.counter ++
      },1000)
    })

    onUnmounted(()=>{
      clearInterval(timer)
    })

    const refMsg = ref('ref test')

    //用ref添加入响应式
    const state = ref({
      test:'test',
      hello:'hello'
    })

    return { data, refMsg, ...toRefs(state) }
  },
 }
</script>

<style scoped>
</style>