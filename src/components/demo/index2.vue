<template>
  <div>
    <p>{{msg}}</p>
    <p>{{counter}}</p>
    <p>{{doubleCounter}}</p>
    <p>{{refMsg}}</p>
    <p ref="desc"></p>
    <p ref="desc2"></p>
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
 
    const { counter, doubleCounter } = useCounter()
    const refMsg = ref('ref test')

    //元素引用
    const desc = ref(null)
    const desc2 = ref(null)
    // watch(counter, (val, oldVal) => {
    //   const p = desc.value
    //   p.textContent = `counter from ${oldVal} to ${val} `
    // })
    //监听两个和Vue2很不一样
    watch([counter, doubleCounter], ([val, val2], [oldVal, oldVal2]) => {
      const p = desc.value
      p.textContent = `counter from ${oldVal} to ${val} `
      const p2 = desc2.value
      p2.textContent = `doubleCounter from ${oldVal2} to ${val2} `
    })

    return { counter, doubleCounter, refMsg, desc, desc2 }
  },
 }

 function useCounter() {
    const data = reactive({
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

    return toRefs(data)
  }
</script>

<style lang='sass' scoped>
</style>